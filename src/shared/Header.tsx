import '../styles/header.scss';

function Header() {

  return (
    <>
    <header className="header">
     <div className="header__container max-w-6xl" >
        <div className="header__left">
          <img src="/logo.svg" alt="" className="header__logo" />
        </div>
        <div className="header__right" >
          <span className="header__message">¡Compra por este medio!</span>
          <div className="header__contact">
            <img src="/icon/icon-phone.svg" alt="" className="header__icon" />
            <span className="header__phone">(01) 411 6001</span>
          </div>
        </div>
      </div>
      </header>
    </>
  )
}

export default Header
