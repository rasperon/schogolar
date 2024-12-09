import React from 'react';
import { motion } from 'framer-motion';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

export function Select({ children, className = '', ...props }: SelectProps) {
  return (
    <motion.select
      whileTap={{ scale: 0.98 }}
      className={`block w-full rounded-lg border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </motion.select>
  );
}