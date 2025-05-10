export const saveToSession = (key: string, data: any) =>
    sessionStorage.setItem(key, JSON.stringify(data));
  
  export const getFromSession = (key: string) => {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };