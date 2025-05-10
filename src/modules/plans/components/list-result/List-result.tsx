import CardPlan from "../card-plan/Card-plan";

interface Props {
  data: any[];
  selectedPlan: string;
}

const ListResult = ({ data, selectedPlan }: Props) => (
  <div className="plans__result max-w-5xl">
    {data.map((plan, index) => (
      <CardPlan key={index} data={plan} type={selectedPlan} />
    ))}
  </div>
);

export default ListResult;
