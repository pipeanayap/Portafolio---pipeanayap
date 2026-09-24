export default function Navbar({ copy, language, onLanguageChange }) {
  return <nav>
    <a href="#hero" className="nav-logo" aria-label="Luis Felipe Anaya">LF.</a>
    <div className="nav-actions">
      <ul className="nav-links">
        <li><a href="#about">{copy.about}</a></li>
        <li><a href="#techstack">{copy.stack}</a></li>
        <li><a href="#projects">{copy.projects}</a></li>
        <li><a href="#contact">{copy.contact}</a></li>
      </ul>
      <button className="language-toggle" type="button" onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')} aria-label={copy.language}>
        <span className={language === 'es' ? 'active' : ''}>ES</span><span aria-hidden="true">/</span><span className={language === 'en' ? 'active' : ''}>EN</span>
      </button>
    </div>
  </nav>;
}
