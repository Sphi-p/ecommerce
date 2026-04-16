import { Button } from './Button';
import { Dropdown } from './Dropdown'
import './Filters.css'

export const Filters = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleClick = () => {
        return true;
    }

    return (
        <div className="store__filters filters">
            <form onSubmit={handleSubmit}>
                <h2 className="filters__title">Filters</h2>
                <div className="filters__wrapper">
                    <div className="filters__select">
                        <p className="filters__label">Brand</p>
                        <Dropdown options={["Samsung", "LG", "Sony", "TCL", "Hisense"]} />
                    </div>
                    <div className="filters__price-range price-range">
                        <span className="price-range__label">Price Range</span>
                        <div className="price-range__wrapper">
                            <input className="price-range__input" type="number" min={0} max={50000} id="price-min" name="price-min" placeholder="0" />
                            <input className="price-range__input" type="number" min={0} max={50000} id="price-max" name="price-max" placeholder="5000" />
                        </div>
                    </div>
                    <Button btnClass={"filters__btn"} btnType={"button"} btnText={"Apply Filters"} handleClick={handleClick} />
                </div>
            </form>
        </div>
    )
}