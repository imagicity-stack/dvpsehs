"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, Lock, Mail, Eye, EyeOff, ShieldCheck, AlertTriangle, ArrowLeft } from "lucide-react";
import { DvpsMark } from "@/components/brand/DvpsLogo";
import { useAuth } from "@/components/portal/AuthProvider";

export default function PortalLoginPage() {
  const { signIn, loading, isAdmin, configured } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [status, setStatus] = useState<"idle" | "signing">("idle");
  const [error, setError] = useState("");

  // Already signed in as the superadmin? Skip the form.
  useEffect(() => {
    if (!loading && isAdmin) {
      router.replace("/portal");
    }
  }, [loading, isAdmin, router]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setStatus("signing");
    const result = await signIn(email, password);
    if (result.ok) {
      router.replace("/portal");
      return;
    }
    setError(result.message);
    setStatus("idle");
  }

  return (
    <div className="grid min-h-screen place-items-center px-5 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-ivory/95 shadow-lux">
            <DvpsMark className="h-11 w-11" />
          </div>
          <span className="label-kicker !text-gold-light before:!bg-gold-light/70">Restricted access</span>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ivory">Superadmin Portal</h1>
          <p className="mt-2 text-sm text-ivory/60">
            Sign in with your authorised superadmin credentials.
          </p>
        </div>

        <div className="rounded-4xl border border-white/10 bg-ink/40 p-6 shadow-lux backdrop-blur-xl sm:p-8">
          {!configured && (
            <div className="mb-5 flex items-start gap-3 rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-gold-light">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
              <p>
                The portal isn&apos;t connected to Firebase yet. Add the
                <code className="mx-1 rounded bg-black/30 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_FIREBASE_*</code>
                environment variables to enable sign-in.
              </p>
            </div>
          )}

          <form onSubmit={onSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-1.5 block font-display text-sm font-bold text-ivory/90">
                Email
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ivory/40" />
                <input
                  id="email"
                  type="email"
                  autoComplete="username"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@eldenheights.org"
                  className="w-full rounded-2xl border-2 border-white/10 bg-black/20 py-3 pl-12 pr-4 text-sm text-ivory placeholder:text-ivory/35 transition focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block font-display text-sm font-bold text-ivory/90">
                Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ivory/40" />
                <input
                  id="password"
                  type={showPw ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border-2 border-white/10 bg-black/20 py-3 pl-12 pr-12 text-sm text-ivory placeholder:text-ivory/35 transition focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  aria-label={showPw ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-ivory/50 transition hover:text-ivory"
                >
                  {showPw ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="flex items-center gap-2 rounded-2xl bg-coral/15 px-4 py-3 text-sm font-semibold text-coral-light">
                <AlertTriangle className="h-4 w-4 shrink-0" /> {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "signing"}
              className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "signing" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Signing in…
                </>
              ) : (
                <>
                  <ShieldCheck className="h-5 w-5" /> Sign in
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-ivory/50 transition hover:text-ivory/80"
          >
            <ArrowLeft className="h-4 w-4" /> Back to the website
          </Link>
        </div>
      </div>
    </div>
  );
}
