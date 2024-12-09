import React from 'react';
import { motion } from 'framer-motion';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = '', ...props }: TextareaProps) {
  return (
    <motion.textarea
      whileFocus={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`block w-full rounded-lg border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 ${className}`}
      {...props}
    />
  );
}