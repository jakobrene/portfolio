import { profile } from "@/content/profile";
import Nav from "@/components/Nav";
import SideNav from "@/components/SideNav";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import VideoBlock from "@/components/VideoBlock";
import TimelineSection from "@/components/TimelineSection";
import WorkSection from "@/components/WorkSection";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <SideNav />
      <Hero />

      <AboutSection />

      <section className="section" id="intro">
        <div className="wrap">
          <Reveal as="div" className="section-label">
            <h2>{profile.intro.heading}</h2>
            <span className="idx">{profile.intro.idx}</span>
          </Reveal>
          <Reveal as="div">
            <VideoBlock embedUrl={profile.intro.embedUrl} corner={profile.intro.corner} />
          </Reveal>
        </div>
      </section>

      <WorkSection />
      <TimelineSection />
      <Footer />
    </>
  );
}
