export type ApiEndpoint = 'academic' | 'fast' | 'nolie';

export interface ApiRequest {
  userId: string;
  message: string;
}

export interface ApiResponse {
  reply: string;
}

export interface ApiError {
  message: string;
}