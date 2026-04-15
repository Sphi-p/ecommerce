import arrowIcon from '../assets/select-arrow.svg'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Filters } from '../components/Filters'
import { Banner } from '../components/Banner'
import { ProductCard } from '../components/ProductCard'
import products from '../data/products'
import './Home.css'
import { Dropdown } from '../components/Dropdown'

export const Home = () => {
    const tempTvFilter = products.filter(item => item.category === "tv");

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
                                    <span className="store__product-total">{tempTvFilter.length} products</span>
                                    <div className="store__sort">
                                        <span className="store__label">Sort by:</span>
                                        <Dropdown options={["ASC", "DESC"]} />
                                    </div>
                                </div>
                                <div className="store__product-container">
                                    <ul className="store__product-list">
                                        {tempTvFilter.map(item => (
                                            <li className="store__product" key={item.id}>
                                                <ProductCard
                                                    id={item.id}
                                                    category={item.category}
                                                    make={item.make}
                                                    model={item.model}
                                                    price={item.price}
                                                    images={item.images}
                                                    isSpecialOffer={item.isSpecialOffer}
                                                    brand={item.brand}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}