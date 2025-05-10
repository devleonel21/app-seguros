
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Inicio - Rimac';
        break;
      case '/plans':
        document.title = 'Planes - Rimac';
        break;
      case '/resume':
        document.title = 'Resumen - Rimac';
        break;
      default:
        document.title = 'Seguro Salud';
        break;
    }
  }, [location.pathname]);

  return null; 
}

export default TitleManager;
