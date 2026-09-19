import { useEffect, useRef, useState, ReactNode } from 'react';

interface StaggerRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const StaggerReveal = ({ children, delay = 0, className = '' }: StaggerRevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: '800ms',
      }}
      className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) transform ${
        shown
          ? 'opacity-100 translate-y-0 filter blur-0'
          : 'opacity-0 translate-y-12 filter blur-[1px]'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default StaggerReveal;
