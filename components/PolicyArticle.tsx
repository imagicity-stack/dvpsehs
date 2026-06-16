import Link from "next/link";
import { FileText, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { policyNav, site } from "@/lib/site";

export type Block =
  | { p: string }
  | { list: string[] }
  | { sub: string }; // a small sub-heading inside a section

export type PolicySection = {
  id: string;
  heading: string;
  blocks: Block[];
};

export type PolicyContent = {
  slug: string;
  title: string;
  intro: string;
  updated: string;
  sections: PolicySection[];
};

function renderBlock(b: Block, i: number) {
  if ("p" in b) {
    return (
      <p key={i} className="mt-3 leading-relaxed text-ink/75">
        {b.p}
      </p>
    );
  }
  if ("sub" in b) {
    return (
      <h4 key={i} className="mt-5 font-display text-base font-bold text-ink">
        {b.sub}
      </h4>
    );
  }
  return (
    <ul key={i} className="mt-3 space-y-2">
      {b.list.map((item, j) => (
        <li key={j} className="flex items-start gap-2.5 text-ink/75">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PolicyArticle({ content }: { content: PolicyContent }) {
  return (
    <>
      <PageHero
        kicker="School policies"
        title={content.title}
        crumbs={[{ label: "Policies", href: "/policies" }, { label: content.title }]}
        tone="crimson"
      />

      <div className="container-wide grid gap-10 py-14 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-4xl bg-white p-5 shadow-card">
            <p className="px-2 font-display text-sm font-bold uppercase tracking-wide text-ink/50">
              All policies
            </p>
            <nav className="mt-3 space-y-1">
              {policyNav.map((n) => {
                const active = n.href.endsWith(content.slug);
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={`flex items-center gap-2 rounded-2xl px-3 py-2.5 text-sm font-semibold transition ${
                      active ? "bg-crimson text-white" : "text-ink/70 hover:bg-cream"
                    }`}
                  >
                    <FileText className="h-4 w-4 shrink-0 opacity-70" />
                    {n.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mt-5 rounded-4xl bg-crimson p-5 text-white">
            <p className="font-display text-sm font-bold">Questions about a policy?</p>
            <p className="mt-1 text-sm text-white/80">We're always happy to explain.</p>
            <div className="mt-4 space-y-2 text-sm">
              <a href={`mailto:${site.generalEmail}`} className="flex items-center gap-2 hover:text-gold-light">
                <Mail className="h-4 w-4" /> {site.generalEmail}
              </a>
              <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-gold-light">
                <Phone className="h-4 w-4" /> {site.phonePrimary}
              </a>
            </div>
          </div>
        </aside>

        {/* Article */}
        <article className="min-w-0">
          <div className="rounded-4xl border border-ink/5 bg-white p-6 shadow-card sm:p-9">
            <p className="text-sm font-semibold text-ink/45">Last updated: {content.updated}</p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-ink/80">{content.intro}</p>

            {/* TOC */}
            <nav className="mt-6 rounded-3xl bg-cream p-5">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-ink/50">On this page</p>
              <ol className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                {content.sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-sm font-semibold text-crimson hover:underline">
                      {i + 1}. {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-8 divide-y divide-ink/5">
              {content.sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-24 py-6 first:pt-0">
                  <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
                    <span className="text-crimson">{i + 1}.</span> {s.heading}
                  </h2>
                  {s.blocks.map(renderBlock)}
                </section>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-gold-light/20 p-5 text-sm text-ink/70 ring-1 ring-gold/30">
              This policy is published by {site.name}, the early-years wing of {site.parent}, and is reviewed
              regularly. It is governed by the laws of {site.address.country}. For the version history or a
              printable copy, please contact the school office.
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
