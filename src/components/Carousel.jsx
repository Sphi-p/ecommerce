import { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg"
import arrowRight from "../assets/arrow-right.svg"
import "./Carousel.css"

export const Carousel = ({images}) => {
    const length = images.length;
    const [page, setPage] = useState(0);

    const onChangePage = (newPage) => {
        setPage(newPage);
    }

    const handlePrev = () => {
        if(page - 1 < 0) {
            setPage(length - 1);
        } else {
            setPage(page - 1);
        }
    }

    const handleNext = () => {
        if(page + 1 === length) {
            setPage(0);
        } else {
            setPage(page + 1);
        }
    }

    let dots = [];
    for(let i = 0; i < length; i++){
        const handleButtonClick = () => onChangePage(i);
        dots.push(
            <span
                key={`dot${i}`}
                className={i === page ? "carousel__dot carousel__dot--active" : "carousel__dot"}
                onClick={handleButtonClick}
            ></span>
        )
    }

    return (
        <div className="carousel">
            <img src={images[page]} alt="" className="carousel__img" />
            <button type="button" className="carousel__btn" onClick={handlePrev}>
                <img className="carousel__icon" src={arrowLeft} width={20} height={20} />
            </button>
            <button type="button" className="carousel__btn" onClick={handleNext}>
                <img className="carousel__icon" src={arrowRight} width={20} height={20} />
            </button>
            <div className="carousel__slider">
                {dots}
            </div>
        </div>
    )
}