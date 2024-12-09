import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Send } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';

interface ApiFormProps {
  onSubmit: (userId: string, message: string) => Promise<void>;
  isLoading: boolean;
}

export function ApiForm({ onSubmit, isLoading }: ApiFormProps) {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userId, message);
    setMessage(''); // Optionally clear the message after submission
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && userId && message) {
        handleSubmit(e);
      }
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="space-y-6 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <label htmlFor="userId" className="block text-sm font-medium text-gray-300 mb-2">
          User ID
        </label>
        <Input
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          className="w-full bg-gray-800/50 text-white border-gray-700 focus:border-blue-500 transition-colors"
          placeholder="Enter your user ID. Use a consistent ID to maintain conversation history"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full bg-gray-800/50 text-white border-gray-700 focus:border-blue-500 transition-colors min-h-[120px]"
          placeholder="Type your message here... (Press Enter to send, Shift+Enter for new line)
          WARN: Academic: Detailed, scholarly responses/Fast: Quick, concise answers/No Lie: Factual, verified information."
          onKeyDown={handleKeyDown} // Handle key down event
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isLoading ? (
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Processing...
          </motion.div>
        ) : (
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </motion.div>
        )}
      </Button>
    </motion.form>
  );
}
