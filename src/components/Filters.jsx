import arrowIcon from '../assets/select-arrow.svg'
import './Filters.css'

export const Filters = () => {
    return (
        <div className="store__filters filters">
            <h2 className="filters__title">Filters</h2>
            <div className="filters__wrapper">
                <label className="filters__select select">
                    <span className="select__label">Brand</span>
                    <input className="select__input" type="text" id="brand" name="brand" />
                    <img src={arrowIcon} width={16} height={16} className="select__arrow" />
                </label>
                <div className="filters__price-range price-range">
                    <span className="price-range__label">Price Range</span>
                    <div className="price-range__wrapper">
                        <input className="price-range__input" type="number" min={0} max={50000} id="price-min" name="price-min" placeholder="0" />
                        <input className="price-range__input" type="number" min={0} max={50000} id="price-max" name="price-max" placeholder="5000" />
                    </div>
                </div>
                <button className="filters__btn btn" type="button">Apply Filters</button>
            </div>
        </div>
    )
}