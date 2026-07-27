/**
 * Superadmin Portal configuration & helpers.
 *
 * The accounts allowed into the portal are defined entirely by environment
 * variables — nothing is hard-coded here. Two vars feed the allowlist and are
 * merged together, so you can use either (or both):
 *
 *   NEXT_PUBLIC_SUPERADMIN_EMAILS  comma/space/newline-separated list of
 *                                  emails allowed to sign in
 *   NEXT_PUBLIC_SUPERADMIN_EMAIL   a single allowed email (e.g.
 *                                  contact.vsp@eldenheights.org)
 *   SUPERADMIN_PASSWORD            the password to set for the account(s)
 *                                  when you create them in Firebase Auth
 *                                  (server-only; never shipped to the browser)
 *
 * Authentication itself is performed by Firebase Authentication. You create
 * the account(s) once (Firebase console → Authentication → Users → Add user)
 * using the email + password above, and the portal signs in against them.
 * Because only the emails are needed on the client to gate access, the
 * password is never exposed in the browser bundle.
 */

/** Fallback keeps the intended superadmin allowed even before env is wired. */
const DEFAULT_SUPERADMIN_EMAIL = "contact.vsp@eldenheights.org";

/** Split a list env value on commas, semicolons or whitespace. */
function parseEmailList(raw: string | undefined): string[] {
  if (!raw) return [];
  return raw
    .split(/[\s,;]+/)
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

/**
 * The set of emails permitted to access the portal, normalised to lowercase.
 * Merges the plural allowlist (NEXT_PUBLIC_SUPERADMIN_EMAILS) with the single
 * NEXT_PUBLIC_SUPERADMIN_EMAIL, and falls back to the default if neither is set.
 */
export const SUPERADMIN_EMAILS: readonly string[] = (() => {
  const set = new Set<string>([
    ...parseEmailList(process.env.NEXT_PUBLIC_SUPERADMIN_EMAILS),
    ...parseEmailList(process.env.NEXT_PUBLIC_SUPERADMIN_EMAIL),
  ]);
  if (set.size === 0) set.add(DEFAULT_SUPERADMIN_EMAIL);
  return Array.from(set);
})();

/** Is the given email one of the configured superadmins? (case-insensitive) */
export function isSuperadmin(email: string | null | undefined): boolean {
  return !!email && SUPERADMIN_EMAILS.includes(email.trim().toLowerCase());
}

/**
 * Turn a Firebase Auth error code into a calm, human sentence. We deliberately
 * keep "wrong email" and "wrong password" indistinguishable so the form never
 * confirms which half of a guess was right.
 */
export function friendlyAuthError(code: string | undefined): string {
  switch (code) {
    case "auth/invalid-email":
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "That email and password don't match. Please try again.";
    case "auth/user-disabled":
      return "This account has been disabled. Contact the site owner.";
    case "auth/too-many-requests":
      return "Too many attempts. Please wait a little while and try again.";
    case "auth/network-request-failed":
      return "Network error. Check your connection and try again.";
    default:
      return "Something went wrong signing you in. Please try again.";
  }
}
