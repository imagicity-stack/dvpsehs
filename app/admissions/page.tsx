import type { Metadata } from "next";
import { CalendarHeart, ClipboardList, Handshake, Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { RegistrationForm } from "@/components/forms/RegistrationForm";
import { site, fullAddress } from "@/lib/site";
import { programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions & Registration",
  description:
    "Register your child at Drona Valley Public School — the joyful early-years wing of The Elden Heights School. Small classes, warm teachers, year-round admissions.",
  alternates: { canonical: "/admissions" },
};

const steps = [
  {
    icon: ClipboardList,
    title: "1 · Register your interest",
    body: "Fill in the quick form below. It takes a minute and tells us a little about your little one.",
    color: "text-coral",
  },
  {
    icon: CalendarHeart,
    title: "2 · Visit & play",
    body: "We'll call to book a relaxed campus visit. Meet the teachers, see the classrooms, ask us anything.",
    color: "text-sky",
  },
  {
    icon: Handshake,
    title: "3 · Welcome aboard",
    body: "Complete the simple enrolment paperwork and we'll get your child settled, happy and ready to bloom.",
    color: "text-grass",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        kicker="Admissions open · Ages 2–6"
        title={<>Let's begin your child's <span className="text-crimson">happiest adventure</span></>}
        subtitle="Admissions run year-round, but our classes are kept deliberately small — so the sooner you register, the better your chances of your preferred programme and start date."
        crumbs={[{ label: "Admissions" }]}
        tone="coral"
      />

      {/* Steps */}
      <section className="container-wide -mt-6 pb-4">
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="card h-full">
                <div className={`inline-flex rounded-2xl bg-cream p-3 ${s.color}`}>
                  <s.icon className="h-7 w-7" strokeWidth={2.2} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="container-wide py-14">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="order-2 lg:order-1">
            <div className="rounded-4xl border border-ink/5 bg-white p-6 shadow-card sm:p-8">
              <SectionHeading
                align="left"
                kicker="Registration form"
                title="Register your child"
                subtitle="Pop your details below and our admissions team will be in touch to arrange your visit."
              />
              <div className="mt-8">
                <RegistrationForm />
              </div>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={0.1}>
            <div className="space-y-5 lg:sticky lg:top-24">
              {/* Programmes quick list */}
              <div className="rounded-4xl bg-grape-light/40 p-6">
                <h3 className="font-display text-lg font-bold">Programmes you can register for</h3>
                <ul className="mt-4 space-y-2.5">
                  {programs.map((p) => (
                    <li key={p.slug} className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3">
                      <span className="font-display font-bold text-ink">{p.name}</span>
                      <span className="text-sm font-semibold text-grape-dark">{p.age}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct contact */}
              <div className="rounded-4xl bg-crimson p-6 text-white">
                <h3 className="font-display text-lg font-bold text-white">Prefer to talk to a human?</h3>
                <p className="mt-1 text-sm text-white/80">Our admissions desk would love to help.</p>
                <ul className="mt-5 space-y-3.5 text-sm">
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gold-light" />
                    <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="hover:text-gold-light">
                      {site.phonePrimary}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gold-light" />
                    <a href={`mailto:${site.admissionsEmail}`} className="hover:text-gold-light">
                      {site.admissionsEmail}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                    <span className="text-white/85">{fullAddress()}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-gold-light" />
                    <span className="text-white/85">{site.hours.office}</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-4xl border-2 border-dashed border-gold/50 bg-gold-light/20 p-6 text-center">
                <p className="font-display text-sm font-bold text-crimson">A seamless next step 🌟</p>
                <p className="mt-1 text-sm text-ink/70">
                  As the early-years wing of {site.parent}, our graduates enjoy a warm, prioritised pathway into
                  Grade 1 — one happy family, all the way through.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
