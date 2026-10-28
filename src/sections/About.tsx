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
  validUntil: string;
  credentialId: string;
  verifyUrl: string;
  badgeColor: string;
  description: string;
  skills: string[];
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
      validUntil: '27 Oktober 2029',
      credentialId: 'ERZR7YERNZYV',
      verifyUrl: 'https://dicoding.com/certificates/ERZR7YERNZYV',
      badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-400',
      description: 'Kompetensi cloud computing standar AWS: Amazon EC2, VPC Networking, S3/EBS storage, IAM security, monitoring CloudWatch, dan fondasi Generative AI.',
      skills: ['AWS Cloud', 'Amazon EC2', 'VPC Networking', 'IAM Security', 'Gen AI Basics'],
      pdfUrl: '/cert-aws-cloud.pdf',
    },
    {
      id: 'cert-2',
      title: 'Belajar Dasar Manajemen Proyek',
      issuer: 'Dicoding Indonesia',
      issuedDate: '29 Maret 2026',
      validUntil: '29 Maret 2029',
      credentialId: 'ERZRLKVVQZYV',
      verifyUrl: 'https://dicoding.com/certificates/ERZRLKVVQZYV',
      badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
      description: 'Pondasi manajemen proyek terstruktur: fase siklus inisiasi hingga penutupan proyek, metodologi Waterfall vs Agile, Lean, dan kolaborasi tim lintas fungsi.',
      skills: ['Project Lifecycle', 'Agile & Waterfall', 'Lean Methodology', 'Risk Management'],
      pdfUrl: '/cert-project-management.pdf',
    },
    {
      id: 'cert-3',
      title: 'Spec-Driven Development dengan Kiro',
      issuer: 'Dicoding Indonesia',
      issuedDate: '25 Juni 2026',
      validUntil: '25 Juni 2029',
      credentialId: '1RXYD2LV3XVM',
      verifyUrl: 'https://dicoding.com/certificates/1RXYD2LV3XVM',
      badgeColor: 'border-purple-500/40 bg-purple-500/10 text-purple-400',
      description: 'Penerapan siklus Spec-Driven Development (Requirements, Design, hingga Task Implementation) menggunakan Kiro untuk workflow AI-assisted terstandar profesional.',
      skills: ['Spec-Driven Dev', 'Kiro AI Tooling', 'Prompt Engineering for SDD', 'Code Quality & Review'],
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

          {/* Verified Certification Collection */}
          <div className="border-t border-border/80 pt-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-accent text-xs font-mono tracking-wider uppercase font-semibold block mb-1">
                  // VERIFIED CREDENTIALS
                </span>
                <h3 className="text-2xl font-bold text-primary tracking-tight">Certificates & Accreditations</h3>
              </div>
              <span className="text-xs font-mono text-secondary hidden sm:inline-block">Click to preview & zoom 🔍</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setActiveCert(cert)}
                  className="bento-card p-5 rounded-2xl cursor-pointer group flex flex-col justify-between hover:border-accent/80 hover:scale-[1.02] transition-all duration-300 shadow-lg relative overflow-hidden"
                >
                  <div>
                    {/* Header Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${cert.badgeColor}`}>
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-secondary/70 group-hover:text-accent transition-colors font-mono">
                        Zoom 🔍
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-primary mb-2 group-hover:text-accent transition-colors leading-snug">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-secondary leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded bg-surface border border-border/70 text-secondary font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-secondary">
                    <span>ID: {cert.credentialId}</span>
                    <span className="text-accent group-hover:underline">View Certificate ➔</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Interactive Modal Zoom with Backdrop Blur */}
      {activeCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveCert(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface-subtle/50">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-primary">{activeCert.title}</h4>
                  <p className="text-xs text-secondary font-mono">Issuer: {activeCert.issuer} · Credential ID: {activeCert.credentialId}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline bg-accent/10 px-3 py-1.5 rounded-lg border border-accent/30"
                >
                  Verify Online ↗
                </a>
                <button
                  onClick={() => setActiveCert(null)}
                  className="p-1.5 text-secondary hover:text-primary rounded-lg hover:bg-surface border border-border/80 text-sm font-mono transition-colors"
                  aria-label="Close Preview"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal PDF Viewer / Zoom Body */}
            <div className="flex-grow p-4 bg-black/40 overflow-hidden flex items-center justify-center min-h-[460px]">
              <iframe
                src={`${activeCert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                title={activeCert.title}
                className="w-full h-[65vh] rounded-xl border border-border shadow-inner bg-slate-900"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-border bg-surface-subtle/40 flex items-center justify-between text-xs font-mono text-secondary">
              <span>Valid until: {activeCert.validUntil}</span>
              <a
                href={activeCert.pdfUrl}
                download
                className="text-primary hover:text-accent flex items-center gap-1 transition-colors"
              >
                <span>Download PDF</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default About;
