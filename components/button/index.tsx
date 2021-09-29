import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ className, primary, secondary, ...props }) => {
  return (
    <button
      className={`h-10 rounded-lg m-1 px-4
    focus:ring-4 focus:ring-blue-700 focus:outline-none
    ${primary ? 'bg-white' : secondary ? 'bg-black-800 text-white' : 'bg-white'}
    ${className}`}
      {...props}
    />
  );
};

export default Button;
