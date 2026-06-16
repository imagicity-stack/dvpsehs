"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { FieldShell, TextInput, Select, Textarea, Honeypot } from "./Fields";
import { contactSubjects, validateContact, type ContactData } from "@/lib/forms";
import { site } from "@/lib/site";

const empty: ContactData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  company: "",
};

export function ContactForm() {
  const [data, setData] = useState<ContactData>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [serverMsg, setServerMsg] = useState("");

  const set = <K extends keyof ContactData>(k: K, v: ContactData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validateContact(data);
    if (!v.ok) {
      setErrors(v.errors);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
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
      <div className="rounded-4xl border-2 border-sky/30 bg-sky-light/40 p-8 text-center sm:p-10">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sky text-white">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold">Message sent! 💌</h3>
        <p className="mx-auto mt-3 max-w-md text-ink/70">{serverMsg}</p>
        <p className="mt-4 text-sm text-ink/55">
          Prefer to talk? Call us on{" "}
          <a href={`tel:${site.phoneSecondary.replace(/\s/g, "")}`} className="link-underline">
            {site.phoneSecondary}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-5">
      <Honeypot value={data.company || ""} onChange={(v) => set("company", v)} />

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldShell label="Your name" htmlFor="c-name" error={errors.name} required>
          <TextInput
            id="c-name"
            value={data.name}
            onChange={(e) => set("name", e.target.value)}
            error={!!errors.name}
            placeholder="Full name"
            autoComplete="name"
          />
        </FieldShell>
        <FieldShell label="Email" htmlFor="c-email" error={errors.email} required>
          <TextInput
            id="c-email"
            type="email"
            value={data.email}
            onChange={(e) => set("email", e.target.value)}
            error={!!errors.email}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </FieldShell>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldShell label="Phone (optional)" htmlFor="c-phone" error={errors.phone}>
          <TextInput
            id="c-phone"
            type="tel"
            value={data.phone}
            onChange={(e) => set("phone", e.target.value)}
            error={!!errors.phone}
            placeholder="+91 ..."
            autoComplete="tel"
          />
        </FieldShell>
        <FieldShell label="Subject" htmlFor="c-subject" error={errors.subject} required>
          <Select
            id="c-subject"
            value={data.subject}
            onChange={(e) => set("subject", e.target.value)}
            error={!!errors.subject}
          >
            <option value="">What's this about?</option>
            {contactSubjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </FieldShell>
      </div>

      <FieldShell label="Your message" htmlFor="c-message" error={errors.message} required>
        <Textarea
          id="c-message"
          value={data.message}
          onChange={(e) => set("message", e.target.value)}
          error={!!errors.message}
          placeholder="How can we help? 😊"
        />
      </FieldShell>

      {serverMsg && status === "idle" && (
        <p className="rounded-2xl bg-coral-light/40 px-4 py-3 text-sm font-semibold text-coral-dark">{serverMsg}</p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-sky w-full text-base">
        {status === "sending" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" /> Send Message
          </>
        )}
      </button>
      <p className="text-center text-xs text-ink/50">We usually reply within one working day.</p>
    </form>
  );
}
