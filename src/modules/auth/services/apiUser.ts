const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchUserData = async () => {
    const res = await fetch(`${BASE_URL}/user.json`);
    return res.json();
  };