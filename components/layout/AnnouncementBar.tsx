"use client";

import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";
import { EldenHeightsCrest } from "@/components/brand/EldenHeightsLogo";
import { site } from "@/lib/site";

/**
 * Slim luxury utility strip that sits above the main navigation.
 * Foregrounds the Elden Heights partnership (with an outbound link to the
 * senior school) and keeps key contact details cleanly aligned.
 */
export function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-wine-deep text-ivory">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gold-sheen opacity-60" />
      <div className="container-wide flex h-10 items-center justify-between gap-4">
        <Link
          href="/about#elden-heights"
          className="group flex min-w-0 items-center gap-2.5 text-[0.72rem] font-semibold tracking-wide text-ivory/85 transition hover:text-gold-light sm:text-xs"
        >
          <EldenHeightsCrest className="h-5 w-5 shrink-0" withBanner={false} />
          <span className="truncate">
            In proud partnership with{" "}
            <span className="font-bold text-gold-light">The Elden Heights School</span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-4 text-xs sm:gap-6">
          <a
            href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}
            className="hidden items-center gap-1.5 font-semibold text-ivory/80 transition hover:text-gold-light sm:flex"
          >
            <Phone className="h-3.5 w-3.5" /> {site.phonePrimary}
          </a>
          <span className="hidden h-3.5 w-px bg-white/20 sm:block" />
          <a
            href={site.parentUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-semibold text-ivory/80 transition hover:text-gold-light"
          >
            Visit eldenheights.org <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
