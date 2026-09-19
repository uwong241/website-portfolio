import Container from './Container';
import { useTheme } from '../../hooks/use-theme';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

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
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border bg-surface text-primary hover:bg-surface-subtle transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'dark' ? (
                /* Sun Icon for Dark Mode (Switch to Light) */
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                /* Moon Icon for Light Mode (Switch to Dark) */
                <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <a 
              href="#contact" 
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
