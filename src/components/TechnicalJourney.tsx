import React from 'react';
import { TIMELINE } from '../data/portfolioData';

export const TechnicalJourney: React.FC = () => {
  return (
    <div className="relative border-l-2 border-border/80 ml-4 md:ml-8 pl-6 md:pl-10 space-y-8">
      {TIMELINE.map((node, idx) => (
        <div key={idx} className="relative group">
          {/* Animated node dot */}
          <div className="absolute -left-[33px] md:-left-[49px] top-4 w-4 h-4 rounded-full border-2 border-accent bg-surface group-hover:bg-accent group-hover:scale-125 transition-all duration-300 shadow-md">
            <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-white m-auto mt-[3px] transition-colors"></div>
          </div>
          
          <div className="bg-surface border border-border/70 p-6 rounded-xl hover:border-accent/60 card-lift transition-all duration-300 relative overflow-hidden group">
            {/* Subtle corner indicator */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500 pointer-events-none"></div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-accent font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
                0{idx + 1} // MILESTONE
              </span>
            </div>
            
            <h3 className="text-lg md:text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
              {node.title}
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              {node.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnicalJourney;
