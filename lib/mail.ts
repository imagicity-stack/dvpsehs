import nodemailer from "nodemailer";

/**
 * Two-mailbox email helper.
 *
 * The site has two independent forms that must route to (potentially)
 * different inboxes via different SMTP credentials:
 *   - "REG"     → Admissions / Registration enquiries
 *   - "CONTACT" → General contact messages
 *
 * Each reads its own set of environment variables so the school can plug in
 * two separate mailboxes (or providers) from the Vercel dashboard.
 */

export type MailKind = "REG" | "CONTACT";

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
};

function readConfig(kind: MailKind): SmtpConfig {
  const p = kind; // env prefix, e.g. REG_ or CONTACT_
  const host = process.env[`${p}_SMTP_HOST`];
  const portRaw = process.env[`${p}_SMTP_PORT`];
  const user = process.env[`${p}_SMTP_USER`];
  const pass = process.env[`${p}_SMTP_PASS`];
  const from = process.env[`${p}_FROM_EMAIL`] || user;
  const to = process.env[`${p}_TO_EMAIL`] || user;
  const secureRaw = process.env[`${p}_SMTP_SECURE`];

  if (!host || !portRaw || !user || !pass || !from || !to) {
    throw new Error(
      `Missing SMTP configuration for ${kind}. Please set ${p}_SMTP_HOST, ${p}_SMTP_PORT, ${p}_SMTP_USER, ${p}_SMTP_PASS, ${p}_FROM_EMAIL and ${p}_TO_EMAIL.`,
    );
  }

  const port = Number(portRaw);
  // Default: secure (SSL) when port is 465 unless explicitly overridden.
  const secure =
    secureRaw != null ? secureRaw.toLowerCase() === "true" : port === 465;

  return { host, port, secure, user, pass, from, to };
}

export function getTransport(kind: MailKind) {
  const cfg = readConfig(kind);
  const transport = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    auth: { user: cfg.user, pass: cfg.pass },
  });
  return { transport, cfg };
}

export type SendArgs = {
  kind: MailKind;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

export async function sendMail({ kind, subject, html, text, replyTo }: SendArgs) {
  const { transport, cfg } = getTransport(kind);
  await transport.sendMail({
    from: `"Drona Valley Public School" <${cfg.from}>`,
    to: cfg.to,
    subject,
    text,
    html,
    replyTo,
  });
}

/** Minimal, dependency-free HTML escaping for user-supplied values. */
export function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Branded HTML email wrapper. */
export function emailShell(title: string, rows: { label: string; value: string }[], intro?: string) {
  const body = rows
    .map(
      (r) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f0e9dc;vertical-align:top;width:170px;color:#6b6270;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;">${esc(
          r.label,
        )}</td>
        <td style="padding:10px 0;border-bottom:1px solid #f0e9dc;color:#2d2433;font-size:15px;">${r.value}</td>
      </tr>`,
    )
    .join("");

  return `<!doctype html><html><body style="margin:0;background:#fff9ef;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fff9ef;padding:24px 0;">
      <tr><td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 12px 30px -10px rgba(45,36,51,.18);">
          <tr><td style="background:#9B1B1B;padding:22px 28px;">
            <p style="margin:0;color:#ffffff;font-size:18px;font-weight:700;">Drona Valley Public School</p>
            <p style="margin:4px 0 0;color:#E8C766;font-size:12px;letter-spacing:.08em;text-transform:uppercase;">Early Years of The Elden Heights School</p>
          </td></tr>
          <tr><td style="padding:28px;">
            <h1 style="margin:0 0 6px;color:#2d2433;font-size:20px;">${esc(title)}</h1>
            ${intro ? `<p style="margin:0 0 18px;color:#6b6270;font-size:14px;">${esc(intro)}</p>` : ""}
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${body}</table>
          </td></tr>
          <tr><td style="padding:16px 28px;background:#fbf7ee;color:#9a93a3;font-size:12px;">
            This message was sent automatically from the ${esc(
              "drona valley public school",
            )} website. Reply directly to respond to the sender.
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body></html>`;
}
