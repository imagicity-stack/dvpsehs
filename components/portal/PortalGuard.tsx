"use client";

/**
 * Gate for protected portal pages. While the auth state resolves it shows a
 * gentle loading state; once resolved, anyone who isn't the signed-in
 * superadmin is redirected to the login screen.
 */

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useAuth } from "./AuthProvider";

export function PortalGuard({ children }: { children: React.ReactNode }) {
  const { loading, isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.replace("/portal/login");
    }
  }, [loading, isAdmin, router]);

  if (loading || !isAdmin) {
    return (
      <div className="grid min-h-[60vh] place-items-center">
        <div className="flex flex-col items-center gap-3 text-ink/60">
          <Loader2 className="h-7 w-7 animate-spin text-crimson" />
          <p className="font-fun text-sm">Checking your access…</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
