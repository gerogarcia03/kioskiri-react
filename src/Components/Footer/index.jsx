import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer'>
                    <h3>Redes Sociales</h3>
                    <a href="https://www.instagram.com/kioskiri/?hl=es"><img src="https://res.cloudinary.com/dpkvx3lfj/image/upload/v1667265087/logoinsta_advgwv.png" alt="logo instagram" /></a>
                    <a href="/"><img src="https://res.cloudinary.com/dpkvx3lfj/image/upload/v1667265088/twitterlogo_c2eveq.png" alt="logo twitter"/></a>
                    <div className='bases'>
                        <h3>Bases y Condiciones</h3>
                        <p>Al acceder o usar la página web de nuestro servicio, usted aprueba que haya leído, entendido y aceptado
                            estar sujeto a estos Términos</p>
                        <Link to='/'>
                            <img className='logo' src="https://res.cloudinary.com/dpkvx3lfj/image/upload/v1667265086/Kioskiri-Logo-2_fqrxhn.png" alt="logo Kioskiri" />
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

