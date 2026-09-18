import Section from '../components/ui/Section';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import { experiences } from '../data/experience';

export const Experience = () => {
  return (
    <Section id="experience" className="py-24 bg-surface/30">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">Career Journey</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Professional Experience</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <Card key={idx} className="p-8 border border-border/60 hover:border-accent/40 transition-smooth">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.company} <span className="text-secondary font-normal">• {exp.location}</span></p>
                  </div>
                  <span className="text-sm font-mono text-secondary mt-2 md:mt-0 px-3 py-1 bg-background-light border border-border rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>

                <p className="text-secondary mb-6 leading-relaxed">{exp.description}</p>

                <div className="space-y-2">
                  <p className="text-xs uppercase font-semibold text-secondary">Key Contributions:</p>
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="text-sm flex items-start text-primary">
                      <span className="text-accent mr-2 mt-0.5">✦</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Experience;
