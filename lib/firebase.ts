/**
 * Firebase client initialisation for the Superadmin Portal.
 *
 * The portal authenticates against Firebase Authentication — no credentials
 * live in this source file. The project config below is pulled entirely from
 * `NEXT_PUBLIC_FIREBASE_*` environment variables (see `.env.example`). These
 * values are safe to expose to the browser (they identify the project, they
 * are not secrets) — the *account* password never touches this bundle.
 *
 * If the env vars are missing the module stays inert and `firebaseConfigured`
 * is `false`, so the UI can show a helpful "not configured yet" message
 * instead of crashing.
 */

import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
} as const;

/** True only when the minimum config needed to sign in is present. */
export const firebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.appId,
);

let app: FirebaseApp | undefined;
let auth: Auth | undefined;

if (firebaseConfigured) {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  auth = getAuth(app);
}

/**
 * Returns the initialised Firebase Auth instance, throwing a clear error if
 * the project has not been configured yet. Call this only from client code
 * that has already checked `firebaseConfigured`, or be ready to catch.
 */
export function getFirebaseAuth(): Auth {
  if (!auth) {
    throw new Error(
      "Firebase is not configured. Add the NEXT_PUBLIC_FIREBASE_* variables to your environment.",
    );
  }
  return auth;
}

export { app, auth };
