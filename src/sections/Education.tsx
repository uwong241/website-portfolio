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
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Education & Academic Journey</h2>
            <p className="text-secondary max-w-xl mx-auto text-sm">
              Formal academic milestones and practical engineering specializations.
            </p>
          </div>

          <div className="space-y-6">
            {/* SMK Muhammadiyah 2 Kota Malang */}
            <Card className="p-8 border border-border/80 bg-background-light">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 pb-4 border-b border-border">
                <div>
                  <span className="text-xs font-mono text-accent uppercase font-bold tracking-wider">Vocational High School</span>
                  <h3 className="text-2xl font-bold text-primary mt-1">SMK Muhammadiyah 2 Kota Malang</h3>
                  <p className="text-secondary font-mono text-sm mt-0.5">Major: Computer Network Engineering (TKJ)</p>
                </div>
                <span className="mt-2 md:mt-0 text-xs px-3 py-1 bg-emerald-500/10 text-emerald-500 font-mono font-semibold rounded-full w-fit border border-emerald-500/30">
                  Active Student
                </span>
              </div>
              <p className="text-secondary text-sm leading-relaxed">
                Core curriculum focuses on enterprise network architecture, Linux server administration, network hardware configuration (MikroTik, Managed Switches, Routers), and practical IT infrastructure implementation.
              </p>
            </Card>

            {/* SMP Al-Ikhlash Lumajang */}
            <Card className="p-8 border border-border/80 bg-background-light">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 pb-4 border-b border-border">
                <div>
                  <span className="text-xs font-mono text-secondary uppercase font-bold tracking-wider">Junior High School</span>
                  <h3 className="text-2xl font-bold text-primary mt-1">SMP Al-Ikhlash Lumajang</h3>
                  <p className="text-secondary font-mono text-sm mt-0.5">15th Batch · Graduated Class of 2026</p>
                </div>
                <span className="mt-2 md:mt-0 text-xs px-3 py-1 bg-surface border border-border text-secondary font-mono font-semibold rounded-full w-fit">
                  Graduated (2026)
                </span>
              </div>
              <p className="text-secondary text-sm leading-relaxed">
                Completed secondary education with a rigorous academic and leadership foundation before proceeding into specialized vocational technical studies.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Education;
