import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Drona Valley Public School. Call, email or send us a message — we'd love to hear from you and show you around our happy campus.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Say hello 👋"
        title={<>We'd <span className="text-sky-dark">love</span> to hear from you</>}
        subtitle="Questions, a visit, or just a friendly hello — pick whichever way is easiest for you. We promise a warm, prompt reply."
        crumbs={[{ label: "Contact" }]}
        tone="sky"
      />

      <section className="container-wide py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact channels */}
          <Reveal>
            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 rounded-3xl bg-white p-5 shadow-card transition hover:-translate-y-1"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-grass-light/60 text-grass-dark">
                    <Phone className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wide text-ink/50">Call us</span>
                    <span className="font-display font-bold text-ink">{site.phonePrimary}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${site.generalEmail}`}
                  className="group flex items-center gap-4 rounded-3xl bg-white p-5 shadow-card transition hover:-translate-y-1"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-light/60 text-sky-dark">
                    <Mail className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wide text-ink/50">Email us</span>
                    <span className="font-display font-bold text-ink">{site.generalEmail}</span>
                  </span>
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp.replace(/[^\d]/g, "")}`}
                  className="group flex items-center gap-4 rounded-3xl bg-white p-5 shadow-card transition hover:-translate-y-1"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sunshine-light/70 text-sunshine-dark">
                    <MessageCircle className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wide text-ink/50">WhatsApp</span>
                    <span className="font-display font-bold text-ink">{site.whatsapp}</span>
                  </span>
                </a>
              </div>

              <div className="rounded-3xl bg-white p-5 shadow-card">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-crimson" />
                  <div>
                    <p className="font-display font-bold text-ink">Visit our campus</p>
                    <p className="mt-1 text-sm text-ink/70">{fullAddress()}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-crimson" />
                  <div className="text-sm text-ink/70">
                    <p>
                      <span className="font-bold text-ink">School:</span> {site.hours.school}
                    </p>
                    <p>
                      <span className="font-bold text-ink">Office:</span> {site.hours.office}
                    </p>
                  </div>
                </div>
              </div>

              {/* Looking to admit? nudge to the registration form */}
              <div className="flex items-start gap-3 rounded-3xl bg-crimson p-5 text-white">
                <GraduationCap className="mt-0.5 h-6 w-6 shrink-0 text-gold-light" />
                <div>
                  <p className="font-display font-bold text-white">Looking to enrol your child?</p>
                  <p className="mt-1 text-sm text-white/80">
                    Use our{" "}
                    <Link href="/admissions" className="font-bold text-gold-light underline-offset-2 hover:underline">
                      registration form
                    </Link>{" "}
                    instead — it goes straight to our admissions team for the quickest response.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1}>
            <div className="rounded-4xl border border-ink/5 bg-white p-6 shadow-card sm:p-8">
              <SectionHeading
                align="left"
                kicker="Send a message"
                title="Drop us a line"
                subtitle="Fill in the form and your message lands directly in our front-office inbox."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="container-wide pb-20">
        <div className="relative overflow-hidden rounded-4xl border border-ink/5 shadow-card">
          <div className="dot-grid flex h-64 items-center justify-center bg-grass-light/30 sm:h-80">
            <div className="rounded-2xl bg-white/90 px-6 py-4 text-center shadow">
              <MapPin className="mx-auto h-7 w-7 text-crimson" />
              <p className="mt-2 font-display font-bold text-ink">{site.address.line1}</p>
              <p className="text-sm text-ink/60">{site.address.city}, {site.address.region}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(fullAddress())}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-bold text-crimson hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
