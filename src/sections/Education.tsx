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
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Academic Focus & Specialization</h2>
            <p className="text-secondary max-w-xl mx-auto text-sm">
              Hands-on vocational curriculum combined with self-directed engineering.
            </p>
          </div>

          <Card className="p-8 border border-border/80 bg-background-light">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 pb-4 border-b border-border">
              <div>
                <span className="text-xs font-mono text-accent uppercase font-bold tracking-wider">Vocational High School (SMK)</span>
                <h3 className="text-2xl font-bold text-primary mt-1">Computer Network Engineering</h3>
                <p className="text-secondary font-mono text-sm mt-0.5">Teknik Komputer & Jaringan (TKJ)</p>
              </div>
              <span className="mt-2 md:mt-0 text-xs px-3 py-1 bg-emerald-500/10 text-emerald-500 font-mono font-semibold rounded-full w-fit border border-emerald-500/30">
                Active Student
              </span>
            </div>
            <p className="text-secondary text-sm leading-relaxed">
              Core curriculum and practical training focus on enterprise network architecture, Linux server administration, network hardware configuration (MikroTik, Managed Switches, Routers), and hands-on IT infrastructure implementation.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Education;
