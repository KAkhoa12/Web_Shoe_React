import React from 'react'
import {
    ChevronDownOutline,
    HomeOutline,
    Search,
    CartOutline,
    RocketOutline,
    CubeOutline
} from 'react-ionicons'
import LogoWeb from '../../assets/images/LOGOWED.png'
import { Link, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { GetAllProductType } from '../../apis/ProductType'
import { IProductType, IChildrenNavbar, INavbar } from '../../interfaces/interfaces'
import ImageTest from "../../assets/images/name_shoe/Adidas/Adidas-4D-FUSIO-4tr2/giay-4d-fusio-fy3609-king-shoes-sneaker-real-hcm-1-1634377536.jpg"
import useAuth from '../../hooks/useAuth'
import { LogoutUser } from '../../apis/User'
const Header = (): JSX.Element => {
    const [getAllProductType, callAllProductType] = useFetch();
    const [logout,callLogout] = useFetch();
    const { profile } = useAuth();
    const navigate = useNavigate()
    const listNavbar: INavbar[] = [
        { name: "HOME", path: "/", icon: <HomeOutline color='#ffffff' style={{ display: 'flex', alignItems: 'center' }} /> },
        { name: "SHOP", path: "/Shop", icon: <CubeOutline color='#ffffff' style={{ display: 'flex', alignItems: 'center' }} /> },
        {
            name: "PRODUCER", path: "/", icon: <ChevronDownOutline color={'#ffffff'} style={{ display: 'flex', alignItems: 'center' }} />,
            children: [
                { name: "NIKE", path: "/" },
                { name: "PUMA", path: "/" },
                { name: "ADIDAS", path: "/" },
                { name: "JORDAN", path: "/" },
                { name: "GUCCI", path: "/" },
            ]
        },
        {
            name: "TYPE CATEGORY",
            path: "/",
            icon: <RocketOutline color={'#ffffff'} style={{ display: 'flex', alignItems: 'center' }} />,
            children: [...(getAllProductType?.payload?.slice(0, 5) || []).map((item: IProductType, index: number) => ({
                name: item.proTypeName,
                path: "/"
            })),
            {
                name: "Xem thêm",
                path: "/more"
            }]
        }
    ]
    const handleSignOut =async ():Promise<void>=>{
        try{
            await callLogout(LogoutUser)
            await navigate("/Login")
        }catch(error){
            console.log(error)
        }
    }
    React.useEffect(() => {
        callAllProductType(GetAllProductType);
    }, [])
    return (
        <>
            <div className="header">
                <div className="grid wide">
                    <nav className="header__navbar">
                        <div className="header__navbar-header">
                            <ul className="header__navbar-list hide-on-mobile-tablet">
                                <li className="header_navbar-items border-btn-s">
                                    <i className="fa-solid fa-phone"></i>
                                    <span className=""> Hotline: +8412345678</span>
                                </li>
                                <li className="header_navbar-items header_navbar-items-socials">
                                    <span className="header__navbar-item-no-pointer">
                                        Connect with us
                                    </span>
                                    <a href="https://www.facebook.com/huynhkhoa85/" target="_blank" className="header__navbar-icon-link">
                                        <i className="header__navbar-icon fa-brands fa-facebook"></i>
                                    </a>
                                    <a href="https://www.instagram.com/khoa_ka_0304/" target="_blank" className="header__navbar-icon-link">
                                        <i className="header__navbar-icon fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                            <Link to={'/'} className="header__logo hide-on-mobile">
                                <img src={LogoWeb} alt="" />
                            </Link>
                            <ul className="header__navbar-list hide-on-mobile-tablet">

                                {
                                    profile ? (
                                        <>
                                            <li 
                                                style={{
                                                    display:"flex",
                                                    alignItems:"center",
                                                    gap:"20px"
                                                }}
                                            className="header_navbar-items">
                                                <h3 
                                                    style={{
                                                        color:"white",
                                                        fontSize:"20px"
                                                    }}
                                                >Xin chào {profile.userName}</h3>
                                                <span
                                                    style={{
                                                        textDecoration: "none",
                                                        height:"auto"
                                                    }}
                                                    onClick={handleSignOut}
                                                    className="header_navbar-user header_navbar-register  border-btn-m--hover"
                                                >
                                                    Sign Out
                                                </span>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li className="header_navbar-items border-btn-m">
                                                <Link
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "var(--primary-color-text)"
                                                    }}
                                                    to={'/Login'} className="header_navbar-user header_navbar-login "
                                                >
                                                    Log in
                                                </Link>
                                            </li>
                                            <li className="header_navbar-items border-btn-m--hover">
                                                <Link
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                    to={'/Register'}
                                                    className="header_navbar-user header_navbar-register"
                                                >
                                                    Register
                                                </Link>
                                            </li></>
                                    )
                                }
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
            <div className="header__scroll">
                <div className="grid wide">
                    <nav className="header_navbar">

                        <div className="header-with-search">
                            <label htmlFor="nav__mobile-input" className="nav__bar-btn">
                                <i className="fa-solid fa-bars nav__bar-btn-icon"></i>
                            </label>
                            <div className="header__navbar-search">
                                <div className="header__search-input-wrap">
                                    <input type="text" className="header__search-input" placeholder="What do you need to find ?
                                    "/>
                                    <div className="header__search-history">
                                        <h3 className="header__search-history-heading">
                                            Search history
                                        </h3>
                                        <ul className="header__search-history-list">
                                            <li className="header__search-history-items">
                                                <a href="./index.html">NIKE_AIR_FORCE_1</a>
                                            </li>
                                            <li className="header__search-history-items">
                                                <a href="./index.html">NIKE_AIR_FORCE_1</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="header__search-button">
                                        <Search
                                            color={'#ffffff'}
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="header__cart">
                                <div className="header__cart-wrap">
                                    <a href="./cart.html" className="header__cart-wrap-link">
                                        <CartOutline
                                            color={'#ffffff'}
                                            height="40px"
                                            width="40px"
                                        />
                                    </a>
                                    <span>
                                        <span className="header__cart-number">6</span>
                                    </span>
                                    <div className="header__cart-list hide-on-mobile-tablet">

                                        <h4 className="header__cart-heading">
                                            Product added
                                        </h4>
                                        <ul className="header__cart-list-items">
                                            <a href="./"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <li className="header__cart-items">
                                                    <img src={ImageTest} alt="" className="header__cart-img" />
                                                    <div className="header__cart-info">
                                                        <div className="header__cart-items-head">
                                                            <h5 className="header__cart-items-name">NIKE_AIR_FORCE_1</h5>
                                                            <div className="header__cart-item-price-wrap">
                                                                <span className="header__cart-items-price">$100.00</span>
                                                                <span className="header__cart-items-mutify">x</span>
                                                                <span className="header__cart-items-qnt">2</span>
                                                            </div>
                                                        </div>
                                                        <div className="header__cart-items-body">
                                                            <span className="header__cart-items-drecription">
                                                                Type: White
                                                            </span>
                                                            <span className="header__cart-items-remove">Remove</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </a>
                                            <a href="./"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <li className="header__cart-items">
                                                    <img src={ImageTest} alt="" className="header__cart-img" />
                                                    <div className="header__cart-info">
                                                        <div className="header__cart-items-head">
                                                            <h5 className="header__cart-items-name">NIKE_AIR_FORCE_1</h5>
                                                            <div className="header__cart-item-price-wrap">
                                                                <span className="header__cart-items-price">$100.00</span>
                                                                <span className="header__cart-items-mutify">x</span>
                                                                <span className="header__cart-items-qnt">2</span>
                                                            </div>
                                                        </div>
                                                        <div className="header__cart-items-body">
                                                            <span className="header__cart-items-drecription">
                                                                Type: White
                                                            </span>
                                                            <span className="header__cart-items-remove">Remove</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </a>
                                            <a href="./"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <li className="header__cart-items">
                                                    <img src={ImageTest} alt="" className="header__cart-img" />
                                                    <div className="header__cart-info">
                                                        <div className="header__cart-items-head">
                                                            <h5 className="header__cart-items-name">NIKE_AIR_FORCE_1</h5>
                                                            <div className="header__cart-item-price-wrap">
                                                                <span className="header__cart-items-price">$100.00</span>
                                                                <span className="header__cart-items-mutify">x</span>
                                                                <span className="header__cart-items-qnt">2</span>
                                                            </div>
                                                        </div>
                                                        <div className="header__cart-items-body">
                                                            <span className="header__cart-items-drecription">
                                                                Type: White
                                                            </span>
                                                            <span className="header__cart-items-remove">Remove</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </a>
                                            <a href="./"
                                                style={{
                                                    textDecoration: "none"
                                                }}
                                            >
                                                <li className="header__cart-items">
                                                    <img src={ImageTest} alt="" className="header__cart-img" />
                                                    <div className="header__cart-info">
                                                        <div className="header__cart-items-head">
                                                            <h5 className="header__cart-items-name">NIKE_AIR_FORCE_1</h5>
                                                            <div className="header__cart-item-price-wrap">
                                                                <span className="header__cart-items-price">$100.00</span>
                                                                <span className="header__cart-items-mutify">x</span>
                                                                <span className="header__cart-items-qnt">2</span>
                                                            </div>
                                                        </div>
                                                        <div className="header__cart-items-body">
                                                            <span className="header__cart-items-drecription">
                                                                Type: White
                                                            </span>
                                                            <span className="header__cart-items-remove">Remove</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </a>
                                            <a href="./"
                                                style={{
                                                    textDecoration: "none"
                                                }}
                                            >
                                                <li className="header__cart-items">
                                                    <img src={ImageTest} alt="" className="header__cart-img" />
                                                    <div className="header__cart-info">
                                                        <div className="header__cart-items-head">
                                                            <h5 className="header__cart-items-name">NIKE_AIR_FORCE_1</h5>
                                                            <div className="header__cart-item-price-wrap">
                                                                <span className="header__cart-items-price">$100.00</span>
                                                                <span className="header__cart-items-mutify">x</span>
                                                                <span className="header__cart-items-qnt">2</span>
                                                            </div>
                                                        </div>
                                                        <div className="header__cart-items-body">
                                                            <span className="header__cart-items-drecription">
                                                                Type: White
                                                            </span>
                                                            <span className="header__cart-items-remove">Remove</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </a>
                                            <a href="./"
                                                style={{
                                                    textDecoration: "none"
                                                }}
                                            >
                                                <li className="header__cart-items">
                                                    <img src={ImageTest} alt="" className="header__cart-img" />
                                                    <div className="header__cart-info">
                                                        <div className="header__cart-items-head">
                                                            <h5 className="header__cart-items-name">NIKE_AIR_FORCE_1</h5>
                                                            <div className="header__cart-item-price-wrap">
                                                                <span className="header__cart-items-price">$100.00</span>
                                                                <span className="header__cart-items-mutify">x</span>
                                                                <span className="header__cart-items-qnt">2</span>
                                                            </div>
                                                        </div>
                                                        <div className="header__cart-items-body">
                                                            <span className="header__cart-items-drecription">
                                                                Type: White
                                                            </span>
                                                            <span className="header__cart-items-remove">Remove</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </a>

                                        </ul>
                                        <a href="./cart.html" className="header__cart-buys-cart">
                                            <span className="header__cart-view-cart ">View cart more
                                                <i className="fa-solid fa-arrow-right item-glass-more-icon"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header__navbar-nav hide-on-mobile-tablet">
                            <ul className="header__navbar-nav-list">
                                {
                                    listNavbar?.map((item: INavbar, index: number) => (
                                        <li key={index} className="header__navbar-nav-items">
                                            <Link to={item.path} className="header__navbar-nav-items-link">
                                                {item.name}
                                            </Link>
                                            {item.icon}
                                            {
                                                Array.isArray(item.children) && item.children.length > 0 ? (
                                                    <div className="header__ul-nav">
                                                        <ul className="header__ul-nav-list">
                                                            {
                                                                item?.children?.map((child: IChildrenNavbar, i: number) => (
                                                                    <li key={i} className="header__li-nav-items">
                                                                        <Link to={child.path}>{child.name}</Link>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                ) : (
                                                    null
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <input type="checkbox" hidden className="nav__input" id="nav__mobile-input" />
                        <label htmlFor="nav__mobile-input" className="nav__over-play"></label>
                        <div className="header__navbar-nav_tablet-mobile ">
                            <label htmlFor="nav__mobile-input" className="nav__mobile-close">
                                <i className="fa-solid fa-xmark nav__bar-btn-icon-box"></i>
                            </label>
                            <ul className="header__navbar-nav-list_mobile">
                                <li className="header__navbar-nav-items_mobile-tablet">
                                    <a href="#" className="header__navbar-nav-items-link">
                                        home
                                    </a>
                                </li>
                                <li className="header__navbar-nav-items_mobile-tablet">
                                    <a href="" className="header__navbar-nav-items-link">
                                        brand stuff
                                    </a>

                                </li>
                                <li className="header__navbar-nav-items_mobile-tablet">
                                    <a href="" className="header__navbar-nav-items-link">
                                        type shoes


                                    </a>

                                </li>
                                <li className="header__navbar-nav-items_mobile-tablet">
                                    <a href="" className="header__navbar-nav-items-link">
                                        accessory

                                    </a>

                                </li>
                                <li className="header__navbar-nav-items_mobile-tablet">
                                    <a href="#home__product-best-seller" className="header__navbar-nav-items-link">
                                        bestseller

                                    </a>
                                </li>
                                <li className="header__navbar-nav-items_mobile-tablet">
                                    <a href="" className="header__navbar-nav-items-link">
                                        sale in week

                                    </a>
                                    <i className="fa-solid fa-biohazard"></i>
                                </li>
                            </ul>
                            <ul className="header__navbar-list_mobile-tablet">
                                <li className="header_navbar-items border-btn-m">
                                    <a
                                        style={{
                                            textDecoration: "none",
                                            color: "var(--primary-color-text)"
                                        }}
                                        href="./Login.html"
                                        target="_blank"
                                        className="header_navbar-user header_navbar-login "
                                    >
                                        Log in
                                    </a>
                                </li>
                                <li className="header_navbar-items border-btn-m--hover">
                                    <a
                                        style={{
                                            textDecoration: "none",
                                        }}
                                        target="_blank"
                                        href="./Register.html"
                                        className="header_navbar-user header_navbar-register"
                                    >
                                        Register
                                    </a>
                                </li>
                            </ul>
                            <a href="./index.html" className="header__logo-sud-nav hide-on-pc-tablet">
                                <img src="./assets/img/LOGOWED.png" alt="" />
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header

