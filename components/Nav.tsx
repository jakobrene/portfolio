import { profile } from "@/content/profile";

export default function Nav() {
  return (
    <header className="topbar">
      <div className="wrap">
        <div className="mark">
          {profile.firstName.toUpperCase()}
          <span className="dot">.</span>
        </div>
        <nav className="navlinks">
          {profile.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
