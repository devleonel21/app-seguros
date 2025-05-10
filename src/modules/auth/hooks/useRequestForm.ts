import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from './useForm';
import { validateRequestForm } from '../utils/validators'; 
import { useUserStore } from '../../../stores/useUserStore';
import type { FormDataType } from '../../../types/formData';
import type { FormErrors } from '../../../types/FormErrors ';
import { fetchUserData } from '../services/apiUser';

export const useRequestForm = () => {
  const navigate = useNavigate();
  const { setUserData } = useUserStore();

  const [loading, setLoading] = useState(false);
  const { values: formData, handleChange: handleInputChange } = useForm<FormDataType>({
    documentType: 'dni',
    document: '',
    phone: '',
    privacy: false,
    comms: false
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    documentType: false,
    document: false,
    phone: false,
    privacy: false,
    comms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = validateRequestForm(formData);
    setFormErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      setLoading(false);
      return;
    }

    try {
      const data = await fetchUserData();
      const groupData = { ...data, ...formData };
      setUserData(groupData);
      navigate('/plans');
    } catch (error) {
      alert('Ocurrió un error');
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleInputChange,
    formErrors,
    handleSubmit,
    loading
  };
};
