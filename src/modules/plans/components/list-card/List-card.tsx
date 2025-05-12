import Card from "../card/Card";

interface listCardProps {
  selectedPlan: string;
  onSelect: (plan: string) => void;
}

const ListCards = ({ selectedPlan, onSelect }: listCardProps) => (
  <div className="plans__card-group">
    <Card
      title="Para mí"
      description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
      icon="/icon/icon-for-me.svg"
      checked={selectedPlan === 'me'}
      onChange={() => onSelect('me')}
      testId="card-me"
    />
    <Card
      title="Para alguien más"
      description="Asegura a un familiar o persona cercana y personaliza su plan."
      icon="/icon/icon-for-other.svg"
      checked={selectedPlan === 'other'}
      onChange={() => onSelect('other')}
      testId="card-other"
    />
  </div>
);

export default ListCards;
