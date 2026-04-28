import './certs.css'
import { useEffect, useRef } from 'react';

// ── CERTIFICATION DATA ─────────────────────────────────────
// Replace `image` with your actual certificate image imports
// e.g. import cert1 from '../assets/certs/google-cert.jpg';

const certifications = [
  {
    id: 1,
    issuer: 'Google',
    title: 'Google Project Management Certificate',
    info: 'Completed a 6-course professional certificate covering project planning, risk management, agile methodologies, and stakeholder communication.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
    credentialUrl: '#',
  },
  {
    id: 2,
    issuer: 'Microsoft',
    title: 'Microsoft Office Specialist — Excel Expert',
    info: 'Demonstrated advanced proficiency in Microsoft Excel including complex formulas, data analysis, pivot tables, and automation with macros.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    credentialUrl: '#',
  },
  {
    id: 3,
    issuer: 'Coursera',
    title: 'Sustainable Architecture & Green Building',
    info: 'Studied the principles of sustainable design, passive cooling strategies, green material selection, and LEED certification standards.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    credentialUrl: '#',
  },
  {
    id: 4,
    issuer: 'Udemy',
    title: 'SketchUp Pro — Complete Architectural Modelling',
    info: 'Mastered 3D architectural modelling workflows in SketchUp Pro, from site context massing to detailed interior and exterior rendering.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    credentialUrl: '#',
  },
  {
    id: 5,
    issuer: 'ALX Africa',
    title: 'ALX Foundations Programme',
    info: 'Completed the ALX Foundations track, building skills in professional communication, problem-solving frameworks, and digital literacy.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    credentialUrl: '#',
  },
  {
    id: 6,
    issuer: 'Cisco',
    title: 'Cisco Introduction to Cybersecurity',
    info: 'Gained foundational knowledge of cybersecurity threats, data privacy, network security, and best practices for protecting digital systems.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    credentialUrl: '#',
  },
];

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className="cert__card-arrow"
  >
    <path
      d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Certs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('cert--visible');
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cert" id="certifications" ref={sectionRef}>
      <div className="cert__container">

        {/* ── HEADER ────────────────────────────────────── */}
        <div className="cert__header cert-anim delay-1">
          <span className="cert__index">My Certifications</span>
          <h2 className="cert__statement">
            Certifications received over the years
          </h2>
        </div>

        {/* ── GRID ──────────────────────────────────────── */}
        <div className="cert__grid cert-anim delay-2">
          {certifications.map((cert) => (
            <article key={cert.id} className="cert__card">

              {/* Image wrap */}
              <a
                href={cert.credentialUrl}
                className="cert__card-img-wrap"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View credential: ${cert.title}`}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert__card-img"
                  loading="lazy"
                  draggable="false"
                />
                <span className="cert__card-issuer">{cert.issuer}</span>
                <div className="cert__card-overlay">
                  <span className="cert__card-view">View Credential</span>
                </div>
              </a>

              {/* Card body */}
              <div className="cert__card-body">
                <div className="cert__card-meta">
                  <h3 className="cert__card-title">{cert.title}</h3>
                  <span className="cert__card-year">{cert.year}</span>
                </div>
                <p className="cert__card-info">{cert.info}</p>
                <a
                  href={cert.credentialUrl}
                  className="cert__card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Credential <ArrowIcon />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}