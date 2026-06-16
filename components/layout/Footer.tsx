import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { DvpsLogo } from "@/components/brand/DvpsLogo";
import { EldenHeightsCrest } from "@/components/brand/EldenHeightsLogo";
import { primaryNav, policyNav, site, fullAddress } from "@/lib/site";
import { Scallop } from "@/components/illustrations";

export function Footer() {
  return (
    <footer className="relative mt-24">
      <Scallop className="h-5 w-full text-crimson" fill="#9B1B1B" />
      <div className="bg-crimson text-white/90">
        <div className="container-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand + parent thread */}
          <div className="lg:col-span-4">
            <DvpsLogo invert subline />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
              {site.description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a href={site.social.facebook} aria-label="Facebook" className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={site.social.instagram} aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={site.social.youtube} aria-label="YouTube" className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base font-bold text-white">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {primaryNav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/75 transition hover:text-gold-light">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-base font-bold text-white">Our Policies</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {policyNav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/75 transition hover:text-gold-light">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-base font-bold text-white">Visit / Reach Us</h4>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                <span className="text-white/75">{fullAddress()}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="text-white/75 transition hover:text-gold-light">
                  {site.phonePrimary}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                <a href={`mailto:${site.admissionsEmail}`} className="text-white/75 transition hover:text-gold-light">
                  {site.admissionsEmail}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                <span className="text-white/75">{site.hours.office}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Elden Heights family band — the strategic anchor */}
        <div className="border-t border-white/15">
          <div className="container-wide flex flex-col items-center gap-5 py-8 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-4">
              <EldenHeightsCrest className="h-16 w-16 shrink-0" withBanner={false} />
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-wide text-gold-light">
                  Part of the Elden Heights family
                </p>
                <p className="max-w-md text-xs leading-relaxed text-white/70">
                  Drona Valley Public School is the early-years wing of{" "}
                  <span className="font-semibold text-white">{site.parent}</span>. Together we nurture children
                  from their very first steps — {site.parentMotto.toLowerCase()}.
                </p>
              </div>
            </div>
            <div className="text-xs text-white/55">
              <p>Powered by {site.poweredBy}</p>
            </div>
          </div>
        </div>

        {/* Legal line */}
        <div className="border-t border-white/15 bg-crimson-dark">
          <div className="container-wide flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
              <Link href="/policies/privacy" className="transition hover:text-white">
                Privacy
              </Link>
              <Link href="/policies/terms" className="transition hover:text-white">
                Terms
              </Link>
              <Link href="/policies" className="transition hover:text-white">
                All Policies
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
