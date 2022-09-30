import React from 'react';
import CartIcon from './CartWidget';
import '../../Header/Header.css';
import { Link, NavLink } from 'react-router-dom';


const NavBar = ({ greeting }) => {

    return (
        <header>
            <Link to='/'>
                <img className='logo' src={'../Assets/kioskiriLogo.jpg'} alt='logo'></img>
            </Link>
            <h1>{greeting}</h1>
            <nav>
                <ul className='lista'>
                    <li><Link to='/categoria/Bebidas'>BEBIDAS</Link></li>
                    <li><Link to='/categoria/Galletitas'>GALLETITAS</Link></li>
                    <li><Link to='/categoria/Snacks'>SNACKS</Link></li>
                    <li><Link to='/categoria/Golosinas'>GOLOSINAS</Link></li>
                    <li>
                        <Link to='/Cart'> <CartIcon />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar