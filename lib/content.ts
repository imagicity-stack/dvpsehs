/**
 * Marketing & curriculum content. Kept separate from layout so copy is
 * easy to tweak without touching components.
 */

import type { GlyphName } from "@/components/ui/Glyph";

export type Program = {
  slug: string;
  name: string;
  age: string;
  color: "sunshine" | "sky" | "coral" | "grass" | "grape" | "tangerine" | "bubblegum";
  tone: "sky" | "coral" | "grass" | "grape" | "sunshine" | "bubblegum";
  icon: GlyphName;
  img: string;
  tagline: string;
  blurb: string;
  highlights: string[];
  ratio: string;
};

export const programs: Program[] = [
  {
    slug: "play",
    name: "Play",
    age: "2 – 3 yrs",
    color: "bubblegum",
    tone: "bubblegum",
    icon: "play",
    img: "/images/class-play.jpg",
    tagline: "First steps away from home, into a warm hug.",
    blurb:
      "A gentle, sensory-rich first experience of school. We focus on comfort, secure attachment and the magic of discovering the world through touch, sound and play.",
    highlights: [
      "Settling-in routine with parents",
      "Sensory & messy play",
      "Toilet-training support",
      "Music, movement & rhymes",
    ],
    ratio: "1 : 6",
  },
  {
    slug: "nursery",
    name: "Nursery",
    age: "3 – 4 yrs",
    color: "sky",
    tone: "sky",
    icon: "nursery",
    img: "/images/class-nursery.jpg",
    tagline: "The wonder years — curiosity turned all the way up.",
    blurb:
      "Children become confident explorers. Through guided play, storytelling and outdoor adventures they build language, friendships and a love for figuring things out.",
    highlights: [
      "Phonics & pre-literacy through play",
      "Early numeracy with manipulatives",
      "Show-and-tell & circle time",
      "Outdoor & garden learning",
    ],
    ratio: "1 : 8",
  },
  {
    slug: "lkg",
    name: "Lower Kindergarten",
    age: "4 – 5 yrs",
    color: "grass",
    tone: "grass",
    icon: "lkg",
    img: "/images/class-lkg.jpg",
    tagline: "Big ideas in little minds.",
    blurb:
      "A thoughtfully structured year that blends play with purpose. Children grow into independent thinkers, ready to read, write, count and collaborate.",
    highlights: [
      "Structured phonics & sight words",
      "Hands-on STEM discovery",
      "Art, craft & creative expression",
      "Social-emotional learning circles",
    ],
    ratio: "1 : 10",
  },
  {
    slug: "ukg",
    name: "Upper Kindergarten",
    age: "5 – 6 yrs",
    color: "tangerine",
    tone: "sunshine",
    icon: "ukg",
    img: "/images/class-ukg.jpg",
    tagline: "Ready, steady, big school!",
    blurb:
      "The launchpad to formal schooling. Children consolidate literacy and numeracy, build confidence on stage, and step into Grade 1 brimming with self-belief.",
    highlights: [
      "Reading fluency & early writing",
      "Number sense & problem solving",
      "Public speaking & stage time",
      "Smooth transition to primary school",
    ],
    ratio: "1 : 12",
  },
];

export type Pillar = {
  title: string;
  body: string;
  icon: "heart" | "sparkles" | "leaf" | "puzzle" | "palette" | "shield";
  color: string;
};

export const pillars: Pillar[] = [
  {
    title: "Play is Serious Work",
    body: "Our play-based curriculum turns every giggle into a lesson — building brains, bonds and big imaginations.",
    icon: "puzzle",
    color: "text-sky",
  },
  {
    title: "Every Child, Truly Seen",
    body: "Small classes and warm ratios mean every little personality is known, nurtured and celebrated by name.",
    icon: "heart",
    color: "text-coral",
  },
  {
    title: "Wonder & Discovery",
    body: "From bug hunts to bubble science, curiosity leads the way. We say 'yes, let's find out!' a hundred times a day.",
    icon: "sparkles",
    color: "text-sunshine-dark",
  },
  {
    title: "Roots in Nature",
    body: "Mud kitchens, garden patches and open-sky play keep our children grounded, healthy and happily outdoors.",
    icon: "leaf",
    color: "text-grass",
  },
  {
    title: "Creativity Unleashed",
    body: "Paint-splattered hands and made-up songs welcome here. Art, music and movement are part of every single day.",
    icon: "palette",
    color: "text-grape",
  },
  {
    title: "Safe, Always",
    body: "Secure campus, trained staff and gentle routines mean parents can relax while their little ones soar.",
    icon: "shield",
    color: "text-crimson",
  },
];

