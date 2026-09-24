import { useState } from 'react';
import { skills } from '../content';

// Simplified premium vector SVGs for all technical skills in the CV
const SVG_ICONS = {
  Kotlin: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
      <path d="M2 2h20L2 22z" fill="#7F52FF" />
      <path d="M2 22h20V2L2 22z" fill="#C711E1" opacity="0.8" />
      <path d="M12 12L22 22H2v-10z" fill="#E2442F" opacity="0.9" />
    </svg>
  ),
  'Android SDK': (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#3DDC84" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9a8 8 0 0 1 16 0v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9z" />
      <path d="M6 18v2M18 18v2M9 5l-1-2M15 5l1-2" />
      <circle cx="8" cy="11" r="1.2" fill="#3DDC84" />
      <circle cx="16" cy="11" r="1.2" fill="#3DDC84" />
    </svg>
  ),
  'Jetpack Compose': (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
      <circle cx="12" cy="12" r="3" stroke="#3DDC84" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#3776AB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v10m0 0v10m0-10H2m10 0h10" strokeWidth="2" />
      <circle cx="12" cy="12" r="8" stroke="#FFD43B" />
      <circle cx="12" cy="12" r="4" stroke="#3776AB" />
    </svg>
  ),
  FastAPI: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#009688" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" fill="rgba(0,150,136,0.1)" />
      <path d="M13.5 4.5 7.8 13h4.4l-1.7 6.5 5.7-9h-4.4z" fill="#009688" stroke="none" />
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#339933" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 7v10l10 5 10-5V7" />
      <path d="M12 12v10" />
    </svg>
  ),
  Django: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#092E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="rgba(9, 46, 32, 0.1)" />
      <path d="M9 8h6v8M9 12h5" />
    </svg>
  ),
  'ASP.NET': (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#512BD4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="rgba(81, 43, 212, 0.1)" />
      <path d="M6 15V9l4 6V9M13 9h5M15.5 9v6" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
      <text x="13" y="18" fill="#fff" fontFamily="sans-serif" fontSize="9" fontWeight="bold" letterSpacing="-0.5">TS</text>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#61DAFB" strokeWidth="1.4">
      <ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /><circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  ),
  Angular: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#DD0031" strokeWidth="1.8" strokeLinejoin="round">
      <path d="m12 2 9 3-1.5 12L12 22l-7.5-5L3 5z" fill="rgba(221,0,49,0.1)" /><path d="m8 17 4-10 4 10M9.5 13h5" />
    </svg>
  ),
  Svelte: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#FF3E00" strokeWidth="2" strokeLinecap="round">
      <path d="M17.8 4.2c-2.2-1.5-5-1.5-7.2 0L6.8 6.6a3.4 3.4 0 0 0 1.7 6.2l7 2.1a1.6 1.6 0 0 1 .4 2.8l-3.2 2a3.2 3.2 0 0 1-4.4-1l-.5-.8" /><path d="M6.2 19.8c2.2 1.5 5 1.5 7.2 0l3.8-2.4a3.4 3.4 0 0 0-1.7-6.2l-7-2.1a1.6 1.6 0 0 1-.4-2.8l3.2-2a3.2 3.2 0 0 1 4.4 1l.5.8" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#4169E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    </svg>
  ),
  'SQL Server': (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#CC292B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" fill="rgba(204, 41, 43, 0.1)" />
      <path d="M3 5v5c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 10v5c0 1.66 4 3 9 3s9-1.34 9-3v-5" />
      <path d="M3 15v5c0 1.66 4 3 9 3s9-1.34 9-3v-5" />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#47A248" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C9 7 8 11 12 22c4-11 3-15 0-20z" fill="rgba(71, 162, 72, 0.1)" />
      <path d="M12 5a3 3 0 0 1 0 6M12 11a3 3 0 0 0 0 6" />
    </svg>
  ),
  Milvus: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#00A1EA" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" fill="rgba(0,161,234,0.2)" /><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2" />
    </svg>
  ),
  'OpenAI API': (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#74AA9C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a4.5 4.5 0 0 1 7.6 3.3A4.5 4.5 0 0 1 20 15a4.5 4.5 0 0 1-7.6 4.7A4.5 4.5 0 0 1 4.4 17 4.5 4.5 0 0 1 4 8.9 4.5 4.5 0 0 1 12 3Z" /><path d="m8 8 8 4.5M8 16l8-4.5M12 7v10" />
    </svg>
  ),
  LangChain: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#4CAF50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 14.5 7 17a3 3 0 0 1-4.2-4.2l3-3A3 3 0 0 1 10 9" /><path d="m14.5 9.5 2.5-2.5a3 3 0 0 1 4.2 4.2l-3 3A3 3 0 0 1 14 15" /><path d="m8.5 15.5 7-7" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#F05032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M6 9v6M9 15h6M18 15V9" />
    </svg>
  ),
  Postman: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#FF6C37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
      <path d="M12 12h10" />
    </svg>
  ),
  Terraform: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#7B42BC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h7v7H3zm11 0h7v7h-7zm0 11h7v7h-7zM3 14h7v7H3z" fill="rgba(123, 66, 188, 0.1)" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#2496ED" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h15.5c.4-1.8 1.5-2.8 3-3.3.2 2-.4 3.5-1.8 4.4C18.6 17 15.7 19 11 19c-4.8 0-7.3-2.2-8-7Z" fill="rgba(36,150,237,0.12)" /><path d="M6 9h3v3H6zM9 6h3v3H9zM9 9h3v3H9zM12 9h3v3h-3zM12 6h3v3h-3zM15 9h3v3h-3z" />
    </svg>
  ),
  'GitHub Actions': (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#2088FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4z" fill="rgba(32,136,255,0.2)" /><path d="M5 5 3 3M19 5l2-2M5 19l-2 2M19 19l2 2" />
    </svg>
  ),
  Linux: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#FCC624" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 10c0-5 1.5-8 4-8s4 3 4 8c2 2 3 5 2 8l-3-1-3 4-3-4-3 1c-1-3 0-6 2-8Z" fill="rgba(252,198,36,0.1)" /><circle cx="10" cy="8" r=".8" fill="#FCC624" /><circle cx="14" cy="8" r=".8" fill="#FCC624" /><path d="m10 11 2 1 2-1M9 17h6" />
    </svg>
  ),
  Cypress: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#17202C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" stroke="#00BF88" />
      <path d="M8 12h8M12 8v8" stroke="#00BF88" />
    </svg>
  ),
};

export default function TechStack({ copy, language }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', ...Object.keys(copy.categories)];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="techstack">
      <p className="section-label">{copy.label}</p>
      <h2 className="section-title">{copy.title}</h2>

      {/* Category Tabs */}
      <div className="tech-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tech-tab-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat === 'all' ? copy.all : copy.categories[cat]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="tech-grid">
        {filteredSkills.map((tech) => (
          <div className="tech-card" key={tech.name}>
            <div className="tech-icon-container">
              {SVG_ICONS[tech.name] || (
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              )}
            </div>
            <div className="tech-name">{tech.name}</div>
            <div className="tech-type">{tech.type[language]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
