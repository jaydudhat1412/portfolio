import React from 'react';
import { personalData } from '../data/personal';
import { currentlyLearning } from '../data/skills';
import { Terminal } from 'lucide-react';

const DeveloperStatus: React.FC = () => {
  return (
    <aside className="border border-border rounded-lg bg-black/40 overflow-hidden backdrop-blur-sm">
      <div className="border-b border-border bg-black/60 px-4 py-3 flex items-center gap-2">
        <Terminal size={16} className="text-secondary" />
        <span className="font-mono text-xs font-medium text-secondary tracking-widest">
          {personalData.name.toUpperCase().replace(' ', '.')} DEV_STATUS
        </span>
      </div>
      
      <div className="p-5 font-mono text-sm space-y-6">
        <div>
          <div className="text-secondary mb-2 text-xs">CURRENT FOCUS</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-primary">{personalData.currentFocus}</span>
          </div>
        </div>

        <div>
          <div className="text-secondary mb-3 text-xs">ACTIVITY LOG</div>
          <ul className="space-y-3">
            {currentlyLearning.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex flex-col gap-1">
                <span className="text-xs text-secondary/70">[{item.status}]</span>
                <span className="text-primary pl-2 border-l-2 border-border">{item.subject}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="text-secondary mb-2 text-xs">SYSTEM INFO</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="text-secondary/70">Semester:</div>
            <div className="text-primary">{personalData.semester}</div>
            <div className="text-secondary/70">Major:</div>
            <div className="text-primary truncate">CE</div>
            <div className="text-secondary/70">Location:</div>
            <div className="text-primary truncate" title={personalData.location}>{personalData.location}</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DeveloperStatus;
