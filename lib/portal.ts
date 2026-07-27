/**
 * Superadmin Portal configuration & helpers.
 *
 * The one account allowed into the portal is defined by environment
 * variables — nothing is hard-coded here:
 *
 *   NEXT_PUBLIC_SUPERADMIN_EMAIL   the email allowed to sign in
 *                                  (e.g. contact.vsp@eldenheights.org)
 *   SUPERADMIN_PASSWORD            the password to set for that account
 *                                  when you create it in Firebase Auth
 *                                  (server-only; never shipped to the browser)
 *
 * Authentication itself is performed by Firebase Authentication. You create
 * the account once (Firebase console → Authentication → Users → Add user, or
 * however you provision it) using the email + password above, and the portal
 * signs in against it. Because only the email is needed on the client to gate
 * access, the password is never exposed in the browser bundle.
 */

/** Fallback keeps the intended superadmin visible even before env is wired. */
const DEFAULT_SUPERADMIN_EMAIL = "contact.vsp@eldenheights.org";

/** The single email permitted to access the portal, normalised to lowercase. */
export const SUPERADMIN_EMAIL = (
  process.env.NEXT_PUBLIC_SUPERADMIN_EMAIL || DEFAULT_SUPERADMIN_EMAIL
)
  .trim()
  .toLowerCase();

/** Is the given email the configured superadmin? (case-insensitive) */
export function isSuperadmin(email: string | null | undefined): boolean {
  return !!email && email.trim().toLowerCase() === SUPERADMIN_EMAIL;
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
