// lib/api.ts
import { ContactFormData, ApiResponse } from '@/types/api';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const contactAPI = {
  // Submit contact form
  submitForm: async (data: ContactFormData): Promise<ApiResponse> => {
    console.log('🚀 Sending request to:', `${API_URL}/api/contact`);
    console.log('📝 Form data:', data);
    
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('📡 Response status:', response.status);
      console.log('📡 Response ok:', response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log('✅ Success response:', result);
      return result;
    } catch (error) {
      console.error('🔥 Fetch error:', error);
      throw error;
    }
  },

  // Health check
  healthCheck: async (): Promise<ApiResponse> => {
    const response = await fetch(`${API_URL}/health`);
    return response.json();
  }
};