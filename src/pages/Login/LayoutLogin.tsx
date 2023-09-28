import React from 'react'
import '../../assets/css/logInCss.css'
import { Link } from 'react-router-dom'
interface Props{
    children:any | JSX.Element
    title:string
}

const LayoutLogin = ({...prop}:Props): JSX.Element => {
    return (
        <div className="modal">
            <div className="modal_body">
                <div className="auth-from_header">
                    <Link to={"/"}><i className="fa-solid fa-arrow-left-long"></i></Link>
                    <h3>{prop.title}</h3>
                </div>
                <div className="auth-form">
                    {prop.children}
                </div>
            </div>
        </div>

    )
}
export default LayoutLogin