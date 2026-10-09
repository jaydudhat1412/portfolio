import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, CornerDownLeft, Sparkles, Check, Copy } from 'lucide-react';
import { personalData } from '../data/personal';
import { projects } from '../data/projects';
import { skillsData } from '../data/skills';

interface OutputLine {
  id: string;
  type: 'command' | 'response' | 'error' | 'success';
  text: React.ReactNode;
}

export const TerminalSection: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<OutputLine[]>([
    {
      id: 'init-1',
      type: 'response',
      text: (
        <div className="space-y-1 text-xs md:text-sm">
          <p className="text-accent font-semibold">⚡ Jay Dudhat Interactive Shell v2.4 (web-terminal-sh)</p>
          <p className="text-secondary">Type <span className="text-emerald-400 font-bold">help</span> to view available system routines, or tap the quick pills below.</p>
        </div>
      )
    }
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const lower = raw.toLowerCase();
    const cmdEntry: OutputLine = {
      id: `cmd-${Date.now()}`,
      type: 'command',
      text: <span className="text-white font-mono">{raw}</span>
    };

    let responseEntry: OutputLine;

    switch (lower) {
      case 'help':
        responseEntry = {
          id: `res-${Date.now()}`,
          type: 'response',
          text: (
            <div className="space-y-1 text-xs md:text-sm font-mono">
              <p className="text-secondary">Available commands:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-1 text-xs">
                <div><span className="text-emerald-400 font-semibold">about</span> — Bio & Current focus</div>
                <div><span className="text-emerald-400 font-semibold">skills</span> — Tech competencies</div>
                <div><span className="text-emerald-400 font-semibold">projects</span> — Key builds catalog</div>
                <div><span className="text-emerald-400 font-semibold">education</span> — Engineering background</div>
                <div><span className="text-emerald-400 font-semibold">contact</span> — Reach out / Socials</div>
                <div><span className="text-emerald-400 font-semibold">clear</span> — Reset terminal output</div>
              </div>
            </div>
          )
        };
        break;

      case 'about':
        responseEntry = {
          id: `res-${Date.now()}`,
          type: 'response',
          text: (
            <div className="space-y-2 text-xs md:text-sm font-mono text-secondary">
              <p><strong className="text-white">{personalData.name}</strong> • {personalData.role}</p>
              <p>{personalData.about}</p>
              <div className="pt-1.5 space-y-1 border-t border-white/10">
                <p className="text-emerald-400 font-semibold">⚡ Semester 3 Active Focus:</p>
                <p className="text-white/85">HTML5, CSS3, Bootstrap 5, JavaScript (ES6+), Python, Tailwind CSS</p>
                <p className="text-accent font-semibold pt-1">📚 Semesters 1 & 2 Completed:</p>
                <p className="text-white/85">Core Java (OOP), Database Management Systems (DBMS), MySQL, Data Structures</p>
              </div>
            </div>
          )
        };
        break;

      case 'skills':
        responseEntry = {
          id: `res-${Date.now()}`,
          type: 'response',
          text: (
            <div className="space-y-2 text-xs md:text-sm font-mono">
              {skillsData.map((cat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-accent font-semibold">[{cat.title}]</p>
                  <p className="text-secondary">{cat.skills.map(s => s.name).join(' • ')}</p>
                </div>
              ))}
            </div>
          )
        };
        break;

      case 'projects':
        responseEntry = {
          id: `res-${Date.now()}`,
          type: 'response',
          text: (
            <div className="space-y-2 text-xs md:text-sm font-mono">
              <p className="text-white font-semibold">Featured Repositories:</p>
              <ul className="space-y-1 text-secondary">
                {projects.map((p) => (
                  <li key={p.id} className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                    <span className="text-emerald-400">#{p.number} {p.title}</span>
                    <span className="text-xs text-secondary/60">({p.technologies.slice(0, 3).join(', ')})</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        };
        break;

      case 'education':
        responseEntry = {
          id: `res-${Date.now()}`,
          type: 'response',
          text: (
            <div className="space-y-1 text-xs md:text-sm font-mono text-secondary">
              <p className="text-white font-bold">Bachelor of Engineering in Computer Engineering</p>
              <p>Semester 03 • Ahmedabad, Gujarat, India</p>
              <p className="text-xs text-accent">Core Focus: Data Structures & Algorithms, Java OOP, DBMS, Web Architecture</p>
            </div>
          )
        };
        break;

      case 'contact':
        responseEntry = {
          id: `res-${Date.now()}`,
          type: 'response',
          text: (
            <div className="space-y-1 text-xs md:text-sm font-mono text-secondary">
              <p>Email: <a href={`mailto:${personalData.email}`} className="text-accent hover:underline">{personalData.email}</a></p>
              <p>GitHub: <a href={`https://github.com/${personalData.github}`} target="_blank" rel="noreferrer" className="text-accent hover:underline">github.com/{personalData.github}</a></p>
              <p>LinkedIn: <a href={`https://linkedin.com/in/${personalData.linkedin}`} target="_blank" rel="noreferrer" className="text-accent hover:underline">linkedin.com/in/{personalData.linkedin}</a></p>
            </div>
          )
        };
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        responseEntry = {
          id: `err-${Date.now()}`,
          type: 'error',
          text: (
            <p className="text-xs md:text-sm font-mono text-rose-400">
              Command not found: "{raw}". Type <span className="underline cursor-pointer font-bold" onClick={() => handleCommand('help')}>help</span> for valid operations.
            </p>
          )
        };
        break;
    }

    setHistory((prev) => [...prev, cmdEntry, responseEntry]);
    setInput('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="scroll-mt-24 py-8">
      <div className="glow-card rounded-3xl overflow-hidden border border-white/10 bg-[#0c101a]/80 shadow-2xl">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-black/40 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm"></span>
            <div className="flex items-center gap-2 ml-3">
              <Terminal size={14} className="text-secondary" />
              <span className="text-xs font-mono text-secondary tracking-tight">jay@portfolio: ~ (bash)</span>
            </div>
          </div>
          
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 text-xs font-mono text-secondary hover:text-white px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
            title="Copy email to clipboard"
          >
            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            <span>{copied ? 'Copied' : 'copy email'}</span>
          </button>
        </div>

        {/* Quick Action Suggestion Chips */}
        <div className="px-5 py-2.5 bg-black/20 border-b border-white/5 flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-secondary/60 flex items-center gap-1 mr-1">
            <Sparkles size={12} className="text-accent" /> Quick execute:
          </span>
          {['about', 'skills', 'projects', 'education', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-accent/20 hover:text-accent border border-white/5 transition-all text-secondary"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="p-5 md:p-6 min-h-[220px] max-h-[360px] overflow-y-auto space-y-4 font-mono text-sm leading-relaxed no-scrollbar">
          {history.map((line) => (
            <div key={line.id} className="space-y-1">
              {line.type === 'command' ? (
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <span className="text-accent select-none">➜</span>
                  <span className="text-secondary/80 select-none">~</span>
                  <span>{line.text}</span>
                </div>
              ) : (
                <div className="pl-4 border-l border-white/10">{line.text}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="flex items-center gap-2 px-5 py-3.5 bg-black/40 border-t border-white/5"
        >
          <span className="text-accent font-mono select-none">➜</span>
          <span className="text-secondary/70 font-mono text-xs select-none">~</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or click a command chip above..."
            className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs md:text-sm placeholder:text-secondary/40"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-accent/20 hover:bg-accent text-accent hover:text-white transition-all text-xs"
            aria-label="Send command"
          >
            <CornerDownLeft size={14} />
          </button>
        </form>
      </div>
    </section>
  );
};
export default TerminalSection;
