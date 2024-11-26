// Textarea.tsx

import React from 'react';

export const Textarea: React.FC<any> = ({ label, name, value, onChange, error, validations }: any) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium">{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 p-2 border border-gray-300 rounded-md"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
