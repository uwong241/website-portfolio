import Section from '../components/ui/Section';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import { PROFILE } from '../data/portfolioData';

export const About = () => {
  return (
    <Section id="about" className="py-24 bg-background-light border-y border-border/60">
      <Container>
        <div className="max-w-4xl mx-auto">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">Hands-on infrastructure & systems engineering.</h2>
          
          <div className="prose prose-lg text-secondary space-y-6 leading-relaxed mb-12">
            <p>
              I am <strong className="text-primary">{PROFILE.name}</strong>, a vocational high school (SMK) student from Indonesia with a deep passion for Linux systems, networking, virtualization, and infrastructure engineering.
            </p>
            <p>
              Rather than relying solely on theoretical study, I maintain a physical and virtualized homelab where I configure routers, deploy Proxmox clusters, manage NFS storage, and experiment with local AI inference pipelines. My focus is on building robust systems from scratch and understanding how every layer interacts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border border-border/60 bg-surface">
              <h3 className="text-lg font-bold text-primary mb-2">Linux & Systems</h3>
              <p className="text-secondary text-sm leading-relaxed">Deep familiarity with kernel troubleshooting, systemd administration, and multi-distro environments.</p>
            </Card>
            <Card className="p-6 border border-border/60 bg-surface">
              <h3 className="text-lg font-bold text-primary mb-2">Networking & Routing</h3>
              <p className="text-secondary text-sm leading-relaxed">Configuring VLANs, MikroTik CHR, TCP/IP routing, NAT, and Tailscale subnet overlays.</p>
            </Card>
            <Card className="p-6 border border-border/60 bg-surface">
              <h3 className="text-lg font-bold text-primary mb-2">Virtualization</h3>
              <p className="text-secondary text-sm leading-relaxed">Proxmox VE clusters, KVM/LXC containers, quorum maintenance, and NFS storage backends.</p>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
