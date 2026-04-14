import clockIcon from '../assets/clock.svg'
import crossIcon from '../assets/cross.svg'
import './Banner.css'

export const Banner = () => {
    return (
        <div className="store__banner banner">
            <div className="banner__header">
                <img src={clockIcon} width={20} height={20} className="banner__icon" />
                <h2 className="banner__title">Special Deal!</h2>
            </div>
            <button type="button" className="banner__close">
                <img src={crossIcon} width={16} height={16} className="banner__icon" />
            </button>
            <p className="banner__text">Register now to unlock exclusive offers and discounts</p>
            <p className="banner__text">Offer expires in: <span className="banner__deadline">0:53:50</span></p>
        </div>
    )
}