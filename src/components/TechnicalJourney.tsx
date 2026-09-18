import React from 'react';
import { TIMELINE } from '../data/portfolioData';

export const TechnicalJourney: React.FC = () => {
  return (
    <div className="relative border-l border-border ml-4 md:ml-8 pl-6 md:pl-8 space-y-10">
      {TIMELINE.map((node, idx) => (
        <div key={idx} className="relative group">
          {/* Node dot with terminal style */}
          <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-surface group-hover:bg-accent transition-smooth"></div>
          
          <div className="bg-surface border border-border/70 p-6 rounded-xl hover:border-accent/50 transition-smooth">
            <span className="text-xs font-mono text-accent mb-1 block">0{idx + 1} // MILESTONE</span>
            <h3 className="text-xl font-bold text-primary mb-2">{node.title}</h3>
            <p className="text-secondary text-sm leading-relaxed">{node.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
