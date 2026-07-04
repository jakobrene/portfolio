export const profile = {
  eyebrow: "Strategy & Operations · Boston, MA",
  firstName: "Jakob",
  lastName: "René",

  oneliner: {
    pre: "I turn messy go-to-market and operations into ",
    highlight: "systems that run without me.",
    post: "",
  },

  lede:
    "First commercial hire at a deep-tech 3D printing startup, where I built the connective tissue between product, sales, and operations: pricing, CRM, automation, and the go-to-market motion. I am looking for strategy, operations, or chief-of-staff work where the job is to make an organization run better.",

  email: "hello@example.com",
  resumeUrl: "/resume.pdf",
  location: "Boston, MA",
  copyrightYear: 2026,

  nav: [
    { label: "Work", href: "#work" },
    { label: "Beyond work", href: "#play" },
    { label: "Contact", href: "#contact" },
  ],

  socialLinks: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ],

  intro: {
    heading: "A 90-second introduction",
    idx: "00 / Hello",
    corner: "REC · 01:24",
    // Set this to a Vimeo/Mux/YouTube embed URL to make the video block playable.
    embedUrl: "",
  },

  work: {
    heading: "Selected work",
    idx: "Four things I built or moved",
  },
} as const;
