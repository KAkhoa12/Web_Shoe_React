import React from "react"
import LayoutMain from "../../components/Layouts/LayoutMain"
import { PaperPlaneOutline,ArrowForwardOutline } from 'react-ionicons'
import Slider from 'react-slick'
import image1 from "../../assets/images/Baner1.png"
import image2 from "../../assets/images/Baner2.png"
import image3 from "../../assets/images/baner3.png"
import image5 from "../../assets/images/baner5.png"
import image6 from "../../assets/images/baner6.png"
import image7 from "../../assets/images/baner7.png"
import imageBaner1 from "../../assets/images/baner_people-1.jpg"
import imageBaner2 from "../../assets/images/baner_people-2.jpg"
import LoadingPage from "../../components/LazyLoad/LoadingPage"
import useFetch from "../../hooks/useFetch"
import ImageTest from "../../assets/images/name_shoe/Adidas/Adidas-4D-FUSIO-4tr2/giay-4d-fusio-fy3609-king-shoes-sneaker-real-hcm-1-1634377536.jpg"
import ListProductInBrand from "../../components/Card/ListBrandCartPro"
import ItemProduct from "../../components/Card/Product"
import { IProduct } from "../../interfaces/interfaces"
import { GetAllProduct } from "../../apis/Product"
import useAuth from "../../hooks/useAuth"
const Home = ():JSX.Element => {
    const [getAllProduct,callAllProduct] = useFetch();
    const {profile} = useAuth()
    const settings = {
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        arrows:false,
    }
    React.useEffect(()=>{
        callAllProduct(GetAllProduct);
    },[])
    
    // React.useEffect(() => {
    //     callAllUser(getAllUser)
    //   }, [])
    console.log(profile);
    
    return (
        <LayoutMain>
            <LoadingPage/>
            <div className="container"
                style={{
                    display: "block",
                    width:"100%",
                    overflowX:"hidden"
                  }}
            >
                <div className="grid wide">
                    <div className='carousel-wrapper' style={{marginTop:"50px"}}>
                        <Slider {...settings} lazyLoad='anticipated' >
                            <div className='carousel-items-banner'>
                                <img src={image1} alt='Image1' />
                            </div>
                            <div className='carousel-items-banner'>
                                <img src={image2} alt='Image2' />
                            </div>
                            <div className='carousel-items-banner'>
                                <img src={image6} alt='Image5' />
                            </div>
                            <div className='carousel-items-banner'>
                                <img src={image3} alt='Image3' />
                            </div>
                            <div className='carousel-items-banner'>
                                <img src={image5} alt='Image3' />
                            </div>
                            <div className='carousel-items-banner'>
                                <img src={image7} alt='Image3' />
                            </div>
                        </Slider>
                    </div>
                    <div className="col-p-12">

                        <div className="row">
                            <div className="col p-12">
                                <ListProductInBrand brandName='NIKE' pathToShopBrand='/'>
                                    {
                                        getAllProduct?.payload?.filter((r:IProduct)=>r.producer.trim().toLowerCase() === "nike")?.map((item:IProduct,index:number)=>(
                                            <div className="col p-2-4 t-4 m-6 " key={index}>
                                                <ItemProduct
                                                    isBestseller={true}
                                                    name={item.proName}
                                                    price={item.price}
                                                    discountPercent={10}
                                                />
                                            </div>
                                        ))
                                    }
                                </ListProductInBrand>
                            </div>
                        </div>

                    </div>
                    <div className="col p-12">
                        <div className="row">
                            <div className="home__product-ad home__product-brand hide-on-mobile">
                                <div className="row">
                                    <div className=" col p-4 t-5">
                                        <div className="home__product-ad-info">
                                            <h3 className="home__product-ad-heading">New style new look</h3>
                                            <p className="home__product-ad-decription">
                                                Comfortable for a new dynamic day with NIKE stepping straight into the future
                                            </p>
                                            <p className="home__product-ad-solgan">Just Do It </p>
                                        </div>
                                    </div>
                                    <div className=" col p-8 t-7 ">
                                        <img src={imageBaner1} alt="" className="home__product-ad-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="home__product-ad home__product-brand hide-on-pc-tablet">
                                <div className="row">
                                    <div className=" col p-8 t-7 m-12">
                                        <img src={imageBaner1} alt="" className="home__product-ad-img" />
                                    </div>
                                    <div className=" col p-4 t-5 m-12">
                                        <div className="home__product-ad-info">
                                            <h3 className="home__product-ad-heading">New style new look</h3>
                                            <p className="home__product-ad-decription">
                                                Comfortable for a new dynamic day with NIKE stepping straight into the future
                                            </p>
                                            <p className="home__product-ad-solgan">Just Do It </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col p-12">
                        <div className="row">
                            <div className="home__product-ad home__product-brand">
                                <div className="row">
                                    <div className="col p-8 t-7 m-12">
                                        <img src={imageBaner2} alt="" className="home__product-ad-img" />
                                    </div>
                                    <div className="col p-4 t-5 m-12">
                                        <div className="home__product-ad-info">
                                            <h3 className="home__product-ad-heading">Every one like Puma</h3>
                                            <p className="home__product-ad-decription">
                                                Comfortable for a new dynamic day with NIKE stepping straight into the future
                                            </p>
                                            <p className="home__product-ad-solgan">Make dreams come true </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col p-12">
                    <div className="row">
                        <div className="col p-12">
                            <a href="./whoops_sr.html">
                                <img src="./assets/img/Aterpay.jpg" alt="" className="home__product-AfterPay" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}
export default Home