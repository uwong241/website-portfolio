import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'accent';
}

export const Card = ({ children, className = '', variant = 'default' }: CardProps) => {
  return <div className={`border p-4 rounded ${className}`}>{children}</div>;
};

export default Card;
