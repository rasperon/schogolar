const BASE_URL = import.meta.env.VITE_API_URL;

export type ApiEndpoint = 'academic' | 'fast' | 'nolie';

export async function fetchApiResponse(
  endpoint: ApiEndpoint,
  userId: string,
  message: string,
  languagePrompt: string
) {
  const url = new URL(`${BASE_URL}/${endpoint}`);
  url.searchParams.append('user_id', userId);
  url.searchParams.append('message', `${message}\n\n${languagePrompt}`);

  const response = await fetch(url.toString());
  
  if (!response.ok) {
    throw new Error('Failed to fetch response from API');
  }

  const data = await response.json();
  return data.reply;
}