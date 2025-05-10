import './resume.scss';
import Steps from '../../components/steps/Steps';
import Header from './components/header/header';
import Card from './components/card/Card';

const Resume = () => {
  return (
    <>
      <Steps activeStep={2} />

      <main className="resume">
        <div className="resume__container max-w-5xl">
          <Header />
          <div className="resume__content">
            <Card />
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
