import React from 'react'
import h from './Header.module.css'
import logo from "../../Pictures/Logo.png";


const Header = () => {
    return (
        <header className={h.header}>
            <img src={logo} alt={logo}/>
        </header>
    )
}

export default Header