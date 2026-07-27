"use client";

/**
 * Hides the public marketing chrome (announcement bar, header, footer) on the
 * Superadmin Portal routes so the portal renders as its own clean surface,
 * while leaving the rest of the site untouched.
 */

import { usePathname } from "next/navigation";

export function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/portal")) return null;
  return <>{children}</>;
}
