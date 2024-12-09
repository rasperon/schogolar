import React from 'react';
import { Select } from './ui/Select';

type Endpoint = 'academic' | 'fast' | 'nolie';

interface ApiEndpointSelectorProps {
  selectedEndpoint: Endpoint;
  onEndpointChange: (endpoint: Endpoint) => void;
}

export function ApiEndpointSelector({ selectedEndpoint, onEndpointChange }: ApiEndpointSelectorProps) {
  return (
    <div className="w-full max-w-md">
      <label htmlFor="endpoint" className="block text-sm font-medium text-gray-200 mb-2">
        API Endpoint
      </label>
      <Select
        id="endpoint"
        value={selectedEndpoint}
        onChange={(e) => onEndpointChange(e.target.value as Endpoint)}
        className="w-full bg-gray-800 text-white border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="academic">Academic</option>
        <option value="fast">Fast</option>
        <option value="nolie">No Lie</option>
      </Select>
    </div>
  );
}