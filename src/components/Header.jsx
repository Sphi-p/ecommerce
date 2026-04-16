import cartIcon from '../assets/cart.svg'
import accountIcon from '../assets/account.svg'
import './Header.css'
import { Link } from './Link'

export const Header = () => {
    return (
        <header className="header">
            
                <div className="header__wrapper">
                    <div className="header__content">
                        <a href="./tv" className="header__link header__link--home">TechStore</a>
                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__list-item">
                                    <Link lnkClass="header__link header__link--active" lnkText="TV" lnkHref="/tv" />
                                </li>
                                <li className="header__list-item">
                                    <Link lnkClass="header__link" lnkText="Phone" lnkHref="#" />
                                </li>
                                <li className="header__list-item">
                                    <Link lnkClass="header__link" lnkText="Laptop" lnkHref="#" />
                                </li>
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
            
        </header>
    )
}
