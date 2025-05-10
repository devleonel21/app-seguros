import '../styles/footer.scss';

function Footer() {

  return (
    <>
    <footer className="footer">
        <div className="footer__container max-w-6xl">
            <div className="footer__left">
            <img src="/logo-white.svg" alt="Logo blanco" className="footer__logo" />
            </div>
            <div className="footer__right">
            <span className="footer__text">© 2023 RIMAC Seguros y Reaseguros.</span>
            </div>
        </div>

    </footer>
    
    </>
  )
}

export default Footer
