"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

const SECTIONS = profile.nav.map((item) => item.href.slice(1));

export default function SideNav() {
  const [active, setActive] = useState(SECTIONS[0]);

  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el
    );
    if (els.length === 0) return;

    let ticking = false;

    function update() {
      ticking = false;
      const anchor = window.scrollY + window.innerHeight * 0.3;
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActive(els[els.length - 1].id);
        return;
      }

      let current = els[0].id;
      for (const el of els) {
        if (el.offsetTop <= anchor) current = el.id;
      }
      setActive(current);
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className="side-nav" aria-label="Page sections">
      {profile.nav.map((item) => {
        const id = item.href.slice(1);
        return (
          <a key={id} href={item.href} className={id === active ? "active" : ""}>
            <span className="label">{item.label}</span>
            <span className="dot" />
          </a>
        );
      })}
    </nav>
  );
}
