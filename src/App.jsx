import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { content } from './content';
import './App.css';

export default function App() {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('portfolio-language');
    if (saved === 'es' || saved === 'en') return saved;
    return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
  });
  const copy = content[language];

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
    document.title = copy.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.meta.description);
  }, [language, copy.meta]);

  return <>
    <Navbar copy={copy.nav} language={language} onLanguageChange={setLanguage} />
    <Hero copy={copy.hero} language={language} />
    <div className="divider" />
    <About copy={copy.about} />
    <div className="divider" />
    <TechStack copy={copy.stack} language={language} />
    <div className="divider" />
    <Projects copy={copy.projects} />
    <div className="divider" />
    <Contact copy={copy.contact} />
    <footer>© {new Date().getFullYear()} Luis Felipe Anaya · {copy.footer}</footer>
  </>;
}
