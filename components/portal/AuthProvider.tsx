"use client";

/**
 * Client-side auth context for the Superadmin Portal.
 *
 * Wraps the portal in a React context that mirrors the Firebase Auth session:
 * who is signed in, whether we're still checking, and helpers to sign in and
 * out. Firebase persists the session in the browser, so a signed-in superadmin
 * stays signed in across refreshes until they log out.
 */

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { firebaseConfigured, getFirebaseAuth } from "@/lib/firebase";
import { friendlyAuthError, isSuperadmin } from "@/lib/portal";

type SignInResult = { ok: true } | { ok: false; message: string };

type AuthContextValue = {
  /** The signed-in Firebase user, or null. */
  user: User | null;
  /** True while the initial auth state is still being resolved. */
  loading: boolean;
  /** Whether Firebase env config is present at all. */
  configured: boolean;
  /** True when the signed-in user is the configured superadmin. */
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<SignInResult>;
  signOutUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!firebaseConfigured) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = useMemo<AuthContextValue>(() => {
    async function signIn(email: string, password: string): Promise<SignInResult> {
      if (!firebaseConfigured) {
        return {
          ok: false,
          message: "The portal isn't connected to Firebase yet. Add the Firebase env variables first.",
        };
      }

      // Only the configured superadmin may even attempt a sign-in — reject
      // other addresses before touching Firebase.
      if (!isSuperadmin(email)) {
        return { ok: false, message: "That email and password don't match. Please try again." };
      }

      try {
        const cred = await signInWithEmailAndPassword(getFirebaseAuth(), email.trim(), password);
        // Defence in depth: if somehow a non-superadmin authenticated, drop them.
        if (!isSuperadmin(cred.user.email)) {
          await signOut(getFirebaseAuth());
          return { ok: false, message: "This account isn't authorised for the portal." };
        }
        return { ok: true };
      } catch (err) {
        const code = (err as { code?: string })?.code;
        return { ok: false, message: friendlyAuthError(code) };
      }
    }

    async function signOutUser() {
      if (firebaseConfigured) {
        await signOut(getFirebaseAuth());
      }
    }

    return {
      user,
      loading,
      configured: firebaseConfigured,
      isAdmin: isSuperadmin(user?.email),
      signIn,
      signOutUser,
    };
  }, [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an <AuthProvider>.");
  }
  return ctx;
}
