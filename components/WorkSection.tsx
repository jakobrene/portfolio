import { profile } from "@/content/profile";
import { work } from "@/content/work";
import Reveal from "./Reveal";
import WorkItem from "./WorkItem";

export default function WorkSection() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal as="div" className="section-label">
          <h2>{profile.work.heading}</h2>
          <span className="idx">{profile.work.idx}</span>
        </Reveal>

        {work.map((entry, i) => (
          <WorkItem key={i} entry={entry} />
        ))}
      </div>
    </section>
  );
}
