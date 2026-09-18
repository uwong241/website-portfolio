import Section from '../components/ui/Section';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills = () => {
  return (
    <Section id="skills" className="py-24 bg-surface">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">Technical Competencies</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Skills & Capabilities</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Focused on foundational systems engineering, network administration, and hands-on infrastructure tooling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <Card key={idx} className="p-6 border border-border/80 bg-background-light flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-border">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
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
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
