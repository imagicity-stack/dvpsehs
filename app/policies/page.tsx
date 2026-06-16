import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  ScrollText,
  HeartHandshake,
  HandHeart,
  Stethoscope,
  Receipt,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { policies } from "@/lib/policies";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "School Policies",
  description:
    "Read the policies of Drona Valley Public School — privacy, terms, admissions, safeguarding & child protection, anti-bullying, health & safety, and fees & refunds.",
  alternates: { canonical: "/policies" },
};

const meta: Record<string, { icon: typeof ShieldCheck; color: string; blurb: string }> = {
  privacy: { icon: FileText, color: "bg-sky-light/50 text-sky-dark", blurb: "How we collect, use and protect your family's information." },
  terms: { icon: ScrollText, color: "bg-grape-light/50 text-grape-dark", blurb: "The terms that govern your use of this website." },
  admissions: { icon: HeartHandshake, color: "bg-coral-light/50 text-coral-dark", blurb: "How we offer places fairly and transparently." },
  "child-protection": { icon: ShieldCheck, color: "bg-crimson/10 text-crimson", blurb: "Our highest priority — keeping every child safe." },
  "anti-bullying": { icon: HandHeart, color: "bg-bubblegum-light/50 text-bubblegum-dark", blurb: "Building a kind, inclusive community from day one." },
  "health-safety": { icon: Stethoscope, color: "bg-grass-light/50 text-grass-dark", blurb: "A clean, safe and caring environment for little ones." },
  "fees-refund": { icon: Receipt, color: "bg-sunshine-light/60 text-sunshine-dark", blurb: "Clear, fair information about fees and refunds." },
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        kicker="Transparency you can trust"
        title={<>Our policies, in <span className="text-crimson">plain words</span></>}
        subtitle="We believe parents deserve clarity. Here's everything that keeps your child safe, happy and well cared for — written to be read, not buried."
        crumbs={[{ label: "Policies" }]}
        tone="crimson"
      />

      <section className="container-wide py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.values(policies).map((p, i) => {
            const m = meta[p.slug];
            const Icon = m.icon;
            return (
              <Reveal key={p.slug} delay={(i % 3) * 0.05}>
                <Link
                  href={`/policies/${p.slug}`}
                  className="group flex h-full flex-col rounded-4xl border border-ink/5 bg-white p-6 shadow-card transition hover:-translate-y-1.5"
                >
                  <div className={`inline-flex w-fit rounded-2xl p-3 ${m.color}`}>
                    <Icon className="h-7 w-7" strokeWidth={2.1} />
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold">{p.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{m.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-bold text-crimson">
                    Read policy
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-4xl bg-cream p-6 text-center ring-1 ring-ink/5">
          <p className="text-sm text-ink/65">
            Can't find what you're looking for, or need a policy in another format? Email{" "}
            <a href={`mailto:${site.generalEmail}`} className="link-underline">
              {site.generalEmail}
            </a>{" "}
            and our office will gladly help.
          </p>
        </div>
      </section>
    </>
  );
}
