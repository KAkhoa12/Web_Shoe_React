import React from 'react'
import ImageTest from "../../assets/images/name_shoe/Adidas/Adidas-4D-FUSIO-4tr2/giay-4d-fusio-fy3609-king-shoes-sneaker-real-hcm-1-1634377536.jpg"
import LayoutMain from '../../components/Layouts/LayoutMain'
import useAuth from '../../hooks/useAuth'
import Comments from './comments'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { GetProductsById } from '../../apis/Product'
import { IProduct } from '../../interfaces/interfaces'
const ProductDetail = ():JSX.Element=>{
    const {profile} = useAuth()
    const navigate = useNavigate()
    const {id} = useParams()
    const [product,setProduct] = React.useState<IProduct | undefined>()
    const [hasChange,setHasChange] = React.useState<boolean>(true)
    const [getProductById,callProductById] = useFetch()
    
    const handleHaschangeProduct = ():void=>{
        setHasChange(r=>!r)
    }
    React.useEffect(()=>{
        const request: { _id: string | undefined} = { _id: id };
        callProductById(async () => {
            try {
              const resposive = await GetProductsById(request)
              setProduct(resposive)
              
            }catch(error){
                console.log(error);
                
            }
        });
    }, [hasChange]);
    return(
        <LayoutMain>
            <div className="container">
                <div className="grid wide">
                    {/* <div className="row">
                        <div className="col p-12 m-0">
                            <div className="product-point-only">
                                <a href="./index.html">Home</a> >> <a href="./category.html">Category</a> >> <a href="./nike_brand.html">Nike</a> >> <span>NIKE_AIR_FORCE_1</span>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col p-12">
                            <div className="product-item-review">
                                <div className="row">
                                    <div className="col p-4 t-5 m-12">
                                        <div className="product-item-review-img">
                                            <div id="product-item-review-img-frame" style={{
                                                backgroundImage:`url(${ImageTest})`
                                            }}></div>
                                            <div className="row">
                                                <div className="col p-3 t-5 m-2">
                                                    <img src="./assets/img/name_shoe/Adidas/Adidas-Adizero-Boston-10-3tr2/Adidas-Adizero-Boston-10-1.jpg" alt="shoes" className="product-item-review-img-link-sud"  />  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col p-8 t-7 m-12">
                                        <div className="product-item-review-img-info">
                                            <h1 className="review-img-name">{product?.proName}</h1>
                                            <span className="review-img-name-decription">The best your choise</span>
                                            <div className="product-item-review-price">
                                                <span className="product-item-review-price-new">$100.00</span>
                                                <span className="product-item-review-price-old">$120.00</span>
                                            </div>
                                            <div>
                                                <div className="product-item-review-free-ship">
                                                    <span><i className="fa-solid fa-box"></i> Free ship</span>
                                                </div>
                                                <a href="" className="review-img-bestseller-link">
                                                    <span className="review-img-bestseller">
                                                        BESTSELLER
                                                    </span>
                                                </a>
                                                <span className="review-img-distcount">
                                                    - 10% 
                                                </span>

                                            </div>
                                            <div className="review-img-color">
                                                <span className="review-img-color-name">Color: </span>
                                                <div className="review-img-color-link-btn hide-on-pc-tablet">
                                                    <button className="review-img-color-btn">Red</button>
                                                    <button className="review-img-color-btn">Yelow</button>
                                                    <button className="review-img-color-btn">Fire work </button>
                                                    <button className="review-img-color-btn">Black</button>
                                                </div>
                                                <div className="row hide-on-mobile">
                                                    <div className="col p-1 t-2">
                                                        <img src="./assets/img/name_shoe/Adidas/Adidas-Adizero-Boston-10-3tr2/Adidas-Adizero-Boston-10-1.jpg" alt="" className="review-img-color-link" />
                                                    </div>
                                                    <div className=" p-1 t-2">
                                                        <img src="./assets/img/name_shoe/Adidas/Adidas-FORUM-LOW-BLUE-2tr9/Adidas-FORUM-LOW-BLUE-1.jpg" alt="" className="review-img-color-link" />
                                                    </div>
                                                    <div className=" p-1 t-2">
                                                        <img src="./assets/img/name_shoe/Adidas/Adidas-SUPERSTAR-1tr950/Adidas-SUPERSTAR-1.jpeg" alt="" className="review-img-color-link" />
                                                    </div>
                                                    <div className=" p-1 t-2">
                                                        <img src="./assets/img/name_shoe/Adidas/Adidas-SWIFT-RUN-X-1tr950/Adidas-SWIFT-RUN-X-1.jpeg" alt="" className="review-img-color-link" />
                                                    </div>
                                                    <div className="col p-1 t-2">
                                                        <img src="./assets/img/name_shoe/Adidas/Adidas-ULTRA-4D-5-5tr8/Adidas-ULTRA-4D-5-1.jpg" alt="" className="review-img-color-link" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review-img-size">
                                                <span className="review-size-name">Size: </span>
                                                <div className="review-size-name-btn">
                                                    <button className="review-size-name-btn-number">7</button>
                                                    <button className="review-size-name-btn-number">8</button>
                                                    <button className="review-size-name-btn-number">9</button>
                                                    <button className="review-size-name-btn-number">10</button>
                                                    <button className="review-size-name-btn-number">12</button>
                                                    <button className="review-size-name-btn-number">13</button>
                                                    <button className="review-size-name-btn-number">14</button>
                                                    <button className="review-size-name-btn-number">15</button>
                                                    <button className="review-size-name-btn-number">7</button>
                                                    
                                                </div>
                                            </div>
                                            <div className="review-buy-product">
                                                <button className="review-buy-product-btn review-buy-product-btn-add ">
                                                    <i className="fa-solid fa-cart-plus"></i>
                                                    Add to cart 
                                                </button>
                                                <a href="./cart.html">
                                                    <button className="review-buy-product-btn review-buy-product-btn-buy">
                                                        Buy
                                                    </button>                                                   
                                                </a>
                                            </div>
                                            <div className="review-rating">
                                                <span className="rating-heart">
                                                    <input type="checkbox" hidden id="item__like" className="item__item-checked"/>
                                                    <label htmlFor="item__like" className="item__like-empty">
                                                        <i className="fa-regular fa-heart"></i>
                                                    </label>
                                                    <label htmlFor="item__like" className="item__like-fill">
                                                        <i className="fa-solid fa-heart"></i>
                                                    </label>
                                                    <span>44</span>
                                                </span>
                                                <span className="rating-star">
                                                    <i className="fa-solid fa-star home-product-item__rating-active"></i>
                                                    <i className="fa-solid fa-star home-product-item__rating-active"></i>
                                                    <i className="fa-solid fa-star home-product-item__rating-active"></i>
                                                    <i className="fa-solid fa-star home-product-item__rating-active"></i>
                                                    <i className="fa-solid fa-star home-product-item__rating-active"></i>
                                                </span>
                                                <span className="rating-comment">
                                                    <i className="fa-solid fa-comment"></i>
                                                    22 comments
                                                </span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col p-12">
                            <div
                                style={{
                                    backgroundColor:"white",
                                    padding:"10px",
                                    margin:"30px"
                                }}
                            >
                                <h3 style={{fontSize:"25px",fontWeight:"bold"}}>Các bình luận</h3>
                                <div
                                    style={{
                                        padding:"10px 30px",
                                        
                                    }}
                                >
                                    <Comments 
                                        product={product} 
                                        hasChange={handleHaschangeProduct}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>                 
                </div>         
            </div>
        </LayoutMain>
    )
}
export default ProductDetail