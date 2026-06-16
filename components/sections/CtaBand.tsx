import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Sun, Cloud, Star } from "@/components/illustrations";

export function CtaBand({
  title = "Come say hello — we'd love to meet your little one!",
  subtitle = "Book a campus visit, meet our teachers, and watch your child light up. Spots in each class are kept small and fill up fast.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-wide my-24">
      <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-sky via-sky to-grape px-6 py-14 text-center text-white shadow-playful sm:px-12 sm:py-16">
        <Sun className="absolute -left-6 -top-6 h-28 w-28 opacity-90 animate-spin-slow" />
        <Cloud className="absolute right-8 top-6 hidden h-16 w-28 opacity-80 animate-float sm:block" />
        <Star className="absolute bottom-6 left-10 h-7 w-7 animate-bounce-soft" fill="#fff" />
        <Star className="absolute right-12 bottom-10 h-5 w-5 animate-wiggle" fill="#FFE08A" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-pretty text-base text-white/90 sm:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/admissions" className="btn-sunshine text-base">
              Start Your Registration
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="btn bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25">
              <Phone className="h-4 w-4" /> {site.phonePrimary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
