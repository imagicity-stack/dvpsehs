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
    const onScroll = () => setScrolled(window.scrollY > 12);
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
            ? "border-b border-gold/15 bg-cream/85 shadow-[0_18px_40px_-28px_rgba(36,27,46,0.55)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide flex h-[76px] items-center justify-between gap-4">
          {/* Co-branded left cluster — the partnership, front and centre */}
          <div className="flex items-center gap-3">
            <DvpsLogo />
            <div className="hidden items-center gap-3 pl-1 xl:flex" title={`In partnership with ${site.parent}`}>
              <span className="h-9 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
              <EldenHeightsCrest className="h-10 w-10" withBanner={false} />
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative rounded-full px-3.5 py-2 font-fun text-[0.92rem] font-medium transition-colors ${
                    active ? "text-crimson" : "text-ink/70 hover:text-crimson"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold-sheen transition-all duration-300 ${
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/60 text-crimson backdrop-blur transition hover:border-gold hover:shadow-gold"
              aria-label={`Call ${site.phonePrimary}`}
            >
              <Phone className="h-4 w-4" />
            </a>
            <Link href="/admissions" className="btn-gold !px-6 !py-3 text-sm">
              Register <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/60 text-ink backdrop-blur lg:hidden"
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
        <div className="fixed inset-0 top-[76px] z-40 overflow-y-auto bg-cream/98 backdrop-blur-xl lg:hidden">
          <div className="container-page py-6">
            <div className="mb-5 flex items-center gap-3 rounded-3xl border border-gold/20 bg-white/70 p-4">
              <EldenHeightsCrest className="h-12 w-12 shrink-0" withBanner={false} />
              <p className="text-sm font-semibold leading-snug text-ink/70">
                In proud partnership with <span className="text-crimson">The Elden Heights School</span>
              </p>
            </div>
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
