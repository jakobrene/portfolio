import { profile } from "@/content/profile";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero">
      <div className="grid-bg" />
      <div className="wrap">
        <Reveal as="div" className="inner">
          <span className="eyebrow">{profile.eyebrow}</span>
          <h1>
            {profile.firstName} <span className="last">{profile.lastName}</span>
          </h1>
          <p className="oneliner">
            {profile.oneliner.pre}
            <span className="hl">{profile.oneliner.highlight}</span>
            {profile.oneliner.post}
          </p>
          <p className="lede">{profile.lede}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={profile.resumeUrl} download>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
              </svg>
              Download resume
            </a>
            <a className="btn btn-ghost" href="#contact">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M4 6h16v12H4z" />
                <path d="M4 7l8 6 8-6" />
              </svg>
              Contact me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
