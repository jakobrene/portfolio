import type { WorkEntry } from "./types";

export const work: WorkEntry[] = [
  {
    tag: "RevOps · Systems",
    title: "Rebuilt the CRM from the ground up",
    body: "Migrated the company off Salesforce onto HubSpot and designed the automation layer in Make.com that keeps records, deals, and handoffs in sync without anyone touching a spreadsheet.",
    outcome: { num: "~12h", desc: "of manual data work removed per week" },
    schemaCaption: "sync layer",
    flow: [
      { kind: "node", node: { label: "SALESFORCE", sub: "legacy" } },
      { kind: "connector" },
      { kind: "node", node: { label: "MAKE.COM", sub: "routing + dedupe", style: "hub" } },
      { kind: "connector" },
      { kind: "node", node: { label: "HUBSPOT", sub: "source of truth", style: "amber" } },
    ],
    loopNote: "bidirectional sync · 9 scenarios · runs hourly",
  },
  {
    tag: "Commercial · Pricing",
    title: "Set the pricing and the go-to-market motion",
    body: "As the first business hire, I built how we price two product lines and how we sell them, from first-touch through close, turning ad-hoc quotes into a repeatable commercial process.",
    outcome: { num: "2", desc: "product lines repriced and packaged from scratch" },
    schemaCaption: "gtm motion",
    flip: true,
    flow: [
      { kind: "node", node: { label: "LEAD" } },
      { kind: "connector" },
      { kind: "node", node: { label: "QUALIFY" } },
      { kind: "connector" },
      { kind: "node", node: { label: "PRICE", sub: "model" } },
      { kind: "connector" },
      { kind: "node", node: { label: "CLOSE", style: "amber" } },
    ],
    loopNote: "documented playbook · handed off to repeat",
  },
  {
    tag: "Strategy · Targeting",
    title: "Turned an exhibitor list into an account plan",
    body: "Ahead of a major industry show, I analyzed the full exhibitor list, mapped it against where we actually win, and built a prioritized targeting plan the team could walk in and execute.",
    outcome: { num: "300+", desc: "exhibitors scored down to a focused target list" },
    schemaCaption: "prioritization",
    flow: [
      {
        kind: "column",
        items: [
          { kind: "node", node: { label: "300+ EXHIBITORS", sub: "raw list", dashedBorder: true } },
          { kind: "connectorV" },
          { kind: "node", node: { label: "FIT × INTENT FILTER", sub: "revenue-vertical match", style: "hub" } },
          { kind: "connectorV" },
          { kind: "node", node: { label: "TARGET ACCOUNTS", sub: "walk-in ready", style: "amber" } },
        ],
      },
    ],
  },
  {
    tag: "Ops · Automation",
    title: "Closed the loop on customer feedback",
    body: "Wired shipping events to a survey flow so every delivery automatically triggers an NPS request, logs the score in the CRM, and flags detractors for follow-up. No one has to remember to ask.",
    outcome: { num: "0", desc: "manual steps between delivery and feedback" },
    schemaCaption: "closed loop",
    flip: true,
    flow: [
      { kind: "node", node: { label: "SHIPPO", sub: "delivered" } },
      { kind: "connector", dashed: true },
      { kind: "node", node: { label: "MAKE", sub: "webhook", style: "hub" } },
      { kind: "connector" },
      {
        kind: "column",
        items: [
          { kind: "node", node: { label: "NPS EMAIL" } },
          { kind: "connectorV" },
          { kind: "node", node: { label: "HUBSPOT", sub: "score + flag", style: "amber" } },
        ],
      },
    ],
    loopNote: "detractors auto-routed for follow-up",
  },
];
