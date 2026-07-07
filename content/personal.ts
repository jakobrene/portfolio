import type { PersonalItem } from "./types";

export const personal = {
  eyebrow: "Beyond the resume",
  heading: "What I like to do on my free time",
  sub: "On my free time I enjoy being on the water, hiking, skiing, cooking a good meal and learning new skills",
  items: [
    {
      k: "At sea",
      title: "Sailing",
      body: "The big trip was that 7 of us (my dad, uncle, brother and 3 others) sailed our 47 foot boat from St Marteen to the Azores, which was a dream experience and allowed me to get closer to my brother even though it was challenging at time in rough seas.",
    },
    {
      k: "Learning new skills",
      title: "Using AI",
      body: 'As I wanted to better understand the capabilities of AI, I built a productivity and budget app for my partner and I using Claude. I also built this website by utilizing Claude Code and hosting via Vercel.',
    },
    {
      k: "Roots",
      title: "Swede in the US with international upbringing",
      body: "I was born in Stockholm, Sweden, grew up in Gothenburg and lived 6 months in Milan. Move to Boston after university, at 25, and now living in Colorado Springs",
    },
  ] satisfies PersonalItem[],
};
