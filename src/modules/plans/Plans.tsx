import { Link } from 'react-router-dom'; 

import './plans.scss';
import Steps from '../../components/steps/Steps';
import { usePlans } from './hooks/usePlan';
import ListCards from './components/list-card/List-card';
import ListResult from './components/list-result/List-result';

const Plans = () => {
  const { selectedPlan, apiResult, handleCardSelect, userData } = usePlans();

  return (
    <>
      <Steps activeStep={1} />

      <main className="plans">
        <div className="plans__container max-w-5xl">
          <Link to="/" className="plans__back">
            <img src="/icon/icon-button.svg" alt="Volver" /> Volver
          </Link>

          <div className="plans__header">
            <h1>{userData.name}, ¿Para quién deseas cotizar?</h1>
            <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
            <ListCards selectedPlan={selectedPlan} onSelect={handleCardSelect} />
          </div>
        </div>

        {apiResult.length > 0 && <ListResult data={apiResult} selectedPlan={selectedPlan} />}
      </main>
    </>
  );
};

export default Plans;
