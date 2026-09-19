import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'accent';
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`border rounded-xl transition-all duration-300 card-lift ${className}`}>
      {children}
    </div>
  );
};

export default Card;
