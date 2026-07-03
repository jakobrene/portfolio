import { personal } from "@/content/personal";
import Reveal from "./Reveal";

export default function PersonalSection() {
  return (
    <section className="section personal" id="play">
      <div className="grid-bg" />
      <div className="wrap">
        <Reveal as="div">
          <span className="eyebrow">{personal.eyebrow}</span>
          <h2>{personal.heading}</h2>
          <p className="sub">{personal.sub}</p>
        </Reveal>
        <Reveal as="div" className="likes">
          {personal.items.map((item) => (
            <div className="like" key={item.k}>
              <div className="k">{item.k}</div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
