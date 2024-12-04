import React from 'react';
import { Github, Instagram, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-gray-800/50 mt-12 py-6 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/rasperon.c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://discord.com/users/spectralie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
              aria-label="Discord"
            >
              <MessageSquare className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/rasperon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-center">
            <a
              href="https://github.com/rasperon/schogolar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm"
            >
              Click for open-source projects!
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}