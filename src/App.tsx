import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ApiEndpointSelector } from './components/ApiEndpointSelector';
import { LanguageSelector } from './components/LanguageSelector';
import { ApiForm } from './components/ApiForm';
import { ResponseDisplay } from './components/ResponseDisplay';
import { ExamplePrompts } from './components/ExamplePrompts';
import { fetchApiResponse, ApiEndpoint } from './lib/api';
import { languages, getSystemLanguage, getRandomPromptSet } from './lib/languages';
import { Footer } from './components/Footer';

function App() {
  const [endpoint, setEndpoint] = useState<ApiEndpoint>('academic');
  const [language, setLanguage] = useState(getSystemLanguage());
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [examplePrompts, setExamplePrompts] = useState<string[]>([]);

  useEffect(() => {
    setExamplePrompts(getRandomPromptSet());
  }, []);

  const handleSubmit = async (userId: string, message: string) => {
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const selectedLanguage = languages.find(lang => lang.code === language);
      const languagePrompt = selectedLanguage?.prompt || languages[0].prompt;
      const reply = await fetchApiResponse(endpoint, userId, message, languagePrompt);
      setResponse(reply);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptSelect = (prompt: string) => {
    const form = document.querySelector('form');
    const textarea = form?.querySelector('textarea');
    if (textarea) {
      textarea.value = prompt;
      textarea.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-blue-500/10"
            >
              <Sparkles className="w-6 h-6 text-blue-400" />
            </motion.div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Schogolar
            </h1>
            <p className="mt-3 text-gray-400">Provides a platform to help students and researchers easily access and understand academic content</p>
          </div>
          
          <motion.div 
            className="space-y-8 backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <ApiEndpointSelector
                selectedEndpoint={endpoint}
                onEndpointChange={setEndpoint}
              />
              
              <LanguageSelector
                selectedLanguage={language}
                onLanguageChange={setLanguage}
              />
            </div>
            
            <ApiForm
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
            
            <ResponseDisplay
              response={response}
              error={error}
            />

            <ExamplePrompts
              prompts={examplePrompts}
              onSelectPrompt={handlePromptSelect}
            />
          </motion.div>
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
