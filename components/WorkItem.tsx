import type { WorkEntry } from "@/content/types";
import Flow from "./Flow";
import Reveal from "./Reveal";

export default function WorkItem({ entry }: { entry: WorkEntry }) {
  return (
    <Reveal as="article" className={`work-item${entry.schema ? "" : " solo"}`}>
      <div className="work-copy">
        <h3>{entry.title}</h3>
        {entry.blocks.map((block, i) =>
          block.kind === "bullets" ? (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          ) : (
            <p key={i}>{block.text}</p>
          )
        )}
      </div>
      {entry.schema && (
        <div className="schema">
          <span className="schema-cap">{entry.schema.caption}</span>
          {entry.schema.flow && <Flow items={entry.schema.flow} />}
          {entry.schema.loopNote && (
            <div className="loop-note">{entry.schema.loopNote}</div>
          )}
        </div>
      )}
    </Reveal>
  );
}
