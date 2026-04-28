import './contact.css'


const socials = [
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/omojowo-blessing' },
  { label: 'Instagram', href: 'https://instagram.com/omojowo.blessing' },
  { label: 'Twitter',   href: 'https://twitter.com/omojowoblessing' },
  { label: 'Behance',   href: 'https://behance.net/omojowoblessing' },
];

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className="contact__social-arrow"
  >
    <path
      d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">

        {/* ── INNER DARK CARD ──────────────────────────── */}
        <div className="contact__card">

          {/* ── TOP: HEADING ──────────────────────────── */}
          <h2 className="contact__heading">Get in touch.</h2>

          {/* ── MIDDLE: THREE COLUMNS ─────────────────── */}
          <div className="contact__cols">

            {/* COL 1 — Email */}
            <div className="contact__col">
              <span className="contact__col-label">Let's start a conversation</span>
              <a
                href="mailto:omojowoblessing@gmail.com"
                className="contact__email"
              >
                omojowoblessing@gmail.com
              </a>
            </div>

            {/* COL 2 — Location */}
            <div className="contact__col">
              <span className="contact__col-label">Based in</span>
              <p className="contact__location">Lagos, NG</p>
              <p className="contact__location">Ile-Ife, NG</p>
            </div>

            {/* COL 3 — Socials */}
            <div className="contact__col">
              <span className="contact__col-label">Follow me</span>
              <ul className="contact__socials" role="list">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="contact__social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.label} <ArrowIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ── FOOTER: LOGO + COPYRIGHT ───────────────── */}
          <div className="contact__footer">
            <span className="contact__logo">Blessing</span>
            <p className="contact__copy">
              © {new Date().getFullYear()} Omojowo Blessing Omotola. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}