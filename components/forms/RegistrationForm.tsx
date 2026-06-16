"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, PartyPopper } from "lucide-react";
import { FieldShell, TextInput, Select, Textarea, Honeypot } from "./Fields";
import { programOptions, validateRegistration, type RegistrationData } from "@/lib/forms";
import { site } from "@/lib/site";

const empty: RegistrationData = {
  childName: "",
  childDob: "",
  program: "",
  parentName: "",
  email: "",
  phone: "",
  preferredStart: "",
  message: "",
  consent: false,
  company: "",
};

export function RegistrationForm() {
  const [data, setData] = useState<RegistrationData>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [serverMsg, setServerMsg] = useState("");

  const set = <K extends keyof RegistrationData>(k: K, v: RegistrationData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validateRegistration(data);
    if (!v.ok) {
      setErrors(v.errors);
      document.querySelector("[data-error='true']")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        if (json.errors) setErrors(json.errors);
        setServerMsg(json.message || "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }
      setServerMsg(json.message);
      setStatus("done");
    } catch {
      setServerMsg("We couldn't reach the server. Please check your connection and try again.");
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-4xl border-2 border-grass/30 bg-grass-light/40 p-8 text-center sm:p-12">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-grass text-white">
          <PartyPopper className="h-8 w-8" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold">You're on the list! 🎉</h3>
        <p className="mx-auto mt-3 max-w-md text-ink/70">{serverMsg}</p>
        <p className="mt-4 text-sm text-ink/55">
          In a hurry? Call our admissions desk on{" "}
          <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="link-underline">
            {site.phonePrimary}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-5">
      <Honeypot value={data.company || ""} onChange={(v) => set("company", v)} />

      <div className="rounded-2xl bg-sky-light/40 px-4 py-3 text-sm font-semibold text-sky-dark">
        ✏️ Step 1 of 1 — it only takes a minute. We'll call you back to arrange a visit.
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div data-error={!!errors.childName}>
          <FieldShell label="Child's full name" htmlFor="childName" error={errors.childName} required>
            <TextInput
              id="childName"
              value={data.childName}
              onChange={(e) => set("childName", e.target.value)}
              error={!!errors.childName}
              placeholder="e.g. Aarav Sharma"
              autoComplete="off"
            />
          </FieldShell>
        </div>
        <div data-error={!!errors.childDob}>
          <FieldShell label="Child's date of birth" htmlFor="childDob" error={errors.childDob} required>
            <TextInput
              id="childDob"
              type="date"
              value={data.childDob}
              onChange={(e) => set("childDob", e.target.value)}
              error={!!errors.childDob}
            />
          </FieldShell>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div data-error={!!errors.program}>
          <FieldShell label="Programme of interest" htmlFor="program" error={errors.program} required>
            <Select
              id="program"
              value={data.program}
              onChange={(e) => set("program", e.target.value)}
              error={!!errors.program}
            >
              <option value="">Choose a programme…</option>
              {programOptions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </Select>
          </FieldShell>
        </div>
        <FieldShell label="Preferred start" htmlFor="preferredStart" hint="Month & year, or 'as soon as possible'">
          <TextInput
            id="preferredStart"
            value={data.preferredStart}
            onChange={(e) => set("preferredStart", e.target.value)}
            placeholder="e.g. April 2026"
          />
        </FieldShell>
      </div>

      <div data-error={!!errors.parentName}>
        <FieldShell label="Parent / guardian name" htmlFor="parentName" error={errors.parentName} required>
          <TextInput
            id="parentName"
            value={data.parentName}
            onChange={(e) => set("parentName", e.target.value)}
            error={!!errors.parentName}
            placeholder="Your full name"
            autoComplete="name"
          />
        </FieldShell>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div data-error={!!errors.email}>
          <FieldShell label="Email" htmlFor="email" error={errors.email} required>
            <TextInput
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => set("email", e.target.value)}
              error={!!errors.email}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </FieldShell>
        </div>
        <div data-error={!!errors.phone}>
          <FieldShell label="Phone / WhatsApp" htmlFor="phone" error={errors.phone} required>
            <TextInput
              id="phone"
              type="tel"
              value={data.phone}
              onChange={(e) => set("phone", e.target.value)}
              error={!!errors.phone}
              placeholder="+91 ..."
              autoComplete="tel"
            />
          </FieldShell>
        </div>
      </div>

      <FieldShell label="Anything you'd like us to know?" htmlFor="message" hint="Allergies, siblings with us, questions — anything at all.">
        <Textarea
          id="message"
          value={data.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us a little about your little one…"
        />
      </FieldShell>

      <div data-error={!!errors.consent}>
        <label className="flex items-start gap-3 rounded-2xl bg-cream p-4 text-sm text-ink/75">
          <input
            type="checkbox"
            checked={data.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 accent-crimson"
          />
          <span>
            I agree that {site.shortName} may contact me about admissions and store my details per the{" "}
            <a href="/policies/privacy" className="link-underline">
              Privacy Policy
            </a>
            . <span className="text-coral">*</span>
          </span>
        </label>
        {errors.consent && <p className="mt-1 text-xs font-semibold text-coral-dark">{errors.consent}</p>}
      </div>

      {serverMsg && status === "idle" && (
        <p className="rounded-2xl bg-coral-light/40 px-4 py-3 text-sm font-semibold text-coral-dark">{serverMsg}</p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full text-base">
        {status === "sending" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <CheckCircle2 className="h-5 w-5" /> Submit Registration
          </>
        )}
      </button>
      <p className="text-center text-xs text-ink/50">
        Your enquiry goes straight to our admissions team. No spam, ever.
      </p>
    </form>
  );
}
