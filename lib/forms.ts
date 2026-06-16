/**
 * Shared form field definitions, types and validation so the client form and
 * the server API agree on exactly the same rules.
 */

export const programOptions = [
  "Toddler Nest (2–3 yrs)",
  "Playgroup (3–4 yrs)",
  "Nursery / Pre-KG (4–5 yrs)",
  "Kindergarten / KG (5–6 yrs)",
  "Not sure yet — please advise",
] as const;

export const contactSubjects = [
  "General enquiry",
  "Schedule a campus visit",
  "Fees & payments",
  "Existing parent / current student",
  "Careers at Drona Valley",
  "Something else",
] as const;

export type RegistrationData = {
  childName: string;
  childDob: string;
  program: string;
  parentName: string;
  email: string;
  phone: string;
  preferredStart: string;
  message: string;
  consent: boolean;
  company?: string; // honeypot
};

export type ContactData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  company?: string; // honeypot
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+\d][\d\s().-]{6,}$/;

export type ValidationResult = { ok: true } | { ok: false; errors: Record<string, string> };

export function validateRegistration(d: Partial<RegistrationData>): ValidationResult {
  const e: Record<string, string> = {};
  if (!d.childName || d.childName.trim().length < 2) e.childName = "Please enter your child's name.";
  if (!d.childDob) e.childDob = "Please add a date of birth.";
  if (!d.program) e.program = "Please choose a programme.";
  if (!d.parentName || d.parentName.trim().length < 2) e.parentName = "Please enter your name.";
  if (!d.email || !emailRe.test(d.email)) e.email = "Please enter a valid email.";
  if (!d.phone || !phoneRe.test(d.phone)) e.phone = "Please enter a valid phone number.";
  if (!d.consent) e.consent = "Please accept the privacy terms to continue.";
  return Object.keys(e).length ? { ok: false, errors: e } : { ok: true };
}

export function validateContact(d: Partial<ContactData>): ValidationResult {
  const e: Record<string, string> = {};
  if (!d.name || d.name.trim().length < 2) e.name = "Please enter your name.";
  if (!d.email || !emailRe.test(d.email)) e.email = "Please enter a valid email.";
  if (d.phone && !phoneRe.test(d.phone)) e.phone = "That phone number looks off.";
  if (!d.subject) e.subject = "Please pick a subject.";
  if (!d.message || d.message.trim().length < 10) e.message = "Please add a short message (10+ characters).";
  return Object.keys(e).length ? { ok: false, errors: e } : { ok: true };
}
