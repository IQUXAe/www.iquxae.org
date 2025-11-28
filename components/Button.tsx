import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'text';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  href, 
  onClick, 
  className = '', 
  variant = 'primary' 
}) => {
  
  const createRipple = (event: MouseEvent<HTMLElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple-effect');

    // Remove existing ripples to keep DOM clean
    const ripple = button.getElementsByClassName('ripple-effect')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    createRipple(e);
    if (onClick) onClick(e);
  };

  // Base styles
  const baseStyles = "ripple-container inline-flex items-center justify-center font-normal uppercase tracking-wide transition-all duration-200 ease-in-out cursor-pointer relative overflow-hidden select-none";
  const sizeStyles = "px-[30px] py-[12px] text-[0.75rem] rounded-[45px]";
  
  // Variant styles
  let variantStyles = "";
  if (variant === 'primary') {
    variantStyles = "bg-white text-primary shadow-sm hover:bg-gray-50 hover:shadow-md dark:bg-card-bg-dark dark:text-primary dark:hover:bg-[#323844]";
  } else if (variant === 'outline') {
    variantStyles = "border border-primary text-primary hover:bg-primary/5 dark:border-primary dark:text-primary";
  } else if (variant === 'text') {
    variantStyles = "text-primary hover:bg-primary/10 bg-transparent";
  }

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onMouseDown={createRipple}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} onMouseDown={createRipple}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onMouseDown={handleClick}>
      {children}
    </button>
  );
};

export default Button;