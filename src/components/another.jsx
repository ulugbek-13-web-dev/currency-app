import React from 'react'
import logo from '../assets/logo.jpg'
import './navbar.css'

function Navbar() {
    return (
        <div className='navbar-main'>
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-asosiy">
                <div className="navbar-list">
                    <ul>
                        <li>Crytocurrency</li>
                        <li>Exchanges</li>
                        <li>Watchlist</li>
                        <li>NFT</li>
                        <li>Portfolio</li>
                        <li>Products</li>
                    </ul>
                </div>
                <div className="navbar-btns">
                    <button className='login-navbar'>Log In</button>
                    <button className='signup-navbar'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
export default Navbar