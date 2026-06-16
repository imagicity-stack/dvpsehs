import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-2xl ${className}`}
    >
      {kicker && (
        <span className={`label-kicker mb-5 ${align === "center" ? "justify-center" : ""}`}>{kicker}</span>
      )}
      <h2 className="font-display text-balance text-[2rem] font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.7rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink/70 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
