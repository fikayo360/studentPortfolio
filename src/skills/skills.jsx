import './skills.css'

import { useEffect, useRef } from 'react';


// ── SKILL DATA ─────────────────────────────────────────────
// Edit these arrays to update your skills at any time

const primarySkills = [
  'AutoCAD',
  'Revit',
  'SketchUp',
  'Lumion',
  'Hand Drafting',
  'Adobe Photoshop',
  'Adobe InDesign',
  'Canva',
  'Site Analysis',
  'Environmental Technology',
  'Passive Design',
  'Model Making',
  'Research',
  'Leadership',
  'Public Speaking',
  'Communication',
  'Critical Thinking',
  'Client Presentations',
  'Microsoft Excel',
  'Python',
  'React',
];

const specialNote = {
  line1: 'Need a specific skill?',
  line2: "I'm always up for learning something new.",
};

// ── COMPONENT ──────────────────────────────────────────────
export const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('skills--visible');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills__container">

        {/* ── INDEX LABEL ─────────────────────────────── */}
        <span className="skills__index sk-anim delay-1">[03] My Skills</span>

        {/* ── STATEMENT ───────────────────────────────── */}
        <p className="skills__statement sk-anim delay-2">
          A multidisciplinary skill set built through rigorous studio
          practice, academic excellence, and a relentless drive to grow.
        </p>

        {/* ── CATEGORY LABEL — mirrors "FULL-STACK && CUSTOM" */}
        <span className="skills__category-label sk-anim delay-2">
          Design &amp;&amp; Technical &amp;&amp; Professional
        </span>

        {/* ── TAG CLOUD ───────────────────────────────── */}
        <div className="skills__tags sk-anim delay-3">
          {primarySkills.map((skill) => (
            <span key={skill} className="skills__tag">
              {skill}
            </span>
          ))}
        </div>

        {/* ── BOTTOM NOTE — mirrors "Need something special?" */}
        <div className="skills__note sk-anim delay-3">
          <p>{specialNote.line1}</p>
          <p>{specialNote.line2}</p>
        </div>

      </div>
    </section>
  );
}