import Container from './Container';

export const Header = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-surface/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <Container>
        <div className="flex items-center justify-between h-16">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-bold tracking-tight text-primary font-mono flex items-center gap-2">
            <span>Ahmad Daffa Arief</span>
            <span className="text-accent font-semibold">~/infra</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-6 text-sm text-secondary font-mono">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-primary transition-colors">about</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-primary transition-colors">skills</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-primary transition-colors">projects</a>
            <a href="#homelab" onClick={(e) => handleNavClick(e, 'homelab')} className="hover:text-primary transition-colors">homelab</a>
            <a href="#journey" onClick={(e) => handleNavClick(e, 'journey')} className="hover:text-primary transition-colors">journey</a>
            <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="hover:text-primary transition-colors">education</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-accent transition-colors">contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-xs font-mono px-3.5 py-2 rounded-lg bg-accent text-white hover:bg-blue-600 transition-colors shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
