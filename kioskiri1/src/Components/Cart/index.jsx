import React from 'react';
import { useCartContext } from '../../Context';
import { Link } from 'react-router-dom';
import CartView from '../CartView';

const Cart = () => {
    const { cartProd, precioTotal } = useCartContext();

    if (cartProd.length === 0) {
        return (
            <>
                <p>No hay productos en el carrito</p>
            </>
        );
    }

    return (
        <>
            {
                cartProd.map(prod => <CartView key={prod.id} prod={prod} />)
            }
            <h2>Precio Total: ${precioTotal()}</h2>
        </>
    )
}

export default Cart