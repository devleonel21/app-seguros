import Card from "../card/Card";

interface Props {
  selectedPlan: string;
  onSelect: (plan: string) => void;
}

const ListCards = ({ selectedPlan, onSelect }: Props) => (
  <div className="plans__card-group">
    <Card
      title="Para mí"
      description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
      icon="/icon/icon-for-me.svg"
      name="plan"
      value="me"
      checked={selectedPlan === 'me'}
      onChange={() => onSelect('me')}
    />
    <Card
      title="Para alguien más"
      description="Asegura a un familiar o persona cercana y personaliza su plan."
      icon="/icon/icon-for-other.svg"
      name="plan"
      value="other"
      checked={selectedPlan === 'other'}
      onChange={() => onSelect('other')}
    />
  </div>
);

export default ListCards;
