import { useEffect, useState } from 'react';
import { ArrowRight, Terminal, Code2, FileCode } from 'lucide-react';

function Typewriter({ text }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex((current) => {
      if (current >= text.length) { clearInterval(interval); return current; }
      return current + 1;
    }), 10);
    return () => clearInterval(interval);
  }, [text]);
  return <>{text.slice(0, index)}<span className="cursor-blink">|</span></>;
}

const FileIcon = ({ name }) => name.endsWith('.json')
  ? <Code2 size={13} className="file-icon" />
  : name.endsWith('.js') ? <FileCode size={13} className="file-icon" /> : <Terminal size={13} className="file-icon" />;

export default function Hero({ copy, language }) {
  const [fileIndex, setFileIndex] = useState(0);
  const fileNames = Object.keys(copy.files);
  const activeFile = fileNames[Math.min(fileIndex, fileNames.length - 1)];

  return <section id="hero">
    <div className="hero-bg-name">LUIS</div><div className="hero-glow" />
    <div className="hero-left">
      <div className="hero-badge">{copy.badge}</div>
      <h1 className="hero-title">{copy.greeting}<br /><span className="outline">LUIS</span><br />FELIPE</h1>
      <p className="hero-sub">{copy.intro}</p>
      <a href="#about" className="hero-cta-btn"><span>{copy.cta}</span><ArrowRight className="btn-icon" size={16} /></a>
    </div>
    <div className="hero-right"><div className="editor-widget">
      <div className="editor-header"><div className="editor-dots"><span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" /></div><div className="editor-title">luis_felipe_cv (VSCode)</div></div>
      <div className="editor-body">
        <div className="editor-sidebar"><div className="sidebar-title">{copy.explorer}</div><ul className="file-list">
          {fileNames.map((name, index) => <li key={name} className={`file-item ${index === fileIndex ? 'active' : ''}`} onClick={() => setFileIndex(index)}><FileIcon name={name} />{name}</li>)}
        </ul></div>
        <div className="code-panel"><div className="tab-bar"><div className="tab active"><FileIcon name={activeFile} />{activeFile}</div></div>
          <pre className="code-screen"><code><Typewriter key={`${language}-${activeFile}`} text={copy.files[activeFile]} /></code></pre>
        </div>
      </div>
    </div></div>
  </section>;
}
