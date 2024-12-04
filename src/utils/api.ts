import { ApiEndpoint, ApiRequest, ApiResponse } from '../types/api';

const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchApiResponse(
  endpoint: ApiEndpoint,
  { userId, message }: ApiRequest
): Promise<ApiResponse> {
  const url = new URL(`${BASE_URL}/${endpoint}`);
  url.searchParams.append('user_id', userId);
  url.searchParams.append('message', message);

  const response = await fetch(url.toString());
  
  if (!response.ok) {
    throw new Error('Failed to fetch response');
  }

  return response.json();
}