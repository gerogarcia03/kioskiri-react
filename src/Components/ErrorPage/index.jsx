import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error'>
    <h2>Esta es la pagina de Error. <Link to='/'>Volver al Inicio</Link> </h2>
    </div>
  )
}

export default Error