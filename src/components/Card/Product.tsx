import React from 'react'
import { ArrowForwardOutline } from 'react-ionicons'

import ImageTest from "../../assets/images/name_shoe/Adidas/Adidas-4D-FUSIO-4tr2/giay-4d-fusio-fy3609-king-shoes-sneaker-real-hcm-1-1634377536.jpg"
import { Link } from 'react-router-dom'
interface PropsChildProduct {
    name: string,
    price: number,
    priceDiscount?: number,
    discountPercent?: number,
    isBestseller: boolean,
    img?:string,
    proId:string
}
const ItemProduct = ({ ...prop }: PropsChildProduct): JSX.Element => {
    return (
        <div className="home__product-item">
            <div className="home__product-item-info">
                <div className="product__item-img" style={{ backgroundImage: `url(${ImageTest})`}}></div>
                <h4 className="product__name">{prop.name}</h4>
                <div className="home-product-item__price">
                    <span className="home-product-item_price-current">${prop.price}</span>
                    {
                        prop.priceDiscount !== undefined && (
                            <span className="home-product-item__price-old">
                                ${prop.priceDiscount}
                            </span>
                        )
                    }
                </div>

                {
                    prop.isBestseller && (
                        <div className="home-product-item__favorite">
                            <span>BEST SALER</span>
                        </div>
                    )
                }
                {
                    prop.discountPercent !== undefined &&(
                        <div className="home-product-item__sale-off">
                            <span className="home-product-item__sale-off-label">SALE -{prop.discountPercent}% </span>
                        </div>
                    )
                }
            </div>
            <div className="home__product-item-glass">
                <Link to={`/ProductDetail/${prop.proId}`}>
                    <div className="item-glass-more">
                        <span className="glass-center">
                        <ArrowForwardOutline
                            color={'#00000'} 
                        />
                            <span >More</span>

                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default ItemProduct