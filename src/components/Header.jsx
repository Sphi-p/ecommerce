import cartIcon from '../assets/cart.svg'
import accountIcon from '../assets/account.svg'
import './Header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__content">
                        <a href="./tv" className="header__link header__link--home">TechStore</a>
                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__list-item header__list-item--active"><button type="button" className="header__link">TV</button></li>
                                <li className="header__list-item"><button type="button" className="header__link">Phone</button></li>
                                <li className="header__list-item"><button type="button" className="header__link">Laptop</button></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__personal">
                        <button className="header__btn" type="button">
                            <img className="header__img" src={cartIcon} width={20} height={20} />
                        </button>
                        <button className="header__btn" type="button">
                            <img className="header__img" src={accountIcon} width={20} height={20} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
