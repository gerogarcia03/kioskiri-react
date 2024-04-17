import React from 'react';
import CartIcon from './CartWidget';
import '../../Header/Header.css';
import { Link } from 'react-router-dom';


const NavBar = ({ greeting }) => {

    return (
        <header>
            <Link to='/'>
                <img className='logo' src='https://res.cloudinary.com/dpkvx3lfj/image/upload/v1667265086/Kioskiri-Logo-2_fqrxhn.png' alt='logo'></img>
            </Link>
            <nav>
                <ul className='lista'>
                    <li>
                        <p><Link to='../'><strong>PRODUCTOS</strong></Link></p>
                        <ul className='dropdown'>
                            <li><Link to='/Categoria/Bebidas'>Bebidas</Link></li>
                            <li><Link to='/Categoria/Galletitas'>Galletitas</Link></li>
                            <li><Link to='/Categoria/Snacks'>Snacks</Link></li>
                            <li><Link to='/Categoria/Golosinas'>Golosinas</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/Menu/sobreNosotros'> SOBRE NOSOTROS</Link>
                    </li>
                    <li>
                        <Link to='/Menu/miCuenta'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Menu/Cart'> <CartIcon />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar