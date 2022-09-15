import React from 'react';
import Logo from '../../../Assets/kioskiriLogo.jpg';
import CartIcon from './CartWidget';
import '../../Header/Header.css'

const NavBar = () => {

    return (
        <header>
            <a href=''>
                <img className='logo' src={Logo} alt='logo'></img>
            </a>
            <nav>
                <li>
                    <a href=''> PRODUCTOS</a>
                </li>
                <li>
                    <a href=''> SOBRE NOSOTROS</a>
                </li>
                <li>
                    <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    </a>
                </li>
                <li>
                    <a href=''> <CartIcon />
                    </a>
                </li>
            </nav>
        </header>
    )
}

export default NavBar