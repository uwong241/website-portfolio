import Section from '../components/ui/Section';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import { PROFILE } from '../data/portfolioData';

export const About = () => {
  return (
    <Section id="about" className="py-24 bg-background-light border-y border-border/60">
      <Container>
        <div className="max-w-5xl mx-auto">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12">Hands-on infrastructure & systems engineering.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
            {/* Profile Photo */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group">
                {/* Subtle outer glow on dark mode */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-accent to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-border shadow-xl bg-surface">
                  <img
                    src="/profile.jpeg"
                    alt={PROFILE.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Bottom badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-10 text-white">
                    <p className="font-mono text-sm font-bold">{PROFILE.name}</p>
                    <p className="text-xs text-white/80 font-mono">Vocational Student · Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Story */}
            <div className="md:col-span-8 prose prose-lg text-secondary space-y-5 leading-relaxed">
              <p>
                I am <strong className="text-primary">{PROFILE.name}</strong>, a vocational high school (SMK) student from Indonesia with a deep passion for Linux systems, networking, virtualization, and infrastructure engineering.
              </p>
              <p>
                Rather than relying solely on theoretical study, I maintain a physical and virtualized homelab where I configure routers, deploy Proxmox clusters, manage NFS storage, and experiment with local AI inference pipelines. My focus is on building robust systems from scratch and understanding how every layer interacts.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-secondary">
                <span className="px-3 py-1 rounded-md bg-surface border border-border">📍 Malang, East Java</span>
                <span className="px-3 py-1 rounded-md bg-surface border border-border">🖥️ Linux Enthusiast</span>
                <span className="px-3 py-1 rounded-md bg-surface border border-border">🌐 Network & Homelab</span>
              </div>
            </div>
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
