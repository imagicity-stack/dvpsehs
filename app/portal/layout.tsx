import type { Metadata } from "next";
import { AuthProvider } from "@/components/portal/AuthProvider";

export const metadata: Metadata = {
  title: "Superadmin Portal",
  description: "Restricted access — Drona Valley Public School superadmin portal.",
  // Keep the portal out of search engines and social previews entirely.
  robots: { index: false, follow: false, nocache: true },
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="relative min-h-screen bg-wine-deep text-ivory">
        {children}
      </div>
    </AuthProvider>
  );
}
