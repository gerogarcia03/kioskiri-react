import React from 'react';
import { useCartContext } from '../../Context';
import CartView from '../CartView';
import './cart.css'

const Cart = () => {
    const { cartProd, precioTotal } = useCartContext();
    const { limpiarCart } = useCartContext();

    if (cartProd.length === 0) {
        return (
            <>
                <div className='cartV'>
                    <p>No hay productos en el carrito</p>
                </div>
            </>
        );
    }

    return (
        <>
            {
                cartProd.map(prod => <CartView key={prod.id} prod={prod} />)
            }
            <div className='cartV'>
                <h2>Precio Total: ${precioTotal()}</h2>
                <div>
                    <button onClick={(prod) => limpiarCart(prod.id)}>
                        Vaciar Carrito
                    </button>
                    <button>
                        Finalizar Compra
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cart