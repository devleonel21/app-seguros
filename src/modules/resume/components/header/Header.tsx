import { Link } from 'react-router-dom';

const Header = () => (
  <div className="resume__header">
    <Link to="/" className="resume__back-link">
      <img src="/icon/icon-button.svg" alt="Volver" />
      Volver
    </Link>
    <h1 className="resume__title">Resumen del Seguro</h1>
  </div>
);

export default Header;
