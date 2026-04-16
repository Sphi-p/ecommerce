import "./Link.css"

export const Link = ({lnkClass, lnkText, lnkHref}) => {
    return (
        <a className={`link ${lnkClass}`} href={lnkHref}>{lnkText}</a>
    )
}