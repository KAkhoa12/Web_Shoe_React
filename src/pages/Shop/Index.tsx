import React from 'react'
import LayoutMain from '../../components/Layouts/LayoutMain'
import LoadingPage from '../../components/LazyLoad/LoadingPage'
import { ChevronForwardOutline } from 'react-ionicons'
import { Link } from 'react-router-dom'
import ListProductInBrand from '../../components/Card/ListBrandCartPro'
import useFetch from '../../hooks/useFetch'
import { GetAllAllProductByProducer, GetAllProduct } from '../../apis/Product'
import { IProduct } from '../../interfaces/interfaces'
import ItemProduct from '../../components/Card/Product'
import AlterPay from "../../assets/images/Aterpay.jpg"
const Shop = (): JSX.Element => {

    const [getAllProduct,callAllProduct] = useFetch();

    React.useEffect(()=>{
        callAllProduct(GetAllProduct);
    },[])

    console.log(getAllProduct?.payload);
    
    return (
        <LayoutMain>
            <LoadingPage />
            <div className="container">
                <div className="grid wide">
                    <div className="row">
                        <div className="col p-12">
                            <div className="product-point-only hide-on-mobile">
                                <Link to={"/"}>Home</Link>
                                <ChevronForwardOutline
                                    color={'#00000'}
                                />
                                <Link to={"/Shop"}>Shop</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col p-12 hide-on-pc-tablet">
                            <div className="category-sud">
                                <ul className="category-sud-list">
                                    <li className="category-sud-item">
                                        season
                                        <i className="fa-solid fa-caret-down"></i>
                                        <ul className="category-sudnav-list">
                                            <li className="category-sudnav-item">Winter</li>
                                            <li className="category-sudnav-item">Sumer</li>
                                            <li className="category-sudnav-item">Fall</li>
                                            <li className="category-sudnav-item">Spring</li>
                                        </ul>
                                    </li>
                                    <li className="category-sud-item">
                                        season
                                        <i className="fa-solid fa-caret-down"></i>
                                        <ul className="category-sudnav-list">
                                            <li className="category-sudnav-item">Winter</li>
                                            <li className="category-sudnav-item">Sumer</li>
                                            <li className="category-sudnav-item">Fall</li>
                                            <li className="category-sudnav-item">Spring</li>
                                        </ul>
                                    </li>
                                    <li className="category-sud-item">
                                        season
                                        <i className="fa-solid fa-caret-down"></i>
                                        <ul className="category-sudnav-list">
                                            <li className="category-sudnav-item">Winter</li>
                                            <li className="category-sudnav-item">Sumer</li>
                                            <li className="category-sudnav-item">Fall</li>
                                            <li className="category-sudnav-item">Spring</li>
                                        </ul>
                                    </li>
                                    <li className="category-sud-item">
                                        season
                                        <i className="fa-solid fa-caret-down"></i>
                                        <ul className="category-sudnav-list">
                                            <li className="category-sudnav-item">Winter</li>
                                            <li className="category-sudnav-item">Sumer</li>
                                            <li className="category-sudnav-item">Fall</li>
                                            <li className="category-sudnav-item">Spring</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col p-2 t-3 hide-on-mobile">
                            <nav className="category">
                                <h3>
                                    <i className="category__heading-icon fa-solid fa-list-ul"></i>
                                    Category
                                </h3>
                                <span className="category__heading-content"> <i className="fa-solid fa-caret-right"></i> season</span>
                                <ul className="category__list">
                                    <li className="category__item">Spring</li>
                                    <li className="category__item">Sumer</li>
                                    <li className="category__item">Fall</li>
                                    <li className="category__item">Winter</li>
                                    <li className="category__item">School</li>
                                </ul>
                                <span className="category__heading-content"> <i className="fa-solid fa-caret-right"></i> season</span>
                                <ul className="category__list">
                                    <li className="category__item">Spring</li>
                                    <li className="category__item">Sumer</li>
                                    <li className="category__item">Fall</li>
                                    <li className="category__item">Winter</li>
                                    <li className="category__item">School</li>
                                </ul>
                                <span className="category__heading-content"> <i className="fa-solid fa-caret-right"></i> season</span>
                                <ul className="category__list">
                                    <li className="category__item">Spring</li>
                                    <li className="category__item">Sumer</li>
                                    <li className="category__item">Fall</li>
                                    <li className="category__item">Winter</li>
                                    <li className="category__item">School</li>
                                </ul>
                                <span className="category__heading-content"> <i className="fa-solid fa-caret-right"></i> season</span>
                                <ul className="category__list">
                                    <li className="category__item">Spring</li>
                                    <li className="category__item">Sumer</li>
                                    <li className="category__item">Fall</li>
                                    <li className="category__item">Winter</li>
                                    <li className="category__item">School</li>
                                </ul>
                                <span className="category__heading-content"> <i className="fa-solid fa-caret-right"></i> season</span>
                                <ul className="category__list">
                                    <li className="category__item">Spring</li>
                                    <li className="category__item">Sumer</li>
                                    <li className="category__item">Fall</li>
                                    <li className="category__item">Winter</li>
                                    <li className="category__item">School</li>
                                </ul>
                                <span className="category__heading-content"> <i className="fa-solid fa-caret-right"></i> season</span>
                                <ul className="category__list">
                                    <li className="category__item">Spring</li>
                                    <li className="category__item">Sumer</li>
                                    <li className="category__item">Fall</li>
                                    <li className="category__item">Winter</li>
                                    <li className="category__item">School</li>
                                </ul>

                            </nav>
                        </div>
                        <div className="col p-10">
                            <ListProductInBrand brandName='NIKE' pathToShopBrand='/'>
                                {
                                    getAllProduct?.payload?.filter((r:IProduct)=>r.producer.trim().toLowerCase() === "nike")?.map((item:IProduct,index:number)=>(
                                        <div className="col p-2-4 t-4 m-6 " key={index}>
                                            <ItemProduct
                                                isBestseller={true}
                                                name={item.proName}
                                                price={item.price}
                                                discountPercent={10}
                                                proId={item._id}
                                            />
                                        </div>
                                    ))
                                }
                            </ListProductInBrand>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col p-12">
                            <div className="row">
                                <div className="col p-12 ">
                                    <a href="./whoops_sr.html" style={{marginTop:"30px",display:"block"}}>
                                        <img src={AlterPay} alt="" className="home__product-AfterPay" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}
export default Shop