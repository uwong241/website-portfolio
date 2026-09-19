import Section from '../components/ui/Section';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import StaggerReveal from '../components/ui/StaggerReveal';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Helper function to return dynamic color based on percentage
const getMetricColor = (val: number) => {
  if (val >= 80) return { text: 'text-emerald-500', bar: 'bg-emerald-500' };
  if (val >= 60) return { text: 'text-cyan-500', bar: 'bg-cyan-500' };
  if (val >= 40) return { text: 'text-amber-500', bar: 'bg-amber-500' };
  if (val >= 20) return { text: 'text-orange-500', bar: 'bg-orange-500' };
  return { text: 'text-rose-500', bar: 'bg-rose-500' };
};

export const Skills = () => {
  return (
    <Section id="skills" className="py-24 bg-surface">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">Technical Competencies</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Skills & Capabilities</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Focused on foundational systems engineering, network administration, and hands-on infrastructure tooling with dynamic skill metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const progressTheme = cat.learningProgress !== undefined ? getMetricColor(cat.learningProgress) : null;
              const focusTheme = cat.learningFocus !== undefined ? getMetricColor(cat.learningFocus) : null;

              return (
                <StaggerReveal key={idx} delay={idx * 100} className="h-full">
                  <Card className="p-6 border border-border/80 bg-background-light flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-border">
                        <h3 className="text-base font-bold text-primary">
                          {cat.category}
                        </h3>
                      </div>

                      {/* Skills Tag Pills First */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {cat.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="text-xs px-2.5 py-1 bg-surface border border-border/70 rounded-md font-mono text-secondary hover:border-accent hover:text-primary transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dynamic Color Progress & Focus Metrics Bar at the Bottom */}
                    {(cat.learningProgress !== undefined || cat.learningFocus !== undefined) && (
                      <div className="mt-auto pt-4 border-t border-border/60">
                        <div className="p-3 rounded-lg bg-surface/60 border border-border/60 space-y-2.5 font-mono text-xs">
                          {cat.learningProgress !== undefined && progressTheme && (
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-secondary text-[11px]">learning progress</span>
                                <span className={`${progressTheme.text} font-semibold`}>{cat.learningProgress}%</span>
                              </div>
                              <div className="w-full bg-border/60 h-1.5 rounded-full overflow-hidden">
                                <div 
                                  className={`${progressTheme.bar} h-full rounded-full transition-all duration-500`} 
                                  style={{ width: `${cat.learningProgress}%` }}
                                />
                              </div>
                            </div>
                          )}

                          {cat.learningFocus !== undefined && focusTheme && (
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-secondary text-[11px]">learning focus</span>
                                <span className={`${focusTheme.text} font-semibold`}>{cat.learningFocus}%</span>
                              </div>
                              <div className="w-full bg-border/60 h-1.5 rounded-full overflow-hidden">
                                <div 
                                  className={`${focusTheme.bar} h-full rounded-full transition-all duration-500`} 
                                  style={{ width: `${cat.learningFocus}%` }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </Card>
                </StaggerReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
