import { profile } from "@/content/profile";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal as="div" className="section-label">
          <h2>{profile.about.heading}</h2>
        </Reveal>
        <Reveal as="div" className="about-grid">
          {profile.about.groups.map((group) => (
            <div className="about-group" key={group.heading}>
              <h3>{group.heading}</h3>
              {group.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
