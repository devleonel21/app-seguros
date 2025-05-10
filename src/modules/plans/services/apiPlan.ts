const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchPlans = async () => {
    const response = await fetch(`${BASE_URL}/plans.json`);
    if (!response.ok) throw new Error("Network error");
    return response.json();
  };