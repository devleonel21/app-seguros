export const getIcon = (name : string) => {
    if (name.toLowerCase().includes('clínica')) {
      return 'icon-clinic'; 
    }
    return 'icon-home';
  }; 