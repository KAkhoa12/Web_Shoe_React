import React from 'react'
import {
    PaperPlaneOutline
} from 'react-ionicons'
import github from "../../assets/images/github.png"
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
const Footer = ():JSX.Element=>{

    return (
        <>
        <div className="home__product-contact">
                <div className="grid wide">
                    <div className="row" style={{padding:"25px 0"}}>
                        <div className=" col p-4 t-6 m-12 ">
                            <h3 className="home__product-contact_heading">FIND STORE NEAR YOU</h3>
                            <span className="btn btn--primary home__product-contact-btn">FIND A STORE</span>
                        </div>
                        <div className="  col p-4 t-6 m-12">
                            <h3 className="home__product-contact_heading">FOLLOW ME IN</h3>
                            <a href="https://github.com/KAkhoa12" target="_blank" className="home__product-contact_heading-icon-link">
                                <img src={github} className="home__product-contact-icon" alt="" />
                            </a>
                            <a href="https://www.facebook.com/huynhkhoa4889/" target="_blank" className="home__product-contact_heading-icon-link">
                                <img src={facebook} className="home__product-contact-icon" alt="" />
                            </a>
                            <a href="https://www.instagram.com/khoa_ka_0304/" target="_blank" className="home__product-contact_heading-icon-link">
                            <img src={instagram} className="home__product-contact-icon" alt="" />
                            </a>
                        </div>
                        <div className=" col p-4 t-6 m-12">
                            <h3 className="home__product-contact_heading">JOIN OUR EMAIL LIST</h3>
                            <span className="home__product-contact-decription">Subscribe for the latest product news, events, and updates.</span>
                            <div className="home__product-contact-sudmit">
                                <input type="text" className="home__product-contact-sudmit-input" />
                                <button className="home__product-contact-sudmit-btn ">
                                <PaperPlaneOutline
                                    color={'#ffffff'}
                                />
                                </button>
                            </div>
                            <h3 className="home__product-contact_heading">PREFER TEXT UPDATES?</h3>
                            <button className="home__product-contact-sudmit-sign-btn ">
                                SIGN UP FOR SMS ALEARTS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        <footer className="footer">
                <div className="footer__info">
                    <a href="#" className="footer__info-Logo-link">
                        <img src="./assets/img/LOGOWED.png" alt="" className="footer__info-Logo"/>
                    </a>
                    <div className="grid wide">
                        <div className="row">
                            <div className="col p-3 t-3 m12">
                                <h3 className="footer__info-heading">SHOP</h3>
                                <ul className="footer__info-list">
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link">Brand</a> </li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link"> Sneakers</a></li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link"> Boot</a></li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link">Hight wekk</a> </li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link">Sandan</a> </li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link">Men</a> </li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link">Women</a> </li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link">Child</a> </li>
                                </ul>
                            </div>
                            <div className="col p-3 t-3 m-12">
                                <h3 className="footer__info-heading">MY ACOUNT</h3>
                                <ul className="footer__info-list">
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link">Sign in</a> </li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link">Register</a> </li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link">Vip Discount</a> </li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link"> Primary Discount</a></li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link">Basic Discount</a> </li>
                                </ul>
                            </div>
                            <div className="col p-3 t-3 m-12">
                                <h3 className="footer__info-heading">GET HELP</h3>
                                <ul className="footer__info-list">
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link"> Help Center?</a></li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link"> Shopping guide</a></li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link"> Feedback via email</a> </li>
                                </ul>
                            </div>
                            <div className="col p-3 t-3 m-12">
                                <h3 className="footer__info-heading">ABOUT </h3>
                                <ul className="footer__info-list">
                                    <li className="footer__info-item"> <a href="./about_us.html" className="footer__info-item-link"> About us</a></li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link"> My git</a> </li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link">Responsibility</a> </li>
                                    <li className="footer__info-item"> <a href="#" className="footer__info-item-link">Newsroom</a> </li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="footer__license">
                            <div className="row">
                                <div className="col p-12">
                                    <span>
                                        ©2022 - Copyright belongs to KhoaKA12 - photos belongs to kingshoes.vn
                                    </span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col p-6">
                                    <a href="#" className="footer__license-link">
                                        Terms of Use
                                    </a>
                                    <a href="#" className="footer__license-link">
                                        Privacy Policy
                                    </a>
                                    <a href="#" className="footer__license-link">
                                        Fur Policy
                                    </a>
                                    <a href="#" className="footer__license-link">
                                        Interest-Based 
                                    </a>
                                    <a href="#" className="footer__license-link">
                                        Ads24/7 Customer Service (800) 927-7671
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer