"use client";

import type { ReactNode, SelectHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export function FieldShell({
  label,
  htmlFor,
  error,
  required,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block font-display text-sm font-bold text-ink">
        {label} {required && <span className="text-coral">*</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-ink/50">{hint}</p>}
      {error && <p className="mt-1 text-xs font-semibold text-coral-dark">{error}</p>}
    </div>
  );
}

const base =
  "w-full rounded-2xl border-2 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition focus:outline-none focus:ring-4 disabled:opacity-60";

export function TextInput({
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  return (
    <input
      {...props}
      className={`${base} ${
        error ? "border-coral focus:border-coral focus:ring-coral/20" : "border-ink/10 focus:border-sky focus:ring-sky/20"
      }`}
    />
  );
}

export function Select({
  error,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { error?: boolean }) {
  return (
    <select
      {...props}
      className={`${base} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 fill=%22none%22 stroke=%22%232D2433%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-[length:18px] bg-[right_0.9rem_center] bg-no-repeat pr-10 ${
        error ? "border-coral focus:border-coral focus:ring-coral/20" : "border-ink/10 focus:border-sky focus:ring-sky/20"
      }`}
    >
      {children}
    </select>
  );
}

export function Textarea({
  error,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: boolean }) {
  return (
    <textarea
      {...props}
      className={`${base} min-h-[120px] resize-y ${
        error ? "border-coral focus:border-coral focus:ring-coral/20" : "border-ink/10 focus:border-sky focus:ring-sky/20"
      }`}
    />
  );
}

/** Hidden honeypot field — bots fill it, humans don't see it. */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden" aria-hidden>
      <label>
        Company
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
