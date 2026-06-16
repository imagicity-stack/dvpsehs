/**
 * Central site configuration.
 *
 * Everything that a school administrator might want to change — name,
 * phone numbers, address, social links — lives here so non-developers
 * can update it in one place.
 */

export const site = {
  name: "Drona Valley Public School",
  shortName: "Drona Valley",
  tagline: "Where Little Wonders Take Their First Big Steps",
  // The strategic "parent company" thread woven throughout the site.
  parent: "The Elden Heights School",
  parentShort: "Elden Heights",
  parentUrl: "https://www.eldenheights.org",
  parentMotto: "Towards Eternal Glory",
  poweredBy: "Duniz Eduserv",
  // Framed as a brand-new, proud partnership — the groundwork for the
  // eventual transition of the Drona Valley identity into Elden Heights.
  partnership: {
    label: "In proud partnership with The Elden Heights School",
    short: "An Elden Heights Partnership",
    since: 2026,
  },
  description:
    "Drona Valley Public School has joined hands with The Elden Heights School — a proud new partnership bringing a world of luxury early learning to curious 2–6 year olds who play, giggle and grow.",
  url: "https://vsp.eldenheights.org",
  // Clearly-marked placeholders — replace with the school's real details.
  phonePrimary: "+91 72099 24683",
  phoneSecondary: "+91 94319 04333",
  admissionsEmail: "admission@eldenheights.org",
  generalEmail: "hello@eldenheights.org",
  whatsapp: "+91 72099 24683",
  address: {
    line1: "Drona Valley Public School",
    line2: "Mandir, VishnuPuri",
    city: "Hazaribagh",
    region: "Jharkhand",
    postalCode: "825301",
    country: "India",
  },
  hours: {
    school: "Mon – Fri · 8:30 AM – 1:30 PM",
    office: "Mon – Sat · 8:00 AM – 4:00 PM",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
  establishedYear: 2019,
} as const;

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Classes", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export const policyNav = [
  { label: "Privacy Policy", href: "/policies/privacy" },
  { label: "Terms of Use", href: "/policies/terms" },
  { label: "Admissions Policy", href: "/policies/admissions" },
  { label: "Safeguarding & Child Protection", href: "/policies/child-protection" },
  { label: "Anti-Bullying Policy", href: "/policies/anti-bullying" },
  { label: "Health, Safety & Hygiene", href: "/policies/health-safety" },
  { label: "Fees & Refund Policy", href: "/policies/fees-refund" },
];

export function fullAddress() {
  const a = site.address;
  return `${a.line1}, ${a.line2}, ${a.city}, ${a.region} ${a.postalCode}, ${a.country}`;
}
