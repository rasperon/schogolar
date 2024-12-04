import React, { useState, KeyboardEvent } from 'react';
import { Send, HelpCircle } from 'lucide-react';
import { ApiEndpoint, ApiRequest } from '../types/api';

interface ApiFormProps {
  onSubmit: (request: ApiRequest, endpoint: ApiEndpoint) => void;
  isLoading: boolean;
}

export function ApiForm({ onSubmit, isLoading }: ApiFormProps) {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [endpoint, setEndpoint] = useState<ApiEndpoint>('academic');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ userId, message }, endpoint);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        // Allow Shift+Enter for new line
        return;
      }
      
      e.preventDefault();
      if (!isLoading && userId && message) {
        handleSubmit(e);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className={`transition-all duration-300 ${focusedField === 'endpoint' ? 'scale-[1.02]' : ''}`}>
          <label htmlFor="endpoint" className="block text-sm font-medium text-gray-200 mb-1 flex items-center gap-2">
            Endpoint
            <div className="group relative">
              <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
              <div className="absolute left-0 bottom-full mb-2 w-64 p-2 bg-gray-700 rounded-lg text-xs hidden group-hover:block animate-fade-in">
                Choose the type of response you want:
                <ul className="mt-1 list-disc list-inside">
                  <li>Academic: Detailed, scholarly responses</li>
                  <li>Fast: Quick, concise answers</li>
                  <li>No Lie: Factual, verified information</li>
                </ul>
              </div>
            </div>
          </label>
          <select
            id="endpoint"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value as ApiEndpoint)}
            onFocus={() => setFocusedField('endpoint')}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors hover:bg-gray-750"
          >
            <option value="academic">Academic</option>
            <option value="fast">Fast</option>
            <option value="nolie">No Lie</option>
          </select>
        </div>

        <div className={`transition-all duration-300 ${focusedField === 'userId' ? 'scale-[1.02]' : ''}`}>
          <label htmlFor="userId" className="block text-sm font-medium text-gray-200 mb-1">
            User ID
          </label>
          <input
            id="userId"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            onFocus={() => setFocusedField('userId')}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors hover:bg-gray-750"
            required
            placeholder="Enter your unique identifier"
          />
          <p className="mt-1 text-xs text-gray-400">Use a consistent ID to maintain conversation history</p>
        </div>

        <div className={`transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.02]' : ''}`}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            rows={4}
            className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors hover:bg-gray-750"
            required
            placeholder="Type your question or prompt here... (Press Enter to send, Shift+Enter for new line)"
          />
          <p className="mt-1 text-xs text-gray-400">Be specific and clear with your questions for better results</p>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      >
        <Send className="w-5 h-5" />
        Send Request
      </button>
    </form>
  );
}