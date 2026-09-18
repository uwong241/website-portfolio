import Section from '../components/ui/Section';
import Container from '../components/layout/Container';
import { HomelabTopology } from '../components/HomelabTopology';

export const HomelabSection = () => {
  return (
    <Section id="homelab" className="py-24 bg-surface">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">Infrastructure Architecture</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Homelab Topology</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Visual representation of my physical and virtual network architecture, routing layers, and secure remote access overlays.
            </p>
          </div>

          <HomelabTopology />
        </div>
      </Container>
    </Section>
  );
};

export default HomelabSection;
