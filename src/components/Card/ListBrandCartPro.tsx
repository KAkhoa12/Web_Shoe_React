import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowForwardOutline } from 'react-ionicons'

interface IPropInUse {
    brandName: string,
    children: JSX.Element[] | undefined,
    pathToShopBrand: string
}
const ListProductInBrand = ({...prop}:IPropInUse): JSX.Element => {
    return (
        <div className='home__product-brand'>
            <Link to={prop.pathToShopBrand} className="home__product-brand-link">
                <h3 className="home-product_brand-heding">
                    {prop.brandName}  &nbsp;
                    <ArrowForwardOutline
                        style={{color:"inherit"}}
                    />
                </h3>
            </Link>
            <div className="row">
                {prop.children}
            </div>
        </div>
    )
}
export default ListProductInBrand