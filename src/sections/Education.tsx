import Section from '../components/ui/Section';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';

export const Education = () => {
  return (
    <Section id="education" className="py-24 bg-surface">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">Background & Learning</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Education & Status</h2>
          </div>

          <Card className="p-8 border border-border/80 bg-background-light">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-6 border-b border-border">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-1">Vocational High School (SMK) Student</h3>
                <p className="text-accent font-mono text-sm">Indonesia</p>
              </div>
              <span className="mt-2 md:mt-0 text-xs px-3 py-1 bg-accent/10 text-accent font-mono font-semibold rounded-full w-fit">
                Active Student
              </span>
            </div>

            <div className="space-y-4 text-secondary leading-relaxed">
              <p>
                As a vocational student, my curriculum is complemented by rigorous self-directed learning, hands-on homelab experimentation, and real-world troubleshooting.
              </p>
              <p>
                My education focuses heavily on practical engineering: configuring real network hardware, deploying multi-node virtualization clusters, hardening Linux servers, and exploring local AI infrastructure.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Education;
