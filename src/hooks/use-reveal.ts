import { useEffect, useState } from 'react';

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
}

const useReveal = (options: RevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    const element = document.currentScript?.closest('[data-reveal]');
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return isVisible;
};

export default useReveal;
