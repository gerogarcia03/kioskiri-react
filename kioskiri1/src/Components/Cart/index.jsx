import React from 'react';
import { useCartContext } from '../../Context';
import CartView from '../CartView';
import './cart.css'
import Form from '../Form';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/Firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


const Cart = () => {
    const { cartProd, precioTotal } = useCartContext();
    const { limpiarCart } = useCartContext();

    const cliente = {
        nombre: 'alejandro',
        email: 'ale@gmail.com',
        telefono: '111244122',
        direccion: '1muins11',
    }

    const asd = () => {
        const ordenCollection = collection(db, 'ordenes');
        addDoc(ordenCollection, {
            cliente,
            items: cartProd.map(prod => ({ id: prod.id, name: prod.name, price: prod.price, cantidad: prod.cantidad })),
            total: precioTotal(),
            fecha: serverTimestamp(),
        },
        )
            .then(result => {
                console.log(result.id)
            })
        alert('Ha finalizado su compra con éxito!')
        limpiarCart()
    }




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
                    <div>
                        <Link to='/Menu/miCuenta'>
                            <button onClick={asd}>
                                Finalizar Compra
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart