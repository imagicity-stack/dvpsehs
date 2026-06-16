import { NextResponse } from "next/server";
import { sendMail, emailShell, esc } from "@/lib/mail";
import { validateRegistration, type RegistrationData } from "@/lib/forms";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  // Light, best-effort rate limit per IP.
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
  if (!rateLimit(`reg:${ip}`)) {
    return NextResponse.json(
      { ok: false, message: "Too many submissions. Please try again in a little while." },
      { status: 429 },
    );
  }

  let data: Partial<RegistrationData>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // Honeypot — real users never fill this hidden field.
  if (data.company && data.company.trim() !== "") {
    return NextResponse.json({ ok: true, message: "Thank you!" });
  }

  const result = validateRegistration(data);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });
  }

  const d = data as RegistrationData;
  const rows = [
    { label: "Child's name", value: esc(d.childName) },
    { label: "Date of birth", value: esc(d.childDob) },
    { label: "Class", value: esc(d.program) },
    { label: "Preferred start", value: esc(d.preferredStart || "—") },
    { label: "Parent / guardian", value: esc(d.parentName) },
    { label: "Email", value: `<a href="mailto:${esc(d.email)}">${esc(d.email)}</a>` },
    { label: "Phone", value: `<a href="tel:${esc(d.phone)}">${esc(d.phone)}</a>` },
    { label: "Message", value: esc(d.message || "—").replace(/\n/g, "<br/>") },
  ];

  const html = emailShell(
    "New Admission / Registration Enquiry",
    rows,
    "A family has submitted the registration form on the <strong>Drona Valley Public School</strong> website (vsp.eldenheights.org).",
  );
  const text = rows.map((r) => `${r.label}: ${r.value.replace(/<[^>]+>/g, "")}`).join("\n");

  try {
    await sendMail({
      kind: "REG",
      subject: `[Drona Valley] New registration: ${d.childName} — ${d.program}`,
      html,
      text,
      replyTo: `"${d.parentName}" <${d.email}>`,
    });
  } catch (err) {
    console.error("[register] mail error:", err);
    const debug = process.env.MAIL_DEBUG === "true";
    return NextResponse.json(
      {
        ok: false,
        message: "Sorry — we couldn't send your enquiry right now. Please call us or try again shortly.",
        ...(debug ? { detail: err instanceof Error ? err.message : String(err) } : {}),
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you! Our admissions team has your details and will be in touch very soon. 🎈",
  });
}
