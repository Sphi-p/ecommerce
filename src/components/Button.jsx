import "./Button.css"

export const Button = ({ btnClass, btnType, btnText, handleClick = () => { } }) => {
    return (
        <button type={btnType} className={`btn ${btnClass}`} onClick={handleClick}>{btnText}</button>
    )
}