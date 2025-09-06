import * as React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { label: string };

export const Button: React.FC<Props> = ({ label, ...props }) => (
  <button className="rounded-lg px-3 py-2 border" {...props}>
    {label}
  </button>
);
