import { Link } from 'react-router-dom';
import './steps.scss';
interface StepsProps {
    activeStep: number;
  }
  
function Steps({ activeStep }: StepsProps){
    return (
        <>
        
            <div className="steps" > 
                <div className={`steps__step ${activeStep === 1 ? 'steps__step--active' : 'steps__step--inactive'}`}  >
                    <div className="steps__step-circle" >1</div>
                    <div className="steps__step-label">
                    Planes y coberturas
                    </div>
                </div> 
                <div className="steps__separator">---</div>
                <div className={`steps__step ${activeStep === 2 ? 'steps__step--active' : 'steps__step--inactive'}`}>
                    <div className="steps__step-circle" >2</div>
                    <div className="steps__step-label">Resumen</div>
                </div>
            </div>
            <div className={`steps-mobile${activeStep === 2 ? '--hidden' : ''}`}>
                <Link to="/" >
                    <img src="./icon/icon-arrow.svg" alt="" />
                </Link>
                <p>Paso {activeStep} de 2</p>
                <span></span>
            </div>
        </>
    )
}



export default Steps;