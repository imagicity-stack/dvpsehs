"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { DvpsLogo } from "@/components/brand/DvpsLogo";
import { EldenHeightsCrest } from "@/components/brand/EldenHeightsLogo";
import { primaryNav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-gold/20 bg-cream/90 shadow-[0_20px_45px_-30px_rgba(36,27,46,0.6)] backdrop-blur-xl"
            : "border-b border-transparent bg-cream/55 backdrop-blur-sm"
        }`}
      >
        <div className="container-wide flex h-[74px] items-center gap-4">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <DvpsLogo />
          </div>

          {/* Centered nav */}
          <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative whitespace-nowrap px-3 py-2 font-fun text-[0.9rem] font-medium leading-none transition-colors ${
                    active ? "text-crimson" : "text-ink/70 hover:text-crimson"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-gold-sheen transition-all duration-300 ${
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="ml-auto hidden shrink-0 items-center gap-2.5 lg:flex">
            <a
              href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/70 text-crimson transition hover:border-gold hover:shadow-gold"
              aria-label={`Call ${site.phonePrimary}`}
            >
              <Phone className="h-[18px] w-[18px]" />
            </a>
            <Link href="/admissions" className="btn-gold !px-5 !py-2.5 text-sm">
              Register <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="ml-auto grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/70 text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-[74px] z-40 overflow-y-auto bg-cream/98 backdrop-blur-xl lg:hidden">
          <div className="container-page py-6">
            <a
              href={site.parentUrl}
              target="_blank"
              rel="noreferrer"
              className="mb-5 flex items-center gap-3 rounded-3xl border border-gold/25 bg-white/70 p-4"
            >
              <EldenHeightsCrest className="h-11 w-11 shrink-0" withBanner={false} />
              <p className="text-sm font-semibold leading-snug text-ink/70">
                In proud partnership with <span className="text-crimson">The Elden Heights School</span>
                <span className="mt-0.5 flex items-center gap-1 text-xs font-bold text-gold-dark">
                  eldenheights.org <ArrowUpRight className="h-3 w-3" />
                </span>
              </p>
            </a>
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3.5 font-fun text-lg font-medium transition ${
                    isActive(item.href) ? "bg-crimson-rich text-ivory" : "text-ink hover:bg-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/admissions" className="btn-gold w-full text-base">
                Register Your Child <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="btn-outline w-full text-base">
                <Phone className="h-4 w-4" /> {site.phonePrimary}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
