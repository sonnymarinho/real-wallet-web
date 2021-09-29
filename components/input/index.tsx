import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, name, className, ...props }) => {
  return (
    <div className="flex flex-col my-1">
      <label htmlFor={name} className="text-white">
        {label}
        <input
          id={name}
          name={name}
          type="text"
          className={`h-10 w-full rounded-md bg-black-700 px-3 text-white transition-all mt-2
                      focus:ring-4 focus:ring-blue-700 focus:outline-none ${className}`}
          {...props}
        />
      </label>
    </div>
  );
};

export default Input;
