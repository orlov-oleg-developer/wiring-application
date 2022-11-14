import logoPath from "../images/logo.png"
import spherePath from "../images/sphereImg.svg"

export default function Header() {
  return(
    <header className="header root__header">
      <div className="header__container">
        <img className="header__logo" src={logoPath} alt="Логотип"/>
        <ul className="header__menu">
          <li className="header__link">Образовательные материалы</li>
          <li className="header__link">Глосарий</li>
          <li className="header__link">Новости</li>
          <li className="header__link">О нас</li>
          <li className="header__link">Помощь</li>
        </ul>
      </div>
      <div className="header__container">
        <div className="header__language-container">
          <p className="header__language">Рус</p>
          <img className="header__language-logo" src={spherePath} alt="Логотип языка"/>
        </div>
        <button className="header__button">
          <p className="header__button-text">Вход</p>
        </button>
      </div>
    </header>
  )
}
