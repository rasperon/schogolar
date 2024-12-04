import React, { useState } from 'react';
import { ApiRequest, ApiEndpoint, ApiResponse } from './types/api';
import { fetchApiResponse } from './utils/api';
import { ApiForm } from './components/ApiForm';
import { ResponseDisplay } from './components/ResponseDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Footer } from './components/Footer';
import { Brain } from 'lucide-react';
import { Helmet } from 'react-helmet';  // React Helmet'i ekleyin

function App() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse>();
  const [error, setError] = useState<string>();

  const handleSubmit = async (request: ApiRequest, endpoint: ApiEndpoint) => {
    setLoading(true);
    setError(undefined);
    
    try {
      const result = await fetchApiResponse(endpoint, request);
      setResponse(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Helmet>
        <title>Schogolar - Learn, Explore, and Improve</title>  {/* Dinamik başlık */}
        <meta name="description" content="Schogolar provides a platform to help students and researchers easily access and understand academic content." />
        <meta property="og:title" content="Schogolar - Academic Assistance" />
        <meta property="og:description" content="Schogolar offers insightful tools to help students and researchers enhance their academic learning and research." />
        <meta property="og:image" content="./icons.svg" />
        <meta property="og:url" content="https://schogolar.vercel.app" />
      </Helmet>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
            <Brain className="w-8 h-8 text-blue-500 animate-pulse-slow" />
            <h1 className="text-3xl font-bold text-center">Schogolar</h1>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl animate-fade-in">
            <ApiForm onSubmit={handleSubmit} isLoading={loading} />
            
            {loading && <LoadingSpinner />}
            
            <ResponseDisplay response={response} error={error} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
