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
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12">Hands-on infrastructure & systems engineering</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
            {/* Profile Photo */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group">
                {/* Subtle outer glow on dark mode */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-accent to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-border shadow-xl bg-surface card-lift">
                  <img
                    src="/profile.jpeg"
                    alt={PROFILE.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Bottom badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-10 text-white">
                    <p className="font-mono text-sm font-bold">{PROFILE.name}</p>
                    <p className="text-xs text-white/80 font-mono">Self-Taught · TKJ Student</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Story */}
            <div className="md:col-span-8 prose prose-lg text-secondary space-y-5 leading-relaxed">
              <p>
                I am <strong className="text-primary">{PROFILE.name}</strong>, a passionate <strong className="text-accent">self-taught learner</strong> and graduate of <strong className="text-primary">SMP Al-Ikhlash Lumajang (15th Batch, Class of 2026)</strong>, currently pursuing formal vocational education at <strong className="text-primary">SMK Muhammadiyah 2 Kota Malang</strong> majoring in <strong className="text-accent font-semibold">Computer Network Engineering (TKJ)</strong>.
              </p>
              <p>
                My journey into the world of Information Technology began back in the <strong className="text-primary">9th grade (3rd year of junior high school)</strong>. Driven by relentless self-study and curiosity, I immersed myself in operating systems, networking fundamentals, and computer hardware.
              </p>
              <p>
                Rather than solely studying textbook theory, I actively build, maintain, and troubleshoot physical and virtualized homelab environments: configuring dual-node Proxmox VE clusters, routing with MikroTik CHR, low-power Armbian server deployments, centralized OpenMediaVault (NFS) storage, and local AI inference pipelines.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-secondary">
                <span className="px-3 py-1 rounded-md bg-surface border border-border">📍 Malang, East Java</span>
                <span className="px-3 py-1 rounded-md bg-surface border border-border">💡 Self-Taught Since 9th Grade</span>
                <span className="px-3 py-1 rounded-md bg-surface border border-border">🎓 SMP Al-Ikhlash Lumajang (2026)</span>
                <span className="px-3 py-1 rounded-md bg-surface border border-border">🏫 SMK Muhammadiyah 2 Malang (TKJ)</span>
                <span className="px-3 py-1 rounded-md bg-surface border border-border">🐧 Linux & Homelab</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border border-border/60 bg-surface">
              <h3 className="text-lg font-bold text-primary mb-2">Linux & Systems</h3>
              <p className="text-secondary text-sm leading-relaxed">Deep familiarity with kernel troubleshooting, systemd administration, and multi-distro environments (Arch, Debian, NixOS).</p>
            </Card>
            <Card className="p-6 border border-border/60 bg-surface">
              <h3 className="text-lg font-bold text-primary mb-2">Networking & Routing</h3>
              <p className="text-secondary text-sm leading-relaxed">Configuring VLANs, MikroTik CHR, TCP/IP routing, NAT, and Tailscale encrypted subnet overlays.</p>
            </Card>
            <Card className="p-6 border border-border/60 bg-surface">
              <h3 className="text-lg font-bold text-primary mb-2">Virtualization & Storage</h3>
              <p className="text-secondary text-sm leading-relaxed">Proxmox VE production/lab nodes, KVM/LXC containers, and OpenMediaVault NFS storage backends.</p>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
