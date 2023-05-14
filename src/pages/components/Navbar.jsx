import React from 'react'
import '../../styles/Navbar.scss'

import { FiHome, FiShieldOff, FiSettings, FiInfo, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__logo">
            <div className="navbar__logo-icon">C</div>
        </div>
        <ul className="navbar__links">
            <li className="navbar__links-item">
                <a href="/home">
                <FiHome className="navbar__links-icon" />
                Home
                </a>
            </li>
            <li className="navbar__links-item">
                <a href="/spam">
                <FiShieldOff className="navbar__links-icon" />
                Spam
                </a>
            </li>
            <li className="navbar__links-item">
                <a href="#">
                <FiSettings className="navbar__links-icon" />
                Settings
                </a>
            </li>
            <li className="navbar__links-item">
                <a href="#">
                <FiInfo className="navbar__links-icon" />
                About
                </a>
            </li>
        </ul>
        <div className="navbar__logout">
        <button className="navbar__logout-button">
            <FiLogOut className="navbar__logout-icon" />
            Logout
        </button>
        </div>
    </div>
  )
}

export default Navbar
