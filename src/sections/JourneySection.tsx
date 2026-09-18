import Section from '../components/ui/Section';
import Container from '../components/layout/Container';
import { TechnicalJourney } from '../components/TechnicalJourney';

export const JourneySection = () => {
  return (
    <Section id="journey" className="py-24 bg-background-light border-y border-border/60">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">Evolution</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Technical Journey</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              How my interests and competencies evolved from foundational Linux CLI to advanced clustering, routing, and local AI infrastructure.
            </p>
          </div>

          <TechnicalJourney />
        </div>
      </Container>
    </Section>
  );
};

export default JourneySection;
