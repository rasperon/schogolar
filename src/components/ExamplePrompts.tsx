import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface ExamplePromptsProps {
  prompts: string[];
  onSelectPrompt: (prompt: string) => void;
}

export function ExamplePrompts({ prompts, onSelectPrompt }: ExamplePromptsProps) {
  return (
    <div className="mt-8">
      <h3 className="text-sm font-medium text-gray-400 mb-4">Example Prompts:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {prompts.map((prompt, index) => (
          <motion.button
            key={index}
            className="group relative p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 text-left"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectPrompt(prompt)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-start space-x-3">
              <MessageCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors line-clamp-3">
                {prompt}
              </p>
            </div>
            <motion.div
              className="absolute inset-0 border-2 border-blue-500/0 rounded-lg"
              initial={false}
              whileHover={{ borderColor: 'rgba(59, 130, 246, 0.5)' }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}