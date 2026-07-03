# Portfolio

Next.js (App Router, TypeScript) port of the static portfolio mockup. No database, no CMS —
all editable copy lives in typed files under `/content`.

## Run locally

```
npm install
npm run dev
```

Open http://localhost:3000 (or whatever port is printed — Next.js picks the next free one).

## How to edit content

Nothing in `/components` or `/app` needs to change for a copy edit. Everything editable lives in
`/content`, as plain TypeScript objects/arrays.

### Edit your name, blurb, email, resume link, nav, social links
Edit `content/profile.ts`. Fields:
- `firstName` / `lastName`
- `eyebrow` — small label above the H1
- `oneliner` — `{ pre, highlight, post }`; `highlight` gets the amber underline
- `lede` — the paragraph under the oneliner
- `email`, `location`, `copyrightYear`
- `resumeUrl` — path to your resume PDF (see below)
- `nav` — top nav links
- `socialLinks` — footer links (LinkedIn, GitHub, etc.)
- `intro` — video section heading/caption/embed URL (see below)

### Edit or add a work item
Edit `content/work.ts` — it's an array of objects. To edit an existing project, change its
`tag`, `title`, `body`, or `outcome`. To **add a 5th project**, copy one of the existing objects,
paste it as a new array entry, and edit the strings — no markup changes needed.

Each work item also has a `flow` array that drives its schematic diagram (see below).

### Edit the "what I like to do" tiles
Edit `content/personal.ts` — `items` is an array of `{ k, title, body }`. Add, remove, or edit
entries directly. (Note: the grid is a 3-column layout in the design, so more than 3 items will
wrap to a new row.)

### Editing a schematic diagram
Diagrams are data, not markup. Each work entry's `flow` field is a list of items:

- `{ kind: "node", node: { label, sub?, style?, dashedBorder? } }` — a box. `style` is `"hub"`
  (navy fill, for the central/automation step) or `"amber"` (the amber dot, for the outcome/end
  step). Leave `style` unset for a plain node.
- `{ kind: "connector", dashed? }` — a horizontal arrow between nodes in the same row.
- `{ kind: "connectorV" }` — a vertical arrow, used inside a column.
- `{ kind: "column", items }` — a vertical stack of nodes/connectorV's, e.g. for a branch or a
  top-to-bottom flow.

The single reusable `<Flow>` component (`components/Flow.tsx`) renders any sequence built from
these four item types — see the four existing diagrams in `content/work.ts` for examples of a
straight row, a row with a nested branch, and an all-vertical column.

## Setting the video

The intro section is a click-to-play placeholder. To wire up a real video, set
`intro.embedUrl` in `content/profile.ts` to a Vimeo/Mux/YouTube **embed** URL, e.g.:

```ts
intro: {
  ...
  embedUrl: "https://player.vimeo.com/video/XXXXXXXXX",
}
```

Leave it as `""` to keep the "click to play" placeholder. No autoplay is used either way.

## Setting the resume PDF

Drop your resume PDF at `public/resume.pdf`, and it'll be served at `/resume.pdf` — which is
what `profile.resumeUrl` already points to. If you want a different filename or path, update
`resumeUrl` in `content/profile.ts` to match.

## Deploying to Vercel

1. Push this repo to GitHub:
   ```
   git init   # if not already a repo
   git add .
   git commit -m "Initial portfolio site"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to https://vercel.com/new, import the GitHub repo.
3. Framework preset should auto-detect as Next.js — no config needed (no env vars, no database).
4. Deploy. Every push to `main` will auto-deploy.

## Notes

- Styling is all in `app/globals.css` using CSS custom properties for the palette
  (`--navy`, `--amber`, `--paper`, etc.) — change those variables to retheme globally.
- Fonts (Space Grotesk, Source Serif 4, Space Mono) are loaded via `next/font/google` in
  `app/layout.tsx`.
- Scroll-in animations and reduced-motion support live in `components/Reveal.tsx` +
  the `.reveal` / `.reveal.in` rules in `globals.css`.
