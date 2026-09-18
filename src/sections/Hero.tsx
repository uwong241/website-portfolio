import { useTheme } from '../hooks/use-theme';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import { PROFILE } from '../data/portfolioData';

export const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
      
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface/80 text-xs font-mono text-secondary mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {PROFILE.status}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            {PROFILE.name}
            <span className="block mt-2 bg-gradient-to-r from-accent via-blue-500 to-indigo-500 bg-clip-text text-transparent text-3xl sm:text-5xl">
              {PROFILE.tagline}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
            {PROFILE.bio}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects →
            </Button>
            <Button size="lg" variant="secondary" onClick={() => document.getElementById('homelab')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Homelab
            </Button>
            <Button size="lg" variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-secondary font-mono">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              GitHub ↗
            </a>
            <span>•</span>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              LinkedIn ↗
            </a>
            <span>•</span>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-accent transition-colors">
              Email ✉
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
