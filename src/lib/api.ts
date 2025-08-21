// lib/api.ts
import { ContactFormData, ApiResponse } from '@/types/api';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const contactAPI = {
  // Submit contact form
  submitForm: async (data: ContactFormData): Promise<ApiResponse> => {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  // Health check
  healthCheck: async (): Promise<ApiResponse> => {
    const response = await fetch(`${API_URL}/health`);
    return response.json();
  }
};