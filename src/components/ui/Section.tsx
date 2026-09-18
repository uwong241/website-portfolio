import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = '', id }: SectionProps) => {
  return <section id={id} className={`py-12 ${className}`}>{children}</section>;
};

export default Section;
