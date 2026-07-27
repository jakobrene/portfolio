import type { WorkEntry } from "./types";

export const work: WorkEntry[] = [
  {
    title: "Setting up infrastructure",
    blocks: [
      {
        kind: "p",
        text: "When I got hired, we didn't have a CRM system and we quickly opted for Salesforce. I took responsibility for setting up the system so we could use it.",
      },
      {
        kind: "p",
        text: "A few years later, Salesforce was too complex and too expensive for what we wanted to do, so I evaluated multiple CRMs before settling on HubSpot which I also took responsibility to set up.",
      },
      {
        kind: "p",
        text: "In addition to the two CRM systems, I have also onboarded Clay, Apollo and ZoomInfo for our lead generation efforts.",
      },
    ],
  },
  {
    title: "Automations and connecting systems using Make.com and APIs",
    blocks: [
      {
        kind: "p",
        text: "I streamlined the operations from order intake to shipment and NPS survey being sent by connecting 6 different systems using APIs and the automation platform Make.com.",
      },
      {
        kind: "p",
        text: "Inkbit is a manufacturing company which takes custom orders on the web, manufactures them and then ships them. Optimizing every step is important to keep overhead down.",
      },
      {
        kind: "p",
        text: "The system consists of 6 different parts: an order intake system, CRM (HubSpot), MES, a document generation platform, accounting system (QuickBooks) and a shipment provider.",
      },
      {
        kind: "p",
        text: "By using Make.com and APIs, I automated",
      },
      {
        kind: "bullets",
        items: [
          "Orders being put into HubSpot from our order intake system on the webpage for sales to review.",
          "Moving the order from HubSpot to our manufacturing system for operations to execute once sales has reviewed the order.",
          "Sending an order confirmation email once the order has been moved to the manufacturing system.",
          "Creating the pack list and the shipping label once the order is ready to be shipped.",
          "Generating the invoice in QuickBooks once the order shipped so our controller easily can send the invoice.",
          "Sending a tracking email once the carrier has picked up the package.",
          "Sending a survey once the package has been delivered.",
          "Notifying the salesperson that the package has been delivered.",
        ],
      },
    ],
    schema: {
      caption: "order to delivery",
      flow: [
        {
          kind: "column",
          items: [
            { kind: "node", node: { label: "ORDER INTAKE", sub: "webpage" } },
            { kind: "connectorV" },
            { kind: "node", node: { label: "HUBSPOT", sub: "sales review" } },
            { kind: "connectorV" },
            { kind: "node", node: { label: "MES", sub: "manufacturing" } },
            { kind: "connectorV" },
            { kind: "node", node: { label: "DOCS", sub: "pack list + label" } },
            { kind: "connectorV" },
            { kind: "node", node: { label: "QUICKBOOKS", sub: "invoice" } },
            { kind: "connectorV" },
            { kind: "node", node: { label: "SHIPMENT", sub: "tracking + survey" } },
          ],
        },
      ],
      loopNote: "6 systems connected via Make.com + APIs",
    },
  },
  {
    title: "AI Agents and Routines",
    blocks: [
      {
        kind: "p",
        text: "To streamline processes and enable sales to get information quickly, I built an agent that in the morning",
      },
      {
        kind: "bullets",
        items: [
          "Highlights any emails that need responses.",
          "Finds a set number of leads already in the CRM system given certain criteria and highlights a connection angle for the salesperson.",
        ],
      },
      {
        kind: "p",
        text: "I have also automated all the recurring document generation tasks, like daily, weekly or monthly reports for freeing up valuable time.",
      },
      {
        kind: "p",
        text: "In my free time, I have created an agent that looks through the LinkedIn notification emails sent to my Gmail and summarizes them in an Excel list given certain criteria. I can also communicate back with the agent by leaving notes in the Excel list for it to learn over time.",
      },
    ],
  },
];
