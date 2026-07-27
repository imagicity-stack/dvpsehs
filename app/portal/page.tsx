"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LogOut,
  ShieldCheck,
  Users,
  Inbox,
  ImageIcon,
  Settings,
  ExternalLink,
} from "lucide-react";
import { DvpsMark } from "@/components/brand/DvpsLogo";
import { PortalGuard } from "@/components/portal/PortalGuard";
import { useAuth } from "@/components/portal/AuthProvider";

/** Placeholder tiles for the tools that will live in the portal. */
const tools = [
  {
    icon: Inbox,
    title: "Enquiries & Registrations",
    body: "Review contact messages and admission registrations submitted through the website.",
  },
  {
    icon: Users,
    title: "Admissions Pipeline",
    body: "Track prospective families from first enquiry through to enrolment.",
  },
  {
    icon: ImageIcon,
    title: "Gallery & Content",
    body: "Manage the photos, announcements and content shown across the public site.",
  },
  {
    icon: Settings,
    title: "Site Settings",
    body: "Update school details, contact channels and portal access.",
  },
];

function Dashboard() {
  const { user, signOutUser } = useAuth();
  const router = useRouter();

  async function handleSignOut() {
    await signOutUser();
    router.replace("/portal/login");
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
      {/* Top bar */}
      <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ivory/95 shadow-lux">
            <DvpsMark className="h-8 w-8" />
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-ivory">Superadmin Portal</p>
            <p className="text-xs text-ivory/55">Drona Valley Public School</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-xs uppercase tracking-wide text-ivory/45">Signed in as</p>
            <p className="text-sm font-semibold text-ivory">{user?.email}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="btn-cream !px-5 !py-2.5 text-sm"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </header>

      {/* Welcome */}
      <section className="py-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-semibold text-gold-light">
          <ShieldCheck className="h-4 w-4" /> Superadmin access
        </span>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ivory sm:text-4xl">
          Welcome back
        </h1>
        <p className="mt-2 max-w-2xl text-ivory/60">
          This is the private control centre for the school website. The tools below are placeholders
          for what&apos;s coming next — say the word and we&apos;ll wire each one up.
        </p>
      </section>

      {/* Tool grid */}
      <section className="grid gap-4 sm:grid-cols-2">
        {tools.map((t) => (
          <div
            key={t.title}
            className="group rounded-3xl border border-white/10 bg-ink/40 p-6 shadow-lux backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-gold/30"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/15 text-gold-light">
              <t.icon className="h-6 w-6" />
            </div>
            <h2 className="mt-4 font-display text-lg font-semibold text-ivory">{t.title}</h2>
            <p className="mt-1.5 text-sm text-ivory/60">{t.body}</p>
            <span className="mt-3 inline-block rounded-full bg-white/5 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-ivory/40">
              Coming soon
            </span>
          </div>
        ))}
      </section>

      {/* Footer link */}
      <div className="mt-8 border-t border-white/10 pt-6">
        <Link
          href="/"
          target="_blank"
          className="inline-flex items-center gap-1.5 text-sm text-ivory/50 transition hover:text-ivory/80"
        >
          View the public website <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function PortalPage() {
  return (
    <PortalGuard>
      <Dashboard />
    </PortalGuard>
  );
}
