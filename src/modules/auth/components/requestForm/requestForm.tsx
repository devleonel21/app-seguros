import { Link } from 'react-router-dom';
import { useRequestForm } from '../../hooks/useRequestForm';

const RequestForm = () => {
  const {
    formData,
    handleInputChange,
    formErrors,
    handleSubmit,
    loading
  } = useRequestForm();

  return (
    <form autoComplete="off" className="request__form" onSubmit={handleSubmit}>
      <div className="request__inputGroup">
        <select
          aria-label="Tipo de documento"
          name="documentType"
          value={formData.documentType}
          onChange={handleInputChange}
          className={`request__select ${formErrors.document ? 'error' : ''}`}
        >
          <option value="dni">DNI</option>
          <option value="ce">CE</option>
        </select>

        <div className="request__inputWrapper">
          <label htmlFor="document" className={`request__label ${formErrors.document ? 'error' : ''}`}>
            Nro. de Documento
          </label>
          <input
            id="document"
            type="text"
            name="document"
            value={formData.document}
            onChange={handleInputChange}
            className={`request__input ${formErrors.document ? 'error' : ''}`}
            maxLength={formData.documentType === 'dni' ? 8 : 9}
          />
        </div>
      </div>

      <div className="request__inputWrapper">
        <label htmlFor="phone" className={`request__label ${formErrors.phone ? 'error' : ''}`}>
          Celular
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className={`request__input-border ${formErrors.phone ? 'error' : ''}`}
          maxLength={9}
        />
      </div>

      <div className="request__checkboxGroup">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          checked={formData.privacy}
          onChange={handleInputChange}
          className={`request__checkboxGroup-input ${formErrors.privacy ? 'error' : ''}`}
        />
        <label htmlFor="privacy" className={`request__checkboxGroup-label ${formErrors.privacy ? 'error' : ''}`}>
          Acepto la Política de Privacidad
        </label>
      </div>

      <div className="request__checkboxGroup">
        <input
          type="checkbox"
          id="comms"
          name="comms"
          checked={formData.comms}
          onChange={handleInputChange}
          className={`request__checkboxGroup-input ${formErrors.comms ? 'error' : ''}`}
        />
        <label htmlFor="comms" className={`request__checkboxGroup-label ${formErrors.comms ? 'error' : ''}`}>
          Acepto la Política de Comunicaciones Comerciales
        </label>
      </div>

      <Link to="/" className="request__termsLink">
        Aplican Términos y Condiciones
      </Link>

      <button type="submit" className="request__button">
        {loading ? <span className="spinner" /> : 'Cotiza Aquí'}
      </button>
    </form>
  );
};

export default RequestForm;
