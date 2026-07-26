import { timeline } from "@/content/timeline";
import Reveal from "./Reveal";

export default function TimelineSection() {
  return (
    <section className="section" id="timeline">
      <div className="wrap">
        <Reveal as="div" className="section-label">
          <h2>{timeline.heading}</h2>
          <span className="idx">{timeline.idx}</span>
        </Reveal>
        <Reveal as="div" className="timeline">
          {timeline.items.map((item, i) => (
            <div className={`tl-item tl-${item.type}`} key={i}>
              <div className="tl-marker" />
              <div className="tl-date">{item.date}</div>
              <div className="tl-content">
                <h4>{item.title}</h4>
                <p>
                  {item.org} · {item.place}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
