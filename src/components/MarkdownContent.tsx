import React from 'react';
import { parseMarkdown } from '../utils/markdown';

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const segments = parseMarkdown(content);

  return (
    <div className="space-y-4">
      {segments.map((segment, index) => {
        switch (segment.type) {
          case 'heading1':
            return (
              <h1 key={index} className="text-2xl font-bold text-gray-100">
                {segment.content}
              </h1>
            );
          case 'heading2':
            return (
              <h2 key={index} className="text-xl font-bold text-gray-200">
                {segment.content}
              </h2>
            );
          case 'heading3':
            return (
              <h3 key={index} className="text-lg font-bold text-gray-300">
                {segment.content}
              </h3>
            );
          case 'bold':
            return (
              <strong key={index} className="font-bold text-gray-100">
                {segment.content}
              </strong>
            );
          case 'italic':
            return (
              <em key={index} className="italic text-gray-200">
                {segment.content}
              </em>
            );
          default:
            return (
              <span key={index} className="text-gray-300">
                {segment.content}
              </span>
            );
        }
      })}
    </div>
  );
}