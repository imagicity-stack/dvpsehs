import { NextResponse } from "next/server";
import { sendMail, emailShell, esc } from "@/lib/mail";
import { validateContact, type ContactData } from "@/lib/forms";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
  if (!rateLimit(`contact:${ip}`)) {
    return NextResponse.json(
      { ok: false, message: "Too many submissions. Please try again in a little while." },
      { status: 429 },
    );
  }

  let data: Partial<ContactData>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  if (data.company && data.company.trim() !== "") {
    return NextResponse.json({ ok: true, message: "Thank you!" });
  }

  const result = validateContact(data);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });
  }

  const d = data as ContactData;
  const rows = [
    { label: "Name", value: esc(d.name) },
    { label: "Email", value: `<a href="mailto:${esc(d.email)}">${esc(d.email)}</a>` },
    { label: "Phone", value: d.phone ? `<a href="tel:${esc(d.phone)}">${esc(d.phone)}</a>` : "—" },
    { label: "Subject", value: esc(d.subject) },
    { label: "Message", value: esc(d.message).replace(/\n/g, "<br/>") },
  ];

  const html = emailShell(
    "New Contact Message",
    rows,
    "Someone has reached out via the contact form on the <strong>Drona Valley Public School</strong> website (vsp.eldenheights.org).",
  );
  const text = rows.map((r) => `${r.label}: ${r.value.replace(/<[^>]+>/g, "")}`).join("\n");

  try {
    await sendMail({
      kind: "CONTACT",
      subject: `[Drona Valley] Website enquiry: ${d.subject} — ${d.name}`,
      html,
      text,
      replyTo: `"${d.name}" <${d.email}>`,
    });
  } catch (err) {
    console.error("[contact] mail error:", err);
    return NextResponse.json(
      { ok: false, message: "Sorry — we couldn't send your message right now. Please email us directly or try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks for reaching out! We've received your message and will reply soon. 💛",
  });
}