export type DayStep = { time: string; title: string; icon: GlyphName; note: string };

export const aDayInLife: DayStep[] = [
  { time: "8:30", title: "Sunshine Welcome", icon: "sun", note: "Hugs, hellos and a happy start to the day." },
  { time: "9:00", title: "Circle Time", icon: "book", note: "Songs, stories, weather and the day's big wonder." },
  { time: "9:45", title: "Discovery Stations", icon: "search", note: "Phonics, numbers and STEM through hands-on play." },
  { time: "10:30", title: "Snack & Giggles", icon: "apple", note: "Healthy bites and lots of friendly chatter." },
  { time: "11:00", title: "Outdoor Adventures", icon: "tree", note: "Garden, sandpit, climbing and running free." },
  { time: "11:45", title: "Create & Imagine", icon: "palette", note: "Art, music, role-play and messy masterpieces." },
  { time: "12:30", title: "Story & Wind-down", icon: "book", note: "Calm corners, books and a gentle goodbye." },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What ages do you welcome?",
    a: "We welcome children from 2 to 6 years across four classes — Play, Nursery, Lower Kindergarten (LKG) and Upper Kindergarten (UKG). Each stage is designed for that exact age and stage of development.",
  },
  {
    q: "What are the school timings?",
    a: "Core school hours are Monday to Friday, 8:30 AM to 1:30 PM. Our front office is open Monday to Saturday, 8:00 AM to 4:00 PM, for visits and queries.",
  },
  {
    q: "How big are the classes?",
    a: "Deliberately small. Ratios range from 1:6 in Play class to 1:12 in Upper Kindergarten, so every child is genuinely known and supported.",
  },
  {
    q: "Is the campus safe and secure?",
    a: "Absolutely. We have a gated, CCTV-monitored campus, trained and background-checked staff, a strict child-handover protocol, and a full-time wellness room. Read our Safeguarding & Health policies for details.",
  },
  {
    q: "Do you provide meals?",
    a: "We offer a supervised healthy-snack routine and fresh drinking water. Many families send a nutritious tiffin from home; we share simple, dietitian-approved menu ideas through the parent app.",
  },
  {
    q: "How does my child move on to 'big school'?",
    a: "Through our partnership with The Elden Heights School, Drona Valley graduates enjoy a warm, prioritised pathway into Grade 1 — and stay with the same family all the way through to Class 12.",
  },
];

export type Testimonial = { quote: string; name: string; relation: string; color: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "My daughter cried when school closed for the holidays — that tells you everything! The teachers know her better than I sometimes do.",
    name: "Ananya R.",
    relation: "Mother of a Nursery star",
    color: "bg-sky-light",
  },
  {
    quote:
      "We toured five schools. Drona Valley was the only one where children ran up to show us their work. You can feel the joy the moment you walk in.",
    name: "Vikram & Neha S.",
    relation: "Parents in Nursery",
    color: "bg-sunshine-light",
  },
  {
    quote:
      "Knowing it's backed by The Elden Heights School gave us real confidence. It feels like the beginning of a long, lovely journey — not just a playschool.",
    name: "Farah M.",
    relation: "Mother of a Play-class cutie",
    color: "bg-coral-light",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "7+", label: "Joyful years" },
  { value: "1:8", label: "Avg. teacher ratio" },
  { value: "2,500+", label: "Happy graduates" },
  { value: "100%", label: "Play-based learning" },
];

export type Experience = { title: string; note: string; img: string; icon: GlyphName; tone: "coral" | "sky" | "grass" | "grape" | "sunshine" | "bubblegum" };

export const experiences: Experience[] = [
  { title: "Messy, marvellous art", note: "Where little hands make big masterpieces.", img: "/images/experience-art.jpg", icon: "palette", tone: "coral" },
  { title: "Wonder in the garden", note: "Mud kitchens, sprouting seeds and open skies.", img: "/images/experience-garden.jpg", icon: "sprout", tone: "grass" },
  { title: "Stories that sparkle", note: "Cosy corners and once-upon-a-times, every day.", img: "/images/experience-reading.jpg", icon: "book", tone: "grape" },
  { title: "Music & movement", note: "Shake, sing, sway — joy you can hear.", img: "/images/experience-music.jpg", icon: "music", tone: "sunshine" },
];
