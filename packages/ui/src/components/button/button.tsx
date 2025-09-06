import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export const Button: React.FC<Props> = ({ label, children, ...props }) => (
  <button
    className={`
      rounded-lg px-3 py-2 cursor-pointer text-white 
      bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-colors 
      disabled:opacity-50 disabled:cursor-not-allowed`}
    {...props}
  >
    {children || label}
  </button>
);
