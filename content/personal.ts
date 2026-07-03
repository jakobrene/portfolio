import type { PersonalItem } from "./types";

export const personal = {
  eyebrow: "Beyond the resume",
  heading: "What I like to do",
  sub: "The same instincts show up off the clock: plan carefully, build the thing, enjoy the long passage.",
  items: [
    {
      k: "At sea",
      title: "Offshore sailing",
      body: "Recently crewed an Atlantic passage from Sint Maarten to the Azores. Two weeks, no land, plenty of time to think about systems that have to work the first time.",
    },
    {
      k: "After hours",
      title: "Building software",
      body: 'I build my own tools for the fun of it, from a household "super app" to automation workflows. If something annoys me twice, I usually end up building the fix.',
    },
    {
      k: "Roots",
      title: "Swedish, in Boston",
      body: "From Gothenburg, now in Boston. I follow football closely, like a good fermentation project, and care a bit too much about etymology.",
    },
  ] satisfies PersonalItem[],
};
