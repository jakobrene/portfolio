import type { FlowItem, FlowNode } from "@/content/types";

function Node({ node }: { node: FlowNode }) {
  const classes = [
    "node",
    node.style === "hub" && "hub",
    node.style === "amber" && "amber",
    node.dashedBorder && "dashed",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {node.label}
      {node.sub && <span className="node-sub">{node.sub}</span>}
    </div>
  );
}

function renderItem(item: FlowItem, key: number) {
  switch (item.kind) {
    case "node":
      return <Node key={key} node={item.node} />;
    case "connector":
      return (
        <div key={key} className={`conn${item.dashed ? " dashed" : ""}`}>
          <span className="line" />
        </div>
      );
    case "connectorV":
      return <div key={key} className="conn-v" />;
    case "column":
      return (
        <div key={key} className="flow-col">
          {item.items.map(renderItem)}
        </div>
      );
    default:
      return null;
  }
}

export default function Flow({ items }: { items: FlowItem[] }) {
  const isSingleColumn = items.length === 1 && items[0].kind === "column";

  if (isSingleColumn) {
    const column = items[0] as Extract<FlowItem, { kind: "column" }>;
    return <div className="flow-col">{column.items.map(renderItem)}</div>;
  }

  return <div className="flow">{items.map(renderItem)}</div>;
}
