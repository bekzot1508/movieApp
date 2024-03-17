import React from 'react'
import './navbar.scss'
import logo from '/public/logo.svg'
import logoText from '/public/logo-text.svg'
import { Link, NavLink } from 'react-router-dom'
import { navbar_links } from '../../constants'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__logo">
            <Link to={"/"}>
                <img src={logo} alt="" />
                <img src={logoText} alt="" />
            </Link>
        </div>

        <div className="navbar__menu">
            <ul>
                {navbar_links.map(item => (
                    <li key={item.route}>
                        <NavLink 
                          to={item.route}
                          className={({ isActive }) => isActive ? "active" : ""}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar