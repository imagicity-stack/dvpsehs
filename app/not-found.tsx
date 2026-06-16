import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Sun, Cloud, Balloon, Star } from "@/components/illustrations";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <Sun className="absolute left-[10%] top-10 h-20 w-20 animate-spin-slow opacity-80" />
        <Cloud className="absolute right-[12%] top-16 h-12 w-20 animate-float opacity-80" />
        <Balloon className="absolute bottom-16 left-[16%] h-20 w-14 animate-float-slow" fill="#9B6DD6" />
        <Star className="absolute right-[18%] bottom-24 h-7 w-7 animate-bounce-soft" fill="#FF6B6B" />

        <p className="font-display text-[6rem] font-bold leading-none text-crimson sm:text-[9rem]">404</p>
        <h1 className="mt-2 text-balance font-display text-3xl font-bold sm:text-4xl">
          Oops! This page wandered off to play
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-ink/70">
          We looked in the sandpit and behind the story corner, but we couldn't find the page you wanted. Let's
          get you back to somewhere happy.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" /> Back to Home
          </Link>
          <Link href="/contact" className="btn-outline">
            <ArrowLeft className="h-4 w-4" /> Tell us what you needed
          </Link>
        </div>
      </div>
    </section>
  );
}
