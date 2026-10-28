import { useState, useEffect } from 'react';
import Section from '../components/ui/Section';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import { PROFILE } from '../data/portfolioData';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  credentialId: string;
  verifyUrl: string;
  badgeColor: string;
  imageUrl: string;
  pdfUrl: string;
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
      issuer: 'Dicoding Indonesia × AWS',
      issuedDate: '27 Oktober 2026',
      credentialId: 'ERZR7YERNZYV',
      verifyUrl: 'https://dicoding.com/certificates/ERZR7YERNZYV',
      badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-400',
      imageUrl: '/cert-aws-cloud.svg',
      pdfUrl: '/cert-aws-cloud.pdf',
    },
    {
      id: 'cert-2',
      title: 'Belajar Dasar Manajemen Proyek',
      issuer: 'Dicoding Indonesia',
      issuedDate: '29 Maret 2026',
      credentialId: 'ERZRLKVVQZYV',
      verifyUrl: 'https://dicoding.com/certificates/ERZRLKVVQZYV',
      badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
      imageUrl: '/cert-project-management.svg',
      pdfUrl: '/cert-project-management.pdf',
    },
    {
      id: 'cert-3',
      title: 'Spec-Driven Development dengan Kiro',
      issuer: 'Dicoding Indonesia',
      issuedDate: '25 Juni 2026',
      credentialId: '1RXYD2LV3XVM',
      verifyUrl: 'https://dicoding.com/certificates/1RXYD2LV3XVM',
      badgeColor: 'border-purple-500/40 bg-purple-500/10 text-purple-400',
      imageUrl: '/cert-spec-driven-dev.svg',
      pdfUrl: '/cert-spec-driven-dev.pdf',
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

          {/* Pure Certificate Image Cards Gallery */}
          <div className="border-t border-border/80 pt-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-accent text-xs font-mono tracking-wider uppercase font-semibold block mb-1">
                  // CERTIFICATIONS
                </span>
                <h3 className="text-2xl font-bold text-primary tracking-tight">Verified Certificates</h3>
              </div>
              <span className="text-xs font-mono text-secondary hidden sm:inline-block">Click certificate image to zoom 🔍</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setActiveCert(cert)}
                  className="group relative rounded-2xl overflow-hidden border border-border/80 bg-surface cursor-pointer card-lift shadow-xl hover:border-accent/80 transition-all duration-300"
                >
                  {/* Clean Certificate Image Thumbnail */}
                  <div className="relative aspect-[1.414/1] bg-slate-950 overflow-hidden flex items-center justify-center p-2">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 filter drop-shadow-md"
                      loading="lazy"
                    />
                    
                    {/* Hover Zoom Hint */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-mono text-xs backdrop-blur-sm">
                      <span className="p-2 rounded-full bg-accent text-slate-950 font-bold text-sm">🔍</span>
                      <span>Zoom Image</span>
                    </div>
                  </div>

                  {/* Title Bar */}
                  <div className="p-3.5 bg-surface-subtle/50 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary group-hover:text-accent transition-colors line-clamp-1 font-mono">
                      {cert.title}
                    </span>
                    <span className="text-xs text-accent group-hover:translate-x-0.5 transition-transform">➔</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Interactive Modal Pure Certificate Image Zoom */}
      {activeCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveCert(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-surface-subtle/60">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-primary">{activeCert.title}</h4>
                  <p className="text-[11px] text-secondary font-mono">{activeCert.issuer} · ID: {activeCert.credentialId}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline bg-accent/10 px-3 py-1 rounded-md border border-accent/30"
                >
                  Verify Online ↗
                </a>
                <button
                  onClick={() => setActiveCert(null)}
                  className="p-1.5 text-secondary hover:text-primary rounded-md hover:bg-surface border border-border/80 text-xs font-mono transition-colors"
                  aria-label="Close Zoom"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Certificate Image Preview */}
            <div className="flex-grow p-4 sm:p-8 bg-black/60 overflow-auto flex items-center justify-center min-h-[420px]">
              <img
                src={activeCert.imageUrl}
                alt={activeCert.title}
                className="max-w-full max-h-[72vh] object-contain rounded-xl border border-border/60 shadow-2xl"
              />
            </div>

            {/* Modal Footer Actions */}
            <div className="px-5 py-3 border-t border-border bg-surface-subtle/50 flex items-center justify-between text-xs font-mono text-secondary">
              <span>Issued: {activeCert.issuedDate}</span>
              <a
                href={activeCert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline flex items-center gap-1"
              >
                <span>View Full PDF</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default About;
