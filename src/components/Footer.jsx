import { Button } from './Button'
import { Link } from './Link'
import './Footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__content">
                        <div className="footer__links">
                            <h2 className="footer__title">About</h2>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <Link lnkClass="footer__link" lnkText="About Us" lnkHref="#" />
                                </li>
                                <li className="footer__list-item">
                                    <Link lnkClass="footer__link" lnkText="Careers" lnkHref="#" />
                                </li>
                                <li className="footer__list-item">
                                    <Link lnkClass="footer__link" lnkText="Press" lnkHref="#" />
                                </li>
                            </ul>
                        </div>
                        <div className="footer__links">
                            <h2 className="footer__title">Support</h2>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <Link lnkClass="footer__link" lnkText="Contact" lnkHref="#" />
                                </li>
                                <li className="footer__list-item">
                                    <Link lnkClass="footer__link" lnkText="FAQ" lnkHref="#" />
                                </li>
                                <li className="footer__list-item">
                                    <Link lnkClass="footer__link" lnkText="Shipping" lnkHref="#" />
                                </li>
                            </ul>
                        </div>
                        <div className="footer__links">
                            <h2 className="footer__title">Legal</h2>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <Link lnkClass="footer__link" lnkText="Privacy Policy" lnkHref="#" />
                                </li>
                                <li className="footer__list-item">
                                    <Link lnkClass="footer__link" lnkText="Terms of Service" lnkHref="#" />
                                </li>
                                <li className="footer__list-item">
                                    <Link lnkClass="footer__link" lnkText="Returns" lnkHref="#" />
                                </li>
                            </ul>
                        </div>
                        <div className="footer__links">
                            <h2 className="footer__title">Newsletter</h2>
                            <p className="footer__text">Subscribe for exclusive deals</p>
                            <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
                                <input type="email" className="footer__email" id="email" name="email" placeholder="Email" />
                                <Button btnClass="footer__btn" btnType="submit" btnText="Subscribe" />
                            </form>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <p className="footer__text">&#169; 2026 TechStore. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}