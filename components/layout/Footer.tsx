import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, ArrowUpRight } from "lucide-react";
import { DvpsLogo } from "@/components/brand/DvpsLogo";
import { Duniz } from "@/components/brand/Duniz";
import { EldenHeightsCrest } from "@/components/brand/EldenHeightsLogo";
import { primaryNav, policyNav, site, fullAddress } from "@/lib/site";

export function Footer() {
  return (
    <footer className="grain relative mt-24 overflow-hidden bg-wine-deep text-ivory/85">
      <div className="h-px w-full bg-gold-sheen opacity-70" />

      {/* Partnership band */}
      <div className="border-b border-white/10">
        <div className="container-wide flex flex-col items-center gap-5 py-9 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <EldenHeightsCrest className="h-16 w-16 shrink-0" withBanner={false} />
            <div>
              <p className="font-display text-lg font-semibold text-ivory">
                In proud partnership with {site.parent}
              </p>
              <p className="font-display text-sm italic text-gold-light/80">“{site.parentMotto}” — from the very first step.</p>
            </div>
          </div>
          <Link href="/admissions" className="btn-gold text-sm">
            Begin your journey <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="container-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <DvpsLogo invert subline />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/65">{site.description}</p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { href: site.social.facebook, Icon: Facebook, label: "Facebook" },
              { href: site.social.instagram, Icon: Instagram, label: "Instagram" },
              { href: site.social.youtube, Icon: Youtube, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 transition hover:border-gold hover:text-gold-light">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-base font-semibold text-gold-light">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {primaryNav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ivory/70 transition hover:text-gold-light">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display text-base font-semibold text-gold-light">Our Policies</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {policyNav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ivory/70 transition hover:text-gold-light">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display text-base font-semibold text-gold-light">Visit / Reach Us</h4>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="text-ivory/70">{fullAddress()}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="text-ivory/70 transition hover:text-gold-light">{site.phonePrimary}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${site.admissionsEmail}`} className="text-ivory/70 transition hover:text-gold-light">{site.admissionsEmail}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="text-ivory/70">{site.hours.office}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Powered by <Duniz className="font-semibold text-gold-light" />
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <Link href="/policies/privacy" className="transition hover:text-gold-light">Privacy</Link>
            <Link href="/policies/terms" className="transition hover:text-gold-light">Terms</Link>
            <Link href="/policies" className="transition hover:text-gold-light">All Policies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
