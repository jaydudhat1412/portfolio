import React from 'react';
import { journeyData } from '../data/journey';

const Journey: React.FC = () => {
  return (
    <section id="journey" className="mt-8">
      <h2 className="text-xl font-bold tracking-tight mb-8">Journey</h2>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {journeyData.map((step, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-background bg-secondary group-hover:bg-accent group-hover:scale-125 transition-all shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[-0.5rem] md:ml-0 z-10" />
            
            <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border border-border bg-black/20 hover:border-secondary transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className={`font-mono text-xs font-bold ${step.current ? 'text-accent' : 'text-secondary'}`}>
                  {step.year}
                </span>
                <h3 className="font-medium text-primary text-sm">{step.title}</h3>
              </div>
              <p className="text-sm text-secondary/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
