import React from 'react'
import './navbar.scss'
import logo from '/public/logo.svg'
import logoText from '/public/logo-text.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__logo">
            <a href="#">
                <img src={logo} alt="" />
                <img src={logoText} alt="" />
            </a>
        </div>

        <div className="navbar__menu">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">TV shows</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar