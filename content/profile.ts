export const profile = {
  eyebrow: "Hi and welcome to my website, here you can learn more about me and what I like to do.",
  firstName: "Jakob",
  lastName: "René",

  lede:
    "Originally from Sweden, came to Boston in 2020 and moved to Colorado Springs in 2026. In my free time I love being outdoors, sailing, hiking, skiing, as well as cooking and learning new skills.",

  email: "jakob@jakobrene.com",
  resumeUrl: "/resume.pdf",
  location: "Colorado Springs, CO",
  copyrightYear: 2026,

  nav: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Intro", href: "#intro" },
    { label: "Timeline", href: "#timeline" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],

  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jakob-rene/" },
  ],

  about: {
    heading: "About",
    groups: [
      {
        heading: "Selected professional and educational experience",
        paragraphs: [
          "Leading sales and operations at Inkbit, a 3D-printing startup. Responsible for setting up go-to-market systems connecting sales, operations and marketing. Experience building connected system across HubSpot, Salesforce, Clay, Apollo, QuickBooks and document generating systems using Claude, Make.com and Zapier.",
          "Went to engineering school for a Bachelor of Science in Industrial Engineering and Management and a Master of Science in Management and Economics of Innovation. Did an exchange semester at Bocconi to further my finance interest and skills.",
          "Thrives in a fast-paced environment with freedom to innovate, like a startup.",
        ],
      },
      {
        heading: "Selected personal experience",
        paragraphs: [
          "Grew up in Sweden and moved to Boston for work in 2020. Got engaged in 2025 with wedding scheduled for September of 2026. About to move to Colorado Springs due to my fiancée's job.",
          "In my free time I like being outdoors; sailing, hiking, skiing and fishing. I also like cooking, reading and learning new skills, among them using AI to build this website.",
          "A recent highlight was sailing from Saint Martin to the Azores on my family's 47 foot boat with my dad, my uncle, my brother and three other friends. It was a surreal experience being 17 days at sea on a small boat.",
        ],
      },
    ],
  },

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
