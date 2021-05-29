import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icons/menu.svg'
import Cancel from './icons/cancel.svg'
import Cart from './icons/cart.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    const value = useContext(GlobalState)
    return (
        <div>
            <header>
                <div className="menu">
                    <img src={Menu} width="60"/>
                </div>
                <div className="logo">
                    <h1>
                        <Link to="/">Khiem Pham</Link>
                    </h1>
                </div>
                <ul>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/login">Login || Register</Link></li>
                    <li>
                        <img src={Cancel} width="30" className="menu"/>
                    </li>
                </ul>
                <div className="cart-icon">
                    <span>0</span>
                    <Link to="/cart">
                        <img src={Cart} width="30"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Header
