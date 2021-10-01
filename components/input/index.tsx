import React, { forwardRef, InputHTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = forwardRef<any, InputProps>((props, ref) => {
  const { name, label, className } = props;

  return (
    <div className="flex flex-col my-1">
      <label htmlFor={name} className="text-white">
        {label}
        <input
          id={name}
          type="text"
          className={`h-10 w-full rounded-md bg-black-700 px-3 text-white transition-all mt-2
                        focus:ring-4 focus:ring-blue-700 focus:outline-none ${className}`}
          {...props}
          ref={ref}
        />
      </label>
    </div>
  );
});

export default Input;
