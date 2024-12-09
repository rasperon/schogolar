import React from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <motion.input
      whileFocus={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`block w-full rounded-lg border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 ${className}`}
      {...props}
    />
  );
}