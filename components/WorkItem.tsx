import type { WorkEntry } from "@/content/types";
import Flow from "./Flow";
import Reveal from "./Reveal";

export default function WorkItem({ entry }: { entry: WorkEntry }) {
  return (
    <Reveal as="article" className={`work-item${entry.flip ? " flip" : ""}`}>
      <div className="work-copy">
        <span className="work-tag">{entry.tag}</span>
        <h3>{entry.title}</h3>
        <p>{entry.body}</p>
        <div className="outcome">
          <span className="num">
            <span>{entry.outcome.num}</span>
          </span>
          <span className="desc">{entry.outcome.desc}</span>
        </div>
      </div>
      <div className="schema">
        <span className="schema-cap">{entry.schemaCaption}</span>
        <Flow items={entry.flow} />
        {entry.loopNote && <div className="loop-note">{entry.loopNote}</div>}
      </div>
    </Reveal>
  );
}
