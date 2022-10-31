import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer'>
                    <h4>Redes Sociales</h4>
                    <a href="https://www.instagram.com/kioskiri/?hl=es"><img src="../Assets/logoinsta.jpg" alt="logo instagram" /></a>
                    <a href=""><img src="../Assets/twitterlogo.jpg" alt="logo twitter" /></a>
                    <div className='bases'>
                        <h2>Bases y Condiciones</h2>
                        <p>Al acceder o usar la página web de nuestro servicio, usted aprueba que haya leído, entendido y aceptado
                            estar sujeto a estos Términos</p>
                        <Link to='/'>
                            <img className='logo' src="../Assets/Kioskiri-Logo-2.png" alt="logo Kioskiri" />
                        </Link>
                    </div>
                </div>
                <div className='footerList'>
                    <ul>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/'>Productos</Link></li>
                        <li><Link to='/Menu/miCuenta'>Mi Cuenta</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export { Footer }

