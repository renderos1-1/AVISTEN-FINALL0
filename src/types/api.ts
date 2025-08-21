// types/api.ts
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export interface ValidationError {
  field: string;
  message: string;
  value?: unknown;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  errors?: ValidationError[];
}