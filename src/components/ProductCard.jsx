import minusIcon from '../assets/minus.svg'
import plusIcon from '../assets/plus.svg'
import './ProductCard.css'
import { Carousel } from './Carousel'
import { useState } from "react"

export const ProductCard = ({ id, category, make, model, price, images, isSpecialOffer, brand }) => {
    const [fave, setFave] = useState(false);
    const [amountInCart, setAmountInCart] = useState(0);

    const handleFavoured = () => {
        setFave(!fave);
    }

    const handleAddToCart = () => {
        setAmountInCart(1);
    }

    const handleDetract = () => {
        setAmountInCart(amountInCart - 1);
    }

    const handleAdd = () => {
        setAmountInCart(amountInCart + 1);
    }

    return (
        <div className="product-card">
            <div className="product-card__wrapper">
                {isSpecialOffer && <span className="product-card__tag">Special Offer</span>}
                <label className={!fave ? "product-card__fave-btn" : "product-card__fave-btn product-card__fave-btn--active"}>
                    <input
                        className="product-card__input"
                        type="checkbox"
                        name="favourite-item"
                        id={`fave-${id}`}
                        checked={fave}
                        onChange={handleFavoured}
                    />
                    <svg className="product-card__heart" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M12.667 9.333c.993-.973 2-2.14 2-3.666A3.667 3.667 0 0 0 11 2c-1.173 0-2 .333-3 1.333C7 2.333 6.173 2 5 2a3.667 3.667 0 0 0-3.667 3.667c0 1.533 1 2.7 2 3.666L8 14z" />
                    </svg>
                </label>
                {images.length === 1 ? <img className="product-card__img" width={260} height={260} src={images[0]} alt={model} /> : <Carousel images={images}/>}
            </div>
            <div className="product-card__content">
                <div className="product-card__top">
                    <span className="product-card__brand">{brand}</span>
                    <h2 className="product-card__model">{model}</h2>
                </div>
                <div className="product-card__bottom">
                    <p className="product-card__price">&#36;{price}</p>
                    {amountInCart === 0 && <button className="product-card__btn btn" onClick={handleAddToCart}>Add to Cart</button>}
                    {amountInCart > 0 &&
                        <div className="product-card__amount">
                            <button className="product-card__minus btn" onClick={handleDetract} type="button">
                                <img src={minusIcon} width={16} height={16} className="product-card__icon" />
                            </button>
                            <span className="product-card__text">{amountInCart} in cart</span>
                            <button className="product-card__plus btn" onClick={handleAdd} type="button">
                                <img src={plusIcon} width={16} height={16} className="product-card__icon" />
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}