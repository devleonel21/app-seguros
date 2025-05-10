import './card.scss';

type CardProps = {
  title: string;
  description: string;
  icon: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: () => void;
};

function Card({ title, description, icon, name, value, checked = false, onChange }: CardProps) {
  return (
    <div
      className={`card ${checked ? 'card--selected' : ''}`}
      onClick={onChange}
    >
      <div className="card__check">
        {checked && (
          <div className="card__check-icon">
            ✓
          </div>
        )}
      </div>

      <div className="card__content">
        <div className="card__icon">
          <img src={icon} alt={title} />
        </div>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>

      <input
        type="radio"
        className="card__radio-input"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => e.stopPropagation()}
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default Card;
