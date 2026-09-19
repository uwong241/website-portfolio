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
        // Toggle shown so elements plunge in/out dynamically on scroll
        setShown(entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
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
        transitionDelay: shown ? `${delay}ms` : '0ms',
        transitionDuration: '650ms',
      }}
      className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) transform ${
        shown
          ? 'opacity-100 translate-y-0 filter blur-0 scale-100'
          : 'opacity-0 translate-y-16 filter blur-[1px] scale-[0.98]'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default StaggerReveal;
