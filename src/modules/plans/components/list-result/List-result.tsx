import CardPlan from "../card-plan/Card-plan";
import Carousel from "../carousel/Carousel";

interface listResultProps {
  data: any[];
  selectedPlan: string;
}

const ListResult = ({ data, selectedPlan }: listResultProps) => {

  return (
  
  <div className="plans__result max-w-5xl">
     
     <Carousel data={data} selectedPlan={selectedPlan} />

      <div className="plans__desktop">
        {data.map((plan, index) => (
          <CardPlan key={index} data={plan} type={selectedPlan} />
        ))}
      </div>
  </div>
);

};

export default ListResult;
