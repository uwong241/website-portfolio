import Section from '../components/ui/Section';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import StaggerReveal from '../components/ui/StaggerReveal';
import { PROJECTS } from '../data/portfolioData';

export const Projects = () => {
  return (
    <Section id="projects" className="py-24 bg-background-light border-y border-border/60">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">Homelab & Systems</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Real-world systems built, configured, and troubleshot in a physical and virtualized homelab environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.map((p, idx) => (
              <StaggerReveal key={idx} delay={idx * 120} className="h-full">
                <Card className="p-8 border border-border/80 bg-surface flex flex-col justify-between group hover:border-accent/60 h-full">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs px-3 py-1 bg-accent/10 text-accent font-mono font-semibold rounded-full">
                        Project 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-secondary mb-6 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="space-y-3 mb-6 bg-background-light p-4 rounded-lg border border-border/60">
                      <p className="text-xs font-mono uppercase text-secondary tracking-wider font-semibold">Key Highlights:</p>
                      <ul className="space-y-1.5">
                        {p.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="text-sm flex items-center text-primary">
                            <span className="text-accent mr-2">▪</span> {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {p.problemsSolved && p.problemsSolved.length > 0 && (
                      <div className="mb-6">
                        <p className="text-xs font-mono uppercase text-secondary tracking-wider font-semibold mb-2">Troubleshooting & Solved Problems:</p>
                        <ul className="space-y-1">
                          {p.problemsSolved.map((prob, pIdx) => (
                            <li key={pIdx} className="text-xs text-secondary flex items-start">
                              <span className="text-emerald-500 mr-2">✓</span> {prob}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="text-xs px-2.5 py-1 bg-background-light border border-border rounded font-mono text-secondary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </StaggerReveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
