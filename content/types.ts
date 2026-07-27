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

export type WorkBlock =
  | { kind: "p"; text: string }
  | { kind: "bullets"; items: string[] };

export type WorkEntry = {
  title: string;
  blocks: WorkBlock[];
  schema?: {
    caption: string;
    flow?: FlowItem[];
    loopNote?: string;
  };
};

export type TimelineItem = {
  date: string;
  title: string;
  org: string;
  place: string;
  type: "work" | "education";
};
