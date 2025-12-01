import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  loading?: boolean;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  loading = false,
  className = '',
  disabled,
  ...props 
}: ButtonProps) {
  const baseClasses = "font-unbounded font-bold uppercase tracking-wide transition-all duration-200 ease-out border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-black";
  
  const variants = {
    primary: "bg-primary-red border-primary-red text-white hover:bg-secondary-red hover:border-secondary-red hover:scale-102 disabled:bg-dark-gray disabled:border-dark-gray disabled:cursor-not-allowed",
    secondary: "bg-transparent border-white text-white hover:bg-white hover:text-primary-black hover:scale-102 disabled:border-dark-gray disabled:text-dark-gray disabled:cursor-not-allowed"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          NAČÍTÁNÍ...
        </div>
      ) : children}
    </button>
  );
}
