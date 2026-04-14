import arrowIcon from '../assets/select-arrow.svg'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Filters } from '../components/Filters'
import { Banner } from '../components/Banner'
import './Home.css'

export const Home = () => {
    return (
        <>
            <Header />
            <main className="main">
                <section className="store">
                    <h1 className="hidden">TechStore</h1>
                    <div className="container">
                        <div className="store__wrapper">
                            <div className="store__sidebar">
                                <Filters />
                                <Banner />
                            </div>
                            <div className="store__content">
                                <div className="store__product-top">
                                    <span className="store__product-total">8 products</span>
                                    <label className="store__select select">
                                        <span className="select__label">Sort by:</span>
                                        <input className="select__input" type="text" id="sort" name="sort" />
                                        <img src={arrowIcon} width={16} height={16} className="select__arrow" />
                                    </label>
                                </div>
                                <div className="store__product-list"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}