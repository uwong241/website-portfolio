import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rows?: number;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, rows, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block text-sm mb-1">{label}</label>}
        <input
          ref={ref}
          className={`w-full p-2 border rounded ${className}`}
          {...props}
        />
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';
export default Input;
