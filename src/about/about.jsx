import './about.css'
import { useEffect, useRef } from 'react';

const education = [
  {
    school: 'Obafemi Awolowo University',
    course: 'Bachelor of Architecture (B.Arch)',
    year: '2026',
    gpa: '4.89 / 5.0',
    coursework: [
      'Architectural Design Studio',
      'Environmental Technology',
      'Structural Systems',
      'Urban Planning & Theory',
      'Building Information Modelling',
    ],
  },
];

const experience = [
  {
    type: 'Award',
    role: 'Millennium Fellow',
    org: 'Millennium Campus Network',
    period: 'Class of 2025',
    description:
      'Selected as a Millennium Fellow, driving sustainability-focused community projects and representing OAU on a global platform of emerging leaders.',
  },
  {
    type: 'Internship',
    role: 'Architectural Intern',
    org: 'Design Studio — Lagos',
    period: 'Summer 2024',
    description:
      'Assisted in developing construction documents, site analysis, and client presentations for residential and mixed-use projects across Lagos State.',
  },
  {
    type: 'Personal Project',
    role: 'Lead Designer',
    org: 'Automobile Energy Hub',
    period: '2024',
    description:
      'Conceived and developed a full architectural proposal for a sustainable automobile energy hub, including site plan, sections, and structural concept.',
  },
  {
    type: 'Campus Role',
    role: 'Studio Representative',
    org: 'OAU Department of Architecture',
    period: '2023 – Present',
    description:
      'Liaison between students and faculty, coordinating design critiques, studio logistics, and peer mentorship for junior-year students.',
  },
];

export const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('about--visible');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__container">

        {/* ── TOP: INDEX + STATEMENT ─────────────────────── */}
        <div className="about__header about-anim delay-1">
          <span className="about__index">[01] About Me</span>

          <h2 className="about__statement">
            I am Miranda Adekanmi Adetoun, an award-winning architecture
            student at Obafemi Awolowo University. For me, architecture is
            more than a final product — it's a journey where every step of
            the process shapes, refines, and influences the outcome.
          </h2>
        </div>

        {/* ── BIO PARAGRAPH ─────────────────────────────── */}
        <div className="about__bio about-anim delay-2">
          <p>
            As a Millennium Fellow (Class of 2025), I am deeply committed
            to advancing sustainability in architecture. Many of my
            award-winning projects are rooted in sustainable design,
            reflecting my strong advocacy for environmental responsibility
            and future-focused solutions.
          </p>
          <p>
            Excellence is a standard I live by. With a current CGPA of
            4.89, I continually push myself to combine academic rigour with
            creative innovation — not just for recognition, but to
            consistently deliver meaningful impact through design.
          </p>

          {/* Passion tags */}
          <div className="about__tags">
            {['Sustainable Design', 'Urban Architecture', 'Structural Innovation', 'Environmental Advocacy', 'Spatial Storytelling'].map(
              (tag) => (
                <span key={tag} className="about__tag">
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        <div className="about__divider about-anim delay-3" />

        {/* ── BOTTOM GRID: EDUCATION + EXPERIENCE ───────── */}
        <div className="about__grid about-anim delay-3">

          {/* EDUCATION */}
          <div className="about__col">
            <h3 className="about__col-heading">Education</h3>

            {education.map((edu) => (
              <div key={edu.school} className="about__edu-card">
                <div className="about__edu-top">
                  <span className="about__edu-school">{edu.school}</span>
                  <span className="about__edu-year">{edu.year}</span>
                </div>
                <p className="about__edu-course">{edu.course}</p>
                {edu.gpa && (
                  <p className="about__edu-gpa">
                    CGPA &nbsp;<strong>{edu.gpa}</strong>
                  </p>
                )}
                <div className="about__coursework">
                  <span className="about__coursework-label">Relevant Coursework</span>
                  <ul className="about__coursework-list">
                    {edu.coursework.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* EXPERIENCE */}
          <div className="about__col">
            <h3 className="about__col-heading">Experience</h3>

            <div className="about__exp-list">
              {experience.map((exp, i) => (
                <div key={i} className="about__exp-item">
                  <div className="about__exp-top">
                    <span className="about__exp-type">{exp.type}</span>
                    <span className="about__exp-period">{exp.period}</span>
                  </div>
                  <p className="about__exp-role">{exp.role}</p>
                  <p className="about__exp-org">{exp.org}</p>
                  <p className="about__exp-desc">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}