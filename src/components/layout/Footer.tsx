import Container from './Container';

export const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border py-12 text-secondary text-sm">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-mono text-primary font-semibold">Ahmad Daffa Arief</p>
            <p className="text-xs text-secondary mt-1">Linux, Infrastructure & Cybersecurity Enthusiast</p>
          </div>

          <div className="flex items-center space-x-6 text-xs font-mono">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#homelab" className="hover:text-primary transition-colors">Homelab</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <p className="text-xs text-secondary font-mono">
            © {new Date().getFullYear()} Ahmad Daffa Arief. Built with React & Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
