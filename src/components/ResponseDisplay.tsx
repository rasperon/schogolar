import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ResponseDisplayProps {
  response: string | null;
  error: string | null;
}

export function ResponseDisplay({ response, error }: ResponseDisplayProps) {
  return (
    <AnimatePresence mode="wait">
      {error && (
        <motion.div
          key="error"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="w-full bg-red-500/10 border border-red-500/20 rounded-lg p-6 mt-6"
        >
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
            <p className="text-red-400">{error}</p>
          </div>
        </motion.div>
      )}

      {response && (
        <motion.div
          key="response"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="w-full bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mt-6"
        >
          <h3 className="text-lg font-medium text-blue-400 mb-4">Response</h3>
          <div className="prose prose-invert prose-sm max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => (
                  <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-bold mt-4 mb-2"
                    {...props}
                  />
                ),
                h2: ({node, ...props}) => (
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xl font-bold mt-3 mb-2"
                    {...props}
                  />
                ),
                p: ({node, ...props}) => (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-4 text-gray-300 leading-relaxed"
                    {...props}
                  />
                ),
                ul: ({node, ...props}) => (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="list-disc ml-6 mb-4 space-y-2"
                    {...props}
                  />
                ),
                ol: ({node, ...props}) => (
                  <motion.ol
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="list-decimal ml-6 mb-4 space-y-2"
                    {...props}
                  />
                ),
                code: ({node, inline, ...props}) => 
                  inline ? (
                    <code className="bg-gray-700/50 px-1.5 py-0.5 rounded text-sm text-blue-300" {...props} />
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="relative"
                    >
                      <code className="block bg-gray-700/50 p-4 rounded-lg text-sm my-4 overflow-x-auto" {...props} />
                    </motion.div>
                  ),
                blockquote: ({node, ...props}) => (
                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-l-4 border-blue-500/50 pl-4 my-4 italic text-gray-400"
                    {...props}
                  />
                ),
                a: ({node, ...props}) => (
                  <a
                    className="text-blue-400 hover:text-blue-300 underline transition-colors"
                    {...props}
                  />
                ),
              }}
            >
              {response}
            </ReactMarkdown>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}