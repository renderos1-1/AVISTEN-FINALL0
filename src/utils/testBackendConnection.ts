// utils/testBackendConnection.ts
import { contactAPI } from '@/lib/api';

export const testBackendConnection = async (): Promise<void> => {
  try {
    console.log('Testing backend connection...');
    const response = await contactAPI.healthCheck();
    console.log('Backend health check:', response);
    
    if (response.success) {
      console.log('✅ Backend connection successful!');
    } else {
      console.log('❌ Backend health check failed:', response.message);
    }
  } catch (error) {
    console.error('❌ Failed to connect to backend:', error);
    console.log('Make sure your Node.js backend is running on the configured port.');
  }
};

// You can call this function in your browser console to test the connection
// testBackendConnection();