// Form.tsx

import React, { useState } from 'react';

const validateField = (value: string, validations: any): string => {
  if (validations.required && !value) {
    return 'This field is required.';
  }
  if (validations.pattern && !new RegExp(validations.pattern).test(value)) {
    return 'Invalid format.';
  }
  if (validations.minLength && value.length < validations.minLength) {
    return `Minimum length is ${validations.minLength} characters.`;
  }
  return '';
};

interface FormProps {
  children: React.ReactNode;
  onSubmit: (values: any, errors: any) => void;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  const [values, setValues] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate the field dynamically
    const field = React.Children.toArray(children).find(
      (child: any) => child.props.name === name
    ) as any;

    if (field?.props.validations) {
      const error = validateField(value, field.props.validations);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    React.Children.forEach(children, (child: any) => {
      if (child.props.name && child.props.validations) {
        const error = validateField(values[child.props.name], child.props.validations);
        if (error) {
          newErrors[child.props.name] = error;
        }
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(values, {});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {React.Children.map(children, (child: any) => {
        if (child.props.name) {
          return React.cloneElement(child, {
            value: values[child.props.name] || '',
            onChange: handleChange,
            error: errors[child.props.name], // Pass errors to the child
          });
        }
        return child;
      })}
    </form>
  );
};
