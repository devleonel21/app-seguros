import Footer from '../../shared/Footer'; 
import RequestForm from './components/requestForm/requestForm';
import './request.scss';

const Request = () => {
  return (
    <>
      <main className="request">
        <section className="request__container max-w-6xl">
          <div className="request__imageBanner">
            <img src="/image/banner-register.png" alt="Banner promocional seguro Rimac" />
          </div>

          <div className="request__formBanner">
            <div  className="request__formBanner--mobile">
              <div>
                  <span className="request__badge">Seguro Salud Flexible</span>
                  <h1 className="request__title">Creado para ti y tu familia</h1>
              </div>
              <img src="/image/banner-register.png" alt="Banner Mobile promocional seguro Rimac"  />
            </div>
            <p className="request__description">
                    Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
            </p>
            
            <RequestForm />
          </div>
        </section>
      </main>

      <Footer />

      <div className="background-overlay">
        <div className="circle-one"></div>
        <div className="circle-two"></div>
      </div>
    </>
  );
};

export default Request;
