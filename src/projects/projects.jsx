import './projects.css'

import { useEffect, useRef } from 'react';

// ── PROJECT DATA ───────────────────────────────────────────
// Replace image src values with your actual project screenshots
const projects = [
  {
    id: 1,
    index: '[01]',
    category: 'Competition 24 · Workplace',
    title: 'Future of Work [1]',
    year: '2025',
    problem:
      'How do we design a workplace that adapts to hybrid work culture while promoting wellbeing, collaboration, and environmental sustainability?',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    link: '#',
  },
  {
    id: 2,
    index: '[02]',
    category: 'Site Plan · Urban',
    title: 'Future of Work [2]',
    year: '2025',
    problem:
      'Designing a site plan that integrates green corridors, pedestrian-first circulation, and structured parking within a dense urban footprint.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    link: '#',
  },
  {
    id: 3,
    index: '[03]',
    category: 'Sustainable Design · Energy',
    title: 'Automobile Energy Hub',
    year: '2024',
    problem:
      'Creating an energy-efficient automobile hub that reduces carbon emissions through passive design strategies and renewable energy integration.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    link: '#',
  },
  {
    id: 4,
    index: '[04]',
    category: 'Residential · Community',
    title: 'Affordable Housing Prototype',
    year: '2024',
    problem:
      'Proposing a scalable, low-cost housing model for Lagos peri-urban communities that prioritises natural ventilation and communal living.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    link: '#',
  },
];

// ── ARROW ICON ─────────────────────────────────────────────
const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="portfolio__card-arrow"
  >
    <path
      d="M3 13L13 3M13 3H6M13 3V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── COMPONENT ──────────────────────────────────────────────
export const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('portfolio--visible');
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolio" id="portfolio" ref={sectionRef}>
      <div className="portfolio__container">

        {/* ── HEADER ──────────────────────────────────────── */}
        <div className="portfolio__header port-anim delay-1">
          <span className="portfolio__index">[02] My Portfolio</span>
          <h2 className="portfolio__statement">
            With over 2 years of experience and more than 20 design studio
            projects, I have developed strong design skills and the ability
            to deliver real value in the architectural field.
          </h2>
        </div>

        {/* ── PROJECT GRID ────────────────────────────────── */}
        <div className="portfolio__grid port-anim delay-2">
          {projects.map((project) => (
            <article key={project.id} className="portfolio__card">

              {/* Image */}
              <a
                href={project.link}
                className="portfolio__card-img-wrap"
                aria-label={`View ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio__card-img"
                  loading="lazy"
                  draggable="false"
                />
                <div className="portfolio__card-overlay">
                  <span className="portfolio__card-view">View Project</span>
                </div>
                {/* Category badge — top left, visible in screenshot */}
                <span className="portfolio__card-category">{project.category}</span>
              </a>

              {/* Card footer */}
              <div className="portfolio__card-footer">
                <div className="portfolio__card-meta">
                  <h3 className="portfolio__card-title">{project.title}</h3>
                  <span className="portfolio__card-year">{project.year}</span>
                </div>

                <p className="portfolio__card-problem">{project.problem}</p>

                <a
                  href={project.link}
                  className="portfolio__card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <ArrowIcon />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}