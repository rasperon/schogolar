import React, { useEffect, useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { ApiResponse } from '../types/api';
import { MarkdownContent } from './MarkdownContent';

interface ResponseDisplayProps {
  response?: ApiResponse;
  error?: string;
}

export function ResponseDisplay({ response, error }: ResponseDisplayProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (response || error) {
      setShow(false);
      setTimeout(() => setShow(true), 100);
    }
  }, [response, error]);

  if (!response && !error) return null;

  if (error) {
    return (
      <div className={`bg-red-900/50 border border-red-500 rounded-lg p-4 mt-6 transition-all duration-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex items-center gap-2 text-red-500">
          <AlertCircle className="w-5 h-5" />
          <span className="font-medium">Error</span>
        </div>
        <p className="mt-2 text-red-200">{error}</p>
      </div>
    );
  }

  return (
    <div className={`bg-gray-800/50 border border-gray-700 rounded-lg p-4 mt-6 transition-all duration-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <h3 className="text-lg font-medium text-gray-200 mb-4">Response</h3>
      <div className="prose prose-invert max-w-none">
        <MarkdownContent content={response?.reply || ''} />
      </div>
    </div>
  );
}