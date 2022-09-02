import React from 'react';
import Logo from '../Assets/kioskiriLogo.jpg';
import './Header.css'

export const Header = () => {
    return (
        <header>
            <img class= 'logo' src={Logo} alt='logo' />
            <nav>
                <li>
                    <a href=''> PRODUCTOS</a>
                </li>
                <li>
                    <a href=''> SOBRE NOSOTROS</a>
                </li>
                <li>
                    <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    </a>
                </li>
                <li>
                    <a href=''> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(126, 124, 124)" class="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    </a>
                </li>
            </nav>
        </header>
    )
}

export default Header