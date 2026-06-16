"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { DvpsLogo } from "@/components/brand/DvpsLogo";
import { primaryNav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-cream/90 shadow-[0_8px_30px_-18px_rgba(45,36,51,0.4)] backdrop-blur" : "bg-cream/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-wide flex h-[68px] items-center justify-between gap-4">
        <DvpsLogo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-crimson text-white"
                  : "text-ink/75 hover:bg-white hover:text-crimson"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-bold text-ink/70 transition hover:text-crimson"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">{site.phonePrimary}</span>
          </a>
          <Link href="/admissions" className="btn-primary text-sm">
            Register Now
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-[68px] z-40 bg-cream/98 backdrop-blur lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-6" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-4 py-3.5 text-lg font-semibold transition-colors ${
                  isActive(item.href) ? "bg-crimson text-white" : "text-ink hover:bg-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/admissions" className="btn-primary w-full text-base">
                Register Your Child
              </Link>
              <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="btn-outline w-full text-base">
                <Phone className="h-4 w-4" /> {site.phonePrimary}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
