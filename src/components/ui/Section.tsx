import { ReactNode, useEffect, useRef, useState } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = '', id }: SectionProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`scroll-mt-16 transition-all duration-1000 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 filter blur-0 scale-100'
          : 'opacity-0 translate-y-16 filter blur-[2px] scale-[0.98]'
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
