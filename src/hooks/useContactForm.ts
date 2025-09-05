// hooks/useContactForm.ts
import { useState } from 'react';
import { ContactFormData, ApiResponse } from '@/types/api';
import { contactAPI } from '@/lib/api';

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const submitForm = async (data: ContactFormData): Promise<boolean> => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await contactAPI.submitForm(data);

      if (result.success) {
        setSuccess(result.message);
        return true;
      } else {
        // Handle validation errors specifically
        if (result.errors && result.errors.length > 0) {
          const errorMessages = result.errors.map(err => `${err.field}: ${err.message}`).join(', ');
          setError(`${result.message}: ${errorMessages}`);
        } else {
          setError(result.message || 'Error al enviar el mensaje');
        }
        return false;
      }
    } catch (error) {
      setError('No se pudo enviar el mensaje. Por favor intenta de nuevo.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearMessages = () => {
    setError(null);
    setSuccess(null);
  };

  return {
    submitForm,
    isSubmitting,
    error,
    success,
    clearMessages
  };
};