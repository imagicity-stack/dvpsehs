import type { PolicyContent } from "@/components/PolicyArticle";
import { site, fullAddress } from "@/lib/site";

const UPDATED = "1 June 2026";

/**
 * Full text of every school policy. Written for a pre-primary / early-years
 * setting. Kept in one module so the school can review and amend wording in a
 * single place. These are sensible, good-practice templates — the school's
 * legal advisor should give them a final review before publication.
 */
export const policies: Record<string, PolicyContent> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    updated: UPDATED,
    intro: `Your family's privacy matters deeply to us. This policy explains what information ${site.name} ("we", "us", the "School") collects through ${site.url} and our admissions process, why we collect it, and the choices you have. Because we work with young children, we hold ourselves to an especially high standard of care.`,
    sections: [
      {
        id: "who-we-are",
        heading: "Who we are",
        blocks: [
          { p: `${site.name} is the early-years wing of ${site.parent}, operated with technology and administrative support from ${site.poweredBy}. Our registered campus is at ${fullAddress()}.` },
          { p: `For any privacy question, or to exercise your rights, contact our office at ${site.generalEmail} or call ${site.phonePrimary}.` },
        ],
      },
      {
        id: "what-we-collect",
        heading: "Information we collect",
        blocks: [
          { p: "We only collect what we genuinely need to respond to you and to care for your child. This may include:" },
          {
            list: [
              "Parent/guardian details: name, email address, phone number and relationship to the child.",
              "Child details you choose to share: name, date of birth and the programme of interest.",
              "Enquiry content: any message, preferences or notes you submit through our registration or contact forms.",
              "Technical data: basic, non-identifying analytics such as pages visited and device type, used to keep the site working well.",
            ],
          },
          { p: "We do not knowingly collect information directly from children, and we never ask children to submit information through this website." },
        ],
      },
      {
        id: "how-we-use",
        heading: "How we use your information",
        blocks: [
          { list: [
            "To respond to admissions enquiries and arrange campus visits.",
            "To answer general questions you send through the contact form.",
            "To keep you informed about your application and, where you have agreed, school news and updates.",
            "To maintain the safety, security and smooth running of our services.",
          ] },
          { p: "We rely on your consent (which you give when you submit a form) and our legitimate interest in operating the School to process this information." },
        ],
      },
      {
        id: "forms-and-email",
        heading: "Website forms & email delivery",
        blocks: [
          { p: "Our website has two forms — a registration/admissions form and a general contact form. When you submit either, the details are delivered securely by email to the relevant school inbox so a real person can help you. Submissions are protected by spam controls and basic rate limiting." },
          { p: "Email is convenient but not perfectly secure; please avoid sending sensitive medical or financial details through the forms. We will request any such information through a secure channel if needed." },
        ],
      },
      {
        id: "sharing",
        heading: "When we share information",
        blocks: [
          { p: "We never sell your data. We share it only with:" },
          { list: [
            `${site.parent}, where your enquiry relates to the wider school or a future transition.`,
            `${site.poweredBy} and trusted service providers (such as email and hosting) who process data on our behalf under strict confidentiality.`,
            "Authorities, where we are legally required to do so or to protect a child's safety.",
          ] },
        ],
      },
      {
        id: "retention",
        heading: "How long we keep it",
        blocks: [
          { p: "We keep enquiry data only as long as necessary to assist you and to meet our legal and operational obligations. Unsuccessful or inactive enquiries are reviewed periodically and securely deleted. Records of enrolled children are retained under our records-management practices and applicable law." },
        ],
      },
      {
        id: "your-rights",
        heading: "Your rights & choices",
        blocks: [
          { p: "You may ask us to access, correct, update or delete the personal information we hold about you and your child, or to stop sending you updates. To do so, email " + site.generalEmail + ". We will respond promptly and free of charge in ordinary cases." },
        ],
      },
      {
        id: "cookies",
        heading: "Cookies & analytics",
        blocks: [
          { p: "We aim to keep this website lightweight. We use only essential cookies required for the site to function and, where enabled, privacy-respecting analytics to understand which pages are helpful. You can control cookies through your browser settings at any time." },
        ],
      },
      {
        id: "children",
        heading: "Children's privacy",
        blocks: [
          { p: "This website is intended for use by parents, guardians and prospective families — not by children. We take extra care with any information relating to a child and process it strictly for admissions and care purposes." },
        ],
      },
      {
        id: "changes",
        heading: "Changes to this policy",
        blocks: [
          { p: "We may update this policy from time to time. The 'last updated' date above always reflects the current version, and material changes will be highlighted on this page." },
        ],
      },
    ],
  },

  terms: {
    slug: "terms",
    title: "Terms of Use",
    updated: UPDATED,
    intro: `These Terms of Use govern your use of ${site.url}, the website of ${site.name}. By browsing or submitting a form on this site, you agree to these terms. Please read them alongside our Privacy Policy.`,
    sections: [
      {
        id: "use-of-site",
        heading: "Use of this website",
        blocks: [
          { p: "This website is provided for general information about the School and its programmes, and to let families make enquiries. You agree to use it lawfully and not to misuse it, attempt to disrupt it, or submit false, harmful or automated content." },
        ],
      },
      {
        id: "information-accuracy",
        heading: "Accuracy of information",
        blocks: [
          { p: "We work hard to keep information current, but details such as programmes, timings, fees and availability can change. Nothing on this website constitutes a binding offer of a place. Admissions are confirmed only through our formal enrolment process and written confirmation from the School." },
        ],
      },
      {
        id: "intellectual-property",
        heading: "Intellectual property",
        blocks: [
          { p: `All content on this site — including text, graphics, logos, illustrations and the crests of ${site.name} and ${site.parent} — is owned by or licensed to the School and protected by law. You may not copy, reproduce or reuse it without our written permission.` },
        ],
      },
      {
        id: "submissions",
        heading: "Your submissions",
        blocks: [
          { p: "When you submit information through our forms, you confirm that it is accurate and that you are the parent or guardian (or are authorised to share the child's details). You are responsible for the content you send us." },
        ],
      },
      {
        id: "links",
        heading: "Third-party links",
        blocks: [
          { p: "This site may link to external websites (for example, social media or maps). We are not responsible for the content or practices of those sites and provide such links for convenience only." },
        ],
      },
      {
        id: "liability",
        heading: "Limitation of liability",
        blocks: [
          { p: "The website is provided on an 'as is' basis. To the fullest extent permitted by law, the School is not liable for any loss arising from your use of, or reliance on, this website. This does not limit any liability that cannot be excluded by law." },
        ],
      },
      {
        id: "governing-law",
        heading: "Governing law",
        blocks: [
          { p: `These terms are governed by the laws of ${site.address.country}, and any disputes are subject to the jurisdiction of its courts.` },
        ],
      },
      {
        id: "contact-terms",
        heading: "Contact",
        blocks: [
          { p: `Questions about these terms? Email ${site.generalEmail} or call ${site.phonePrimary}.` },
        ],
      },
    ],
  },

  admissions: {
    slug: "admissions",
    title: "Admissions Policy",
    updated: UPDATED,
    intro: `${site.name} welcomes families from all backgrounds. This Admissions Policy explains how we offer places fairly, transparently and in the best interests of every child, across our four early-years programmes for ages 2 to 6.`,
    sections: [
      {
        id: "ethos",
        heading: "Our admissions ethos",
        blocks: [
          { p: "We believe every child deserves a joyful start. We admit children without discrimination on the grounds of gender, religion, ethnicity, nationality or background, and we are committed to inclusion and reasonable support for children with additional needs wherever we can meet them well." },
        ],
      },
      {
        id: "age-eligibility",
        heading: "Age & eligibility",
        blocks: [
          { p: "Placement is guided primarily by the child's age as of the start of the academic session:" },
          { list: [
            "Toddler Nest — 2 to 3 years",
            "Playgroup — 3 to 4 years",
            "Nursery / Pre-KG — 4 to 5 years",
            "Kindergarten / KG — 5 to 6 years",
          ] },
          { p: "Where a child falls near a boundary, our team will recommend the stage that best fits their development, in conversation with the family." },
        ],
      },
      {
        id: "how-to-apply",
        heading: "How to apply",
        blocks: [
          { sub: "Step 1 — Register your interest" },
          { p: "Complete the registration form on our website or visit the school office. There is no fee to enquire." },
          { sub: "Step 2 — Visit & interaction" },
          { p: "We invite you and your child for a warm, informal campus visit. This is not a test — it simply helps us get to know your child and helps you get a feel for our school." },
          { sub: "Step 3 — Offer & enrolment" },
          { p: "If a suitable place is available, we make an offer. Your child's place is confirmed once the enrolment form is completed and the applicable fees are paid by the stated date." },
        ],
      },
      {
        id: "allocation",
        heading: "How places are allocated",
        blocks: [
          { p: "Classes are intentionally small, so demand can exceed availability. When a programme is oversubscribed, we consider, in order:" },
          { list: [
            "Siblings of current Drona Valley children and children of the wider Elden Heights family.",
            "Date of registration (earlier registrations are considered first).",
            "Age-appropriateness for the available cohort.",
          ] },
          { p: "Where we cannot offer a place immediately, families may choose to join a waiting list and will be contacted as soon as a place opens." },
        ],
      },
      {
        id: "documents",
        heading: "Documents we may request",
        blocks: [
          { list: [
            "The child's birth certificate (for age verification).",
            "Recent photographs of the child and parents/guardians (for our secure handover records).",
            "Immunisation/health record and details of any allergies or medical needs.",
            "Identification and contact details for authorised pick-up persons.",
          ] },
        ],
      },
      {
        id: "transition",
        heading: "Moving on to 'big school'",
        blocks: [
          { p: `As the early-years wing of ${site.parent}, our graduates enjoy a warm and prioritised pathway into the next stage of schooling. Continuing families benefit from a familiar ethos and a smooth, well-supported transition.` },
        ],
      },
      {
        id: "withdrawal",
        heading: "Withdrawal",
        blocks: [
          { p: "If you wish to withdraw your child, please notify the office in writing. Notice periods and any refunds are governed by our Fees & Refund Policy." },
        ],
      },
    ],
  },

  "child-protection": {
    slug: "child-protection",
    title: "Safeguarding & Child Protection",
    updated: UPDATED,
    intro: `The safety and wellbeing of every child is our highest priority — it comes before everything else. ${site.name} is committed to creating a culture where children feel secure, valued and listened to, and where every adult understands their duty to protect them.`,
    sections: [
      {
        id: "commitment",
        heading: "Our commitment",
        blocks: [
          { p: "We are committed to safeguarding and promoting the welfare of all children in our care. We expect every member of staff, volunteer and contractor to share this commitment and to act on any concern, however small." },
        ],
      },
      {
        id: "safer-recruitment",
        heading: "Safer recruitment & trained staff",
        blocks: [
          { list: [
            "All staff undergo identity, reference and background verification before they begin.",
            "Staff receive induction and regular training in safeguarding, first aid and child protection.",
            "A designated Safeguarding Lead oversees all concerns and is supported by the school leadership.",
          ] },
        ],
      },
      {
        id: "secure-campus",
        heading: "A secure campus",
        blocks: [
          { list: [
            "Gated, supervised entry with visitor sign-in and identity checks.",
            "CCTV monitoring of communal areas and entrances.",
            "A strict child-handover protocol: children are released only to parents or pre-authorised, identity-verified adults.",
            "Continuous adult supervision, including during outdoor and washroom routines, with safe adult-to-child ratios.",
          ] },
        ],
      },
      {
        id: "recognising-concerns",
        heading: "Recognising & responding to concerns",
        blocks: [
          { p: "Staff are trained to notice signs that a child may be at risk and to respond calmly and appropriately. Any concern is recorded and reported immediately to the Safeguarding Lead, who decides on next steps in the child's best interest, including referral to external agencies where required." },
        ],
      },
      {
        id: "physical-care",
        heading: "Physical care & positive guidance",
        blocks: [
          { p: "We use only gentle, positive approaches to guide behaviour. Corporal punishment, shouting, shaming or any form of physical or emotional harm is strictly prohibited and is treated as a serious disciplinary matter." },
        ],
      },
      {
        id: "online-safety",
        heading: "Online safety & images",
        blocks: [
          { p: "Photographs or videos of children are taken only for school purposes and only with parental consent. We store and share such images responsibly and never publish a child's full name alongside their image without permission." },
        ],
      },
      {
        id: "medical-emergencies",
        heading: "Health & emergencies",
        blocks: [
          { p: "Trained first-aiders are on site during school hours. In a medical emergency we administer first aid, contact parents immediately and, if necessary, arrange urgent medical care. Allergy and medication information provided at enrolment is kept readily accessible to relevant staff." },
        ],
      },
      {
        id: "raising-a-concern",
        heading: "How to raise a concern",
        blocks: [
          { p: `If you have any worry about a child's safety, please speak to us straight away. Contact the school office at ${site.phonePrimary} or email ${site.generalEmail} and ask to speak with the Designated Safeguarding Lead. Every concern is taken seriously and handled sensitively.` },
        ],
      },
    ],
  },

  "anti-bullying": {
    slug: "anti-bullying",
    title: "Anti-Bullying Policy",
    updated: UPDATED,
    intro: `Even in the early years, kindness must be taught, modelled and protected. ${site.name} is a warm, inclusive community where unkind behaviour is never ignored. This policy explains how we prevent and respond to hurtful behaviour among our youngest learners.`,
    sections: [
      {
        id: "our-belief",
        heading: "Our belief",
        blocks: [
          { p: "We believe every child has the right to feel safe, included and happy. While serious 'bullying' is rare at this age, young children are still learning how to share, take turns and manage big feelings. Our job is to guide them gently towards empathy and friendship." },
        ],
      },
      {
        id: "what-it-looks-like",
        heading: "What we watch for",
        blocks: [
          { p: "In an early-years setting, hurtful behaviour can look like:" },
          { list: [
            "Repeatedly excluding a particular child from play.",
            "Name-calling, teasing or unkind words.",
            "Hitting, pushing, biting or grabbing.",
            "Damaging or taking another child's belongings or work.",
          ] },
          { p: "We treat these as teachable moments, not labels — focusing on the behaviour, never branding the child." },
        ],
      },
      {
        id: "prevention",
        heading: "How we prevent it",
        blocks: [
          { list: [
            "Daily circle-time conversations about feelings, sharing and kindness.",
            "Stories, songs and role-play that build empathy and friendship skills.",
            "Close, warm adult supervision that spots and supports tricky moments early.",
            "A 'kindness culture' where helpful, gentle behaviour is noticed and celebrated.",
          ] },
        ],
      },
      {
        id: "response",
        heading: "How we respond",
        blocks: [
          { p: "When hurtful behaviour happens, staff calmly separate and comfort the children, help them name their feelings, and guide them to make amends. We support both the child who was hurt and the child who acted — because both are learning. Persistent patterns are recorded and discussed with parents so we can work together." },
        ],
      },
      {
        id: "working-with-parents",
        heading: "Working with families",
        blocks: [
          { p: "Partnership with parents is key. If your child is upset or struggling — or if you have a concern about another child's behaviour — please talk to your child's teacher or the office. We will listen, take it seriously, and agree a kind, consistent plan together." },
        ],
      },
      {
        id: "report-bullying",
        heading: "Telling us",
        blocks: [
          { p: `To raise a concern, speak to your child's teacher, call ${site.phonePrimary}, or email ${site.generalEmail}. No worry is ever too small.` },
        ],
      },
    ],
  },

  "health-safety": {
    slug: "health-safety",
    title: "Health, Safety & Hygiene",
    updated: UPDATED,
    intro: `A healthy child is a happy learner. ${site.name} maintains a clean, safe and caring environment so children can play and explore with confidence — and parents can relax knowing their little ones are well looked after.`,
    sections: [
      {
        id: "clean-environment",
        heading: "A clean, cared-for environment",
        blocks: [
          { list: [
            "Classrooms, toys and surfaces are cleaned and sanitised on a regular schedule.",
            "Child-height handwashing stations and gentle hand-hygiene routines throughout the day.",
            "Age-appropriate, well-maintained furniture and play equipment with rounded edges and safe materials.",
            "Clean, supervised washrooms with support for children still learning independence.",
          ] },
        ],
      },
      {
        id: "safe-play",
        heading: "Safe play, indoors & out",
        blocks: [
          { p: "Our indoor and outdoor play areas are designed for little bodies and checked routinely for hazards. Outdoor play is always supervised, with soft surfaces under climbing equipment and shaded areas for hot days." },
        ],
      },
      {
        id: "first-aid",
        heading: "First aid & medical care",
        blocks: [
          { list: [
            "Trained first-aiders are on site during all school hours.",
            "A dedicated wellness/rest area for children who feel unwell.",
            "Minor bumps are treated with care and logged; parents are informed.",
            "In an emergency, we administer first aid, call parents immediately, and seek urgent medical help if needed.",
          ] },
        ],
      },
      {
        id: "medication-allergies",
        heading: "Medication & allergies",
        blocks: [
          { p: "Please tell us about any allergies, dietary needs or medical conditions at enrolment and keep us updated. Medication is administered only with written parental consent and clear instructions. Allergy information is shared with all relevant staff." },
        ],
      },
      {
        id: "illness",
        heading: "When a child is unwell",
        blocks: [
          { p: "To protect everyone, please keep your child at home if they have a fever, an infectious illness, or symptoms such as vomiting or persistent cough. We will ask you to collect your child if they become unwell during the day. This simple care keeps our whole community healthy." },
        ],
      },
      {
        id: "nutrition",
        heading: "Healthy food & water",
        blocks: [
          { p: "We encourage nutritious tiffins and provide fresh drinking water throughout the day. We share simple, balanced menu ideas with families and maintain a nut-aware approach where allergies require it. Please avoid sending fizzy drinks, sweets or choking hazards." },
        ],
      },
      {
        id: "emergencies-drills",
        heading: "Emergency preparedness",
        blocks: [
          { p: "We maintain clear emergency procedures, accessible exits and age-appropriate safety practice so children and staff know what to do calmly if the unexpected happens. Up-to-date emergency contacts for every child are kept on file." },
        ],
      },
    ],
  },

  "fees-refund": {
    slug: "fees-refund",
    title: "Fees & Refund Policy",
    updated: UPDATED,
    intro: `We aim to be clear and fair about fees so families can plan with confidence. This policy sets out the general principles for fees, payments and refunds at ${site.name}. Exact amounts and dates are provided in your individual fee schedule at the time of admission.`,
    sections: [
      {
        id: "fee-structure",
        heading: "Fee structure",
        blocks: [
          { p: "Fees vary by programme and are shared in writing during admission. They may include:" },
          { list: [
            "A one-time registration/admission fee (non-refundable, unless stated otherwise).",
            "Tuition fees, payable per term or as set out in your fee schedule.",
            "Optional charges for items such as activity kits, uniforms or special events, where applicable.",
          ] },
        ],
      },
      {
        id: "payment-terms",
        heading: "Payment terms",
        blocks: [
          { list: [
            "Fees are due by the dates stated in your fee schedule.",
            "A child's place is confirmed only once the applicable fees are received.",
            "Receipts are issued for all payments. Please keep them for your records.",
            "Late payment may attract a reminder and, if unresolved, may affect continued enrolment.",
          ] },
        ],
      },
      {
        id: "refunds",
        heading: "Refunds",
        blocks: [
          { p: "Our general approach to refunds is as follows, subject to the specifics in your fee schedule and applicable law:" },
          { list: [
            "Registration/admission fees are generally non-refundable.",
            "Where you withdraw before the session begins, tuition already paid may be refunded in part, after deducting any non-refundable components and notice-period dues.",
            "Once a session has begun, tuition is typically non-refundable for the current term, though we always consider genuine hardship compassionately.",
            "Optional or third-party charges (e.g. uniforms already supplied) are non-refundable.",
          ] },
        ],
      },
      {
        id: "withdrawal-notice",
        heading: "Withdrawal & notice",
        blocks: [
          { p: "To withdraw your child, please give written notice to the school office. The notice period stated in your fee schedule applies. Refunds, where due, are processed to the original payer within a reasonable period after all school property is returned and dues are cleared." },
        ],
      },
      {
        id: "changes-fees",
        heading: "Changes to fees",
        blocks: [
          { p: "Fees are reviewed periodically. Any revision for a future session is communicated to families in advance. We are committed to keeping changes reasonable and clearly explained." },
        ],
      },
      {
        id: "financial-questions",
        heading: "Questions & support",
        blocks: [
          { p: `We're here to help. For any question about fees, payment plans or receipts, contact the school office at ${site.generalEmail} or ${site.phonePrimary}. Conversations about financial difficulty are always handled privately and kindly.` },
        ],
      },
    ],
  },
};

export const policySlugs = Object.keys(policies);
