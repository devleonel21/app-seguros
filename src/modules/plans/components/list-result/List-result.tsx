import CardPlan from "../card-plan/Card-plan";

interface listResultProps {
  data: any[];
  selectedPlan: string;
}

const ListResult = ({ data, selectedPlan }: listResultProps) => (
  <div className="plans__result max-w-5xl">
    {data.map((plan, index) => (
      <CardPlan key={index} data={plan} type={selectedPlan} />
    ))}
  </div>
);

export default ListResult;
