import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

interface Props{
    children:any | JSX.Element
}

const LayoutMain = ({children}:Props):JSX.Element=>{

    return(
        <>
            <div className='app'>
                <Header/>
                {children}
                <Footer/>
            </div>
        </>
    )
}

export default LayoutMain