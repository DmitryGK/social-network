import React from 'react'
import './Header.module.css'
import logo from "../Pictures/Logo.png";


const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt={logo}/>
        </header>
    )
}

export default Header