import React from 'react';
import CartIcon from './CartWidget';
import '../../Header/Header.css';
import { Link, NavLink } from 'react-router-dom';


const NavBar = ({greeting}) => {

    return (
        <header>
            <Link to='/'>
                <img className='logo' src={'../Assets/kioskiriLogo.jpg'} alt='logo'></img>
            </Link>
            <h1>{greeting}</h1>
            <nav>
                <li>
                    <Link to='/categoria/productos'> PRODUCTOS</Link>
                </li>
                <li>
                    <Link to='/categoria/sobreNosotros'> SOBRE NOSOTROS</Link>
                </li>
                <li>
                    <Link to='/categoria/miCuenta'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    </Link>
                </li>
                <li>
                    <Link to='/categoria/cart'> <CartIcon />
                    </Link>
                </li>
            </nav>
        </header>
    )
}

export default NavBar