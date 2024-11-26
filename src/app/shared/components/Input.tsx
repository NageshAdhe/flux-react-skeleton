// Input.tsx

import React from 'react';

interface InputProps {
  type: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  validations?: any;
}

export const Input: React.FC<InputProps> = ({
  type,
  name,
  label,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        aria-describedby={`${name}-error`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
