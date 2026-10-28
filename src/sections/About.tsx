import { useState, useEffect } from 'react';
import Section from '../components/ui/Section';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import { PROFILE } from '../data/portfolioData';

interface Certificate {
  id: string;
  title: string;
  imageUrl: string;
}

export const About = () => {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const certificates: Certificate[] = [
    {
      id: 'cert-1',
      title: 'Belajar Dasar Cloud dan Gen AI di AWS',
      imageUrl: '/cert-aws-cloud.png',
    },
    {
      id: 'cert-2',
      title: 'Belajar Dasar Manajemen Proyek',
      imageUrl: '/cert-project-management.png',
    },
    {
      id: 'cert-3',
      title: 'Spec-Driven Development dengan Kiro',
      imageUrl: '/cert-spec-driven-dev.png',
    },
  ];

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
                <div className="absolute -inset-1.5 bg-gradient-to-r from-accent to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-border shadow-xl bg-surface card-lift">
                  <img
                    src="/profile.jpeg"
                    alt={PROFILE.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
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
                I am <strong className="text-primary">{PROFILE.name}</strong>, a passionate <strong className="text-accent">self-taught learner</strong> and vocational high school (SMK) student majoring in <strong className="text-accent font-semibold">Computer Network Engineering (TKJ)</strong>.
              </p>
              <p>
                My journey into the world of Information Technology began back in the <strong className="text-primary">9th grade</strong>. Driven by relentless curiosity, I immersed myself in operating systems, networking fundamentals, and computer hardware.
              </p>
              <p>
                Rather than solely studying textbook theory, I actively build, maintain, and troubleshoot physical and virtualized homelab environments: configuring dual-node Proxmox VE clusters, routing with MikroTik CHR, low-power Armbian server deployments, centralized OpenMediaVault (NFS) storage, and local AI inference pipelines.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-secondary">
                <span className="px-3 py-1 rounded-md bg-surface border border-border">💡 Self-Taught Since 9th Grade</span>
                <span className="px-3 py-1 rounded-md bg-surface border border-border">🎒 SMK Student (TKJ Major)</span>
                <span className="px-3 py-1 rounded-md bg-surface border border-border">🐧 Linux & Homelab</span>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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

          {/* Simple Pure PNG Certificate Gallery */}
          <div className="border-t border-border/80 pt-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-accent text-xs font-mono tracking-wider uppercase font-semibold block mb-1">
                  // CERTIFICATIONS
                </span>
                <h3 className="text-2xl font-bold text-primary tracking-tight">Certificates</h3>
              </div>
              <span className="text-xs font-mono text-secondary hidden sm:inline-block">Click certificate image to zoom 🔍</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setActiveCert(cert)}
                  className="group relative rounded-2xl overflow-hidden border border-border/80 bg-surface cursor-pointer card-lift shadow-xl hover:border-accent/80 transition-all duration-500"
                >
                  <div className="relative aspect-[1.414/1] bg-slate-950 overflow-hidden flex items-center justify-center p-1.5">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 active:scale-95 transition-transform duration-700 ease-out rounded"
                      loading="lazy"
                    />
                    
                    {/* Slow Blur Hover Hint */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-2 text-white font-mono text-xs backdrop-blur-sm">
                      <span className="p-2.5 rounded-full bg-accent text-slate-950 font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-500">🔍</span>
                      <span className="tracking-wider font-semibold">Slow Zoom</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Slow Easing Smooth Zoom Modal */}
      {activeCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md transition-all duration-700 ease-out animate-in fade-in"
          onClick={() => setActiveCert(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-surface border border-border/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform scale-100 animate-in zoom-in-90"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-subtle/60">
              <span className="text-xs sm:text-sm font-mono font-bold text-primary">{activeCert.title}</span>
              <button
                onClick={() => setActiveCert(null)}
                className="p-1.5 text-secondary hover:text-primary rounded-md hover:bg-surface border border-border/80 text-xs font-mono transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Certificate PNG Image Display with Smooth Scale */}
            <div className="flex-grow p-4 sm:p-8 bg-black/80 overflow-auto flex items-center justify-center min-h-[420px]">
              <img
                src={activeCert.imageUrl}
                alt={activeCert.title}
                className="max-w-full max-h-[78vh] object-contain rounded-xl border border-border/60 shadow-2xl transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 cursor-zoom-in"
              />
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default About;
