import { useState, useEffect, useRef } from "react";
import { House, User, Briefcase, Wrench, Award, Mail } from "lucide-react";
import "./nav.css";

// ── NAV LINKS ──────────────────────────────────────────────
// Add / remove items here to match your page sections

const navLinks = [
  { label: "Home",   href: "#home",           icon: <House    size={18} /> },
  { label: "About",  href: "#about",          icon: <User     size={18} /> },
  { label: "Works",  href: "#portfolio",      icon: <Briefcase size={18} /> },
  { label: "Skills", href: "#skills",         icon: <Wrench   size={18} /> },
  { label: "Certs",  href: "#certifications", icon: <Award    size={18} /> },
  { label: "Contact",href: "#contact",        icon: <Mail     size={18} /> },
];

export const Navbar = () => {
  const [active, setActive]     = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible]   = useState(false);
  const indicatorRef            = useRef(null);
  const listRef                 = useRef(null);

  // Shrink pill on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Entrance animation — slight delay so page loads first
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  // Slide indicator to active item (desktop only)
  useEffect(() => {
    const list      = listRef.current;
    const indicator = indicatorRef.current;
    if (!list || !indicator) return;

    const activeBtn = list.querySelector(".nav__btn--active");
    if (!activeBtn) return;

    const listRect = list.getBoundingClientRect();
    const btnRect  = activeBtn.getBoundingClientRect();

    indicator.style.width = `${btnRect.width}px`;
    indicator.style.left  = `${btnRect.left - listRect.left}px`;
  }, [active]);

  // Auto-highlight section based on scroll position
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = navLinks.find(
              (l) => l.href === `#${entry.target.id}`
            );
            if (match) setActive(match.label);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={[
        "nav",
        scrolled ? "nav--scrolled" : "",
        visible  ? "nav--visible"  : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <nav
        className="nav__pill"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Sliding indicator — desktop */}
        <span
          className="nav__indicator"
          ref={indicatorRef}
          aria-hidden="true"
        />

        <ul className="nav__list" ref={listRef} role="list">
          {navLinks.map((link) => (
            <li key={link.label} role="listitem">
              <a
                href={link.href}
                className={`nav__btn${active === link.label ? " nav__btn--active" : ""}`}
                onClick={() => setActive(link.label)}
                aria-current={active === link.label ? "page" : undefined}
              >
                {/* Icon — mobile only */}
                <span className="nav__icon" aria-hidden="true">
                  {link.icon}
                </span>
                {/* Label — desktop */}
                <span className="nav__label">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};