import { useState } from 'react';

export function useForm<T>(initialValues: T) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return { values, handleChange, setValues };
}