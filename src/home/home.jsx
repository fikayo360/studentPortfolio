import { useEffect, useRef } from 'react';
import './home.css';
import { Navbar } from '../nav/nav';

// Replace this with your actual image import or prop
// import profileImg from '../assets/profile.jpg';
const PLACEHOLDER_IMG = 'https://media.istockphoto.com/id/1394347360/photo/confident-young-black-businesswoman-standing-at-a-window-in-an-office-alone.jpg?s=612x612&w=0&k=20&c=tOFptpFTIaBZ8LjQ1NiPrjKXku9AtERuWHOElfBMBvY=';

export const Home = ({
  firstName = 'Miranda',
  lastName = 'Adekanmi',
  role = 'Student Based in Lagos',
  portfolioUrl = '#',
  imageSrc = PLACEHOLDER_IMG,
  imageAlt = 'Portrait of Omojowo Blessing',
  navLinks = [
    { label: 'About',     href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Skills',    href: '#skills' },
  ],
}) => {
  const heroRef = useRef(null);

  // Staggered entrance — add .is-visible class after mount
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add('is-visible'), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-wrapper" ref={heroRef}>

{/*    
      <nav className="nav" aria-label="Primary navigation">
        <a href="/" className="nav__logo">{lastName}</a>
        <ul className="nav__links" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="nav__burger" aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav> */}
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────── */}
      <main className="hero" id="home">
        <div className="hero__inner">

          {/* LEFT — text column */}
          <div className="hero__content">
            <h1 className="hero__name anim-fade-up delay-1">
              <span className="hero__name-first">{firstName}</span>
              <span className="hero__name-last">{lastName}</span>
            </h1>
          </div>

          {/* RIGHT — portrait */}
          <div className="hero__image-wrap anim-fade-up delay-2">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="hero__image"
              loading="eager"
              draggable="false"
            />
          </div>

        </div>

        {/* ── HERO FOOTER BAR ─────────────────────────────── */}
        <div className="hero__footer anim-fade-up delay-3">
          <a
            href={portfolioUrl}
            className="hero__download"
            download
            aria-label="Download portfolio PDF"
          >
            Download My Portfolio
            <svg
              className="hero__download-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 1v8M3 6l4 4 4-4M1 11h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <span className="hero__role">{role}</span>
        </div>

        {/* ── SCROLL INDICATOR ────────────────────────────── */}
        <div className="hero__scroll anim-fade-up delay-4" aria-hidden="true">
          <span className="hero__scroll-index">[01]</span>
        </div>
      </main>
    </div>
  );
}