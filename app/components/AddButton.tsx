// app/components/AddButton.tsx
"use client"; // This component handles click events

import React from 'react';

interface AddButtonProps {
  onClick?: () => void; // Make onClick optional if used in a form that handles submit
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  children: React.ReactNode; // To allow text like "Add" or an icon
  disabled?: boolean;
}

/**
 * AddButton component for submitting forms or triggering actions.
 * @param {AddButtonProps} props - The component props.
 * @returns {JSX.Element} The rendered AddButton component.
 */
const AddButton: React.FC<AddButtonProps> = ({
  onClick,
  type = "submit",
  ariaLabel = "Add task",
  children,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg transition duration-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default AddButton;
