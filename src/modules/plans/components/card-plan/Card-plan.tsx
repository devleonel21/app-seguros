import { useNavigate } from 'react-router-dom';
import './card-plan.scss';
import { useUserStore } from '../../../../stores/useUserStore';

type CardPlanProps = {
    type : string;
    data: {
      name: string;
      price: number;
      description: string[];
      age: number;
    };
};

function CardPlan({ type, data }: CardPlanProps) {

    const { setUserData } = useUserStore();

    const navigate = useNavigate();

    const updateSessionFormData = (newData: Record<string, any>) => {
     //   const existing = sessionStorage.getItem('formData');
     //   let formData = existing ? JSON.parse(existing) : {};
      
        //formData = { ...formData, ...newData };
      
       // sessionStorage.setItem('formData', JSON.stringify(formData));

       const { planName, planPrice } = newData;
       console.log('Datos de la sesión actualizados:', newData);

        setUserData({ planName, planPrice });

        navigate('/resume');
      };

    const getIcon = (name : string) => {
        if (name.toLowerCase().includes('clínica')) {
          return 'icon-clinic'; 
        }
        return 'icon-home';
      };
      
    const calculateDiscountedPrice = (price : any) => {
        if (type == 'me') {
            return Number(price);
        }
        return Number(price) * 0.95; 
        
      };
  return (
    <>
    <div className="plan-card">
        <div className="plan-card__header">
            <div className="plan-card__header-row">
            <h5 className="plan-card__title">{data.name}</h5>
            <img src={`/icon/${getIcon(data.name)}.svg`} alt={data.name} className="plan-card__icon" />
            </div>
            <span className="plan-card__label">Costo del plan</span>
            <p className="plan-card__price">${ calculateDiscountedPrice(data.price)} al mes</p>
        </div>
        <div className="plan-card__body">
            <ul className="plan-card__list">
                {data.description.map((desc, index) => (

                <li  key={index} className="plan-card__item">
                    {desc}
                </li> 
                 ))}
            </ul>
            
        </div>
            <div className="plan-card__footer">
            <button
                className="plan-card__button"
                onClick={() =>
                    updateSessionFormData({
                      planName: data.name,
                      planPrice: calculateDiscountedPrice(data.price),
                    })
                  }>
                Seleccionar Plan
                </button>
            </div>
        </div>
    </>
  );
}   

export default CardPlan;