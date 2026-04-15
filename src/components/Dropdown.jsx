import { useState } from 'react';
import arrowIcon from '../assets/select-arrow.svg'
import "./Dropdown.css"

export const Dropdown = ({ options }) => {
    const [dropped, setDropped] = useState(false);

    const handleClick = () => {
        setDropped(!dropped);
    }

    let optionsList = [];

    for (let i in options) {
        optionsList.push(
            <li className="dropdown__list-item" key={`option${i}`}>
                <p className="dropdown__text">{options[i]}</p>
            </li>
        )
    }

    return (
        <div className="dropdown">
            <button className="dropdown__btn" type="button" onClick={handleClick}></button>
            <img src={arrowIcon} width={16} height={16} className="dropdown__arrow" />
            {dropped &&
                <div className="dropdown__options">
                    <ul className="dropdown__list">
                        {optionsList}
                    </ul>
                </div>
            }
        </div>
    )
}