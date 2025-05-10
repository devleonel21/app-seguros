import { useNavigate } from 'react-router-dom';

import { useUserStore } from '../../../../stores/useUserStore';
import type { CardPlanProps } from '../../../../types/cardPlan';

import { calculateDiscountedPrice } from '../../utils/calculeDiscount';
import { getIcon } from '../../utils/consultIcon';

import './card-plan.scss';

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
        window.scrollTo(0, 0);
      };

   
  return (
    <>
    <div className="plan-card">
        <div className="plan-card__header">
        { getIcon(data.name) == 'icon-clinic' &&  <span className="plan-card__header-recommended">Plan Recomendado</span> }

            <div className="plan-card__header-row"> 
              <h5 className="plan-card__title">{data.name}</h5>
              <img src={`/icon/${getIcon(data.name)}.svg`} alt={data.name} className="plan-card__icon" />
            </div>
            <span className="plan-card__label">Costo del plan</span>
            <p className="plan-card__price">${ calculateDiscountedPrice(data.price, type)} al mes</p>
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
                      planPrice: calculateDiscountedPrice(data.price, type),
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