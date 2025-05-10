import { useUserStore } from "../../../../stores/useUserStore";


const Card = () => {
  const { userData } = useUserStore();

  return (
    <div className="resume__card">
      <div className="resume__user">
        <span className="resume__label">Precios calculados para:</span>
        <div className="resume__user-info">
          <img src="/icon/icon-user.svg" alt="Usuario" />
          <h5 className="resume__user-name">
            {userData.name} {userData.lastName}
          </h5>
        </div>
      </div>

      <hr className="resume__divider" />

      <div className="resume__details">
        <div className="resume__section">
          <p className="resume__section-title">Responsable de pago</p>
          <p className="resume__text">DNI: {userData.document}</p>
          <p className="resume__text">Celular: {userData.phone}</p>
        </div>

        <div className="resume__section">
          <p className="resume__section-title">Plan elegido</p>
          <p className="resume__text">{userData.planName}</p>
          <p className="resume__text">Costo del Plan: ${userData.planPrice} al mes</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
