import React from 'react';
import { Select } from './ui/Select';
import { languages } from '../lib/languages';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export function LanguageSelector({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="w-full max-w-md">
      <label htmlFor="language" className="block text-sm font-medium text-gray-200 mb-2">
        Response Language
      </label>
      <Select
        id="language"
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="w-full bg-gray-800 text-white border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </Select>
    </div>
  );
}