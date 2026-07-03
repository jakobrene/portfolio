export type FlowNode = {
  label: string;
  sub?: string;
  style?: "hub" | "amber";
  dashedBorder?: boolean;
};

export type FlowItem =
  | { kind: "node"; node: FlowNode }
  | { kind: "connector"; dashed?: boolean }
  | { kind: "connectorV" }
  | { kind: "column"; items: FlowItem[] };

export type WorkEntry = {
  tag: string;
  title: string;
  body: string;
  outcome: { num: string; desc: string };
  schemaCaption: string;
  flow: FlowItem[];
  loopNote?: string;
  flip?: boolean;
};

export type PersonalItem = {
  k: string;
  title: string;
  body: string;
};
