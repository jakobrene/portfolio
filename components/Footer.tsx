import { profile } from "@/content/profile";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <Reveal as="div" className="footer-top">
          <h2>
            Let&apos;s talk.
            <br />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </h2>
          <a className="btn btn-primary" href={profile.resumeUrl} download>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
            </svg>
            Download resume
          </a>
        </Reveal>
        <div className="footer-meta">
          <span>
            © {profile.copyrightYear} {profile.firstName} {profile.lastName} · {profile.location}
          </span>
          <div className="footer-links">
            {profile.socialLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
