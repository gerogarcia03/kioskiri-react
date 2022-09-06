import React from 'react';
import Logo from '../../Assets/kioskiriLogo.jpg';
import '../Header/Header.css';
import NavBar from './nav/NavBar';


export const Header = () => {
    return (
        <header>
            <img class='logo' src={Logo} alt='logo' />
            <NavBar/>
        </header>
    )
}

export default Header