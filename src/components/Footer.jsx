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
                                    <a className="footer__link" href="#">About Us</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__link" href="#">Careers</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__link" href="#">Press</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__links">
                            <h2 className="footer__title">Support</h2>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <a className="footer__link" href="#">Contact</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__link" href="#">FAQ</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__link" href="#">Shipping</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__links">
                            <h2 className="footer__title">Legal</h2>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <a className="footer__link" href="#">Privacy Policy</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__link" href="#">Terms of Service</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__link" href="#">Returns</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__links">
                            <h2 className="footer__title">Newsletter</h2>
                            <p className="footer__text">Subscribe for exclusive deals</p>
                            <form className="footer__form" action="">
                                <input type="email" className="footer__email" id="email" name="email" placeholder="Email" />
                                <button type="submit" className="footer__btn btn">Subscribe</button>
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