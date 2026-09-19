import { useState, useEffect } from 'react';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import { PROFILE } from '../data/portfolioData';

export const Hero = () => {
  // Typing animation for subtitle
  const words = ['Homelab Architect', 'Linux Enthusiast', 'Network Explorer', 'Proxmox Operator'];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIdx];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setSubText(fullWord.substring(0, subText.length + 1));
        if (subText === fullWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setSubText(fullWord.substring(0, subText.length - 1));
        if (subText === '') {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subText, isDeleting, currentWordIdx]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-24">
      {/* Dynamic Aura Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-accent/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>

      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Status Badge with Glowing Ping */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur-md text-xs font-mono text-secondary mb-8 shadow-sm hover:border-accent/40 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PROFILE.status}</span>
          </div>

          {/* Heading with Animated Shimmer Gradient */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            <span className="block text-primary hover:tracking-wide transition-all duration-300">
              {PROFILE.name}
            </span>
            <span className="block mt-2 text-2xl sm:text-4xl md:text-5xl font-mono text-accent h-[48px] sm:h-[60px] flex items-center justify-center">
              <span>&gt; {subText}</span>
              <span className="w-2.5 h-6 sm:h-8 bg-accent ml-1.5 inline-block animate-pulse"></span>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
            {PROFILE.bio}
          </p>

          {/* Call to Actions with refined button motion */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-accent/20"
            >
              View Projects →
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => document.getElementById('homelab')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Explore Homelab
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links with hover translate */}
          <div className="mt-14 flex items-center justify-center gap-6 text-sm text-secondary font-mono">
            <a 
              href={PROFILE.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent hover:-translate-y-0.5 transition-all inline-flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>
            <span className="text-border">•</span>
            <a 
              href={PROFILE.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent hover:-translate-y-0.5 transition-all inline-flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <span className="text-xs">↗</span>
            </a>
            <span className="text-border">•</span>
            <a 
              href={`mailto:${PROFILE.email}`} 
              className="hover:text-accent hover:-translate-y-0.5 transition-all inline-flex items-center gap-1.5"
            >
              <span>Email</span>
              <span className="text-xs">✉</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
