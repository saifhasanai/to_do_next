// app/components/InputField.tsx
"use client"; // This component interacts with user input, so it's a client component

import React from 'react';

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  ariaLabel?: string;
  required?: boolean;
}

/**
 * InputField component for text input.
 * @param {InputFieldProps} props - The component props.
 * @returns {JSX.Element} The rendered InputField component.
 */
const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeholder = "Add a new task...",
  ariaLabel = "New task input",
  required = true,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label={ariaLabel}
      className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
      required={required}
    />
  );
};

export default InputField;
