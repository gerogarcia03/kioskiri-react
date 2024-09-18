import React from 'react';
import { useCartContext } from '../../Context/cartContext.jsx';
import CartView from '../CartView';
import './cart.css'
import { Link } from 'react-router-dom';
import { db } from '../../firebase/Firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import Swal from 'sweetalert2';


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
                Swal.fire({
                    title: 'Gracias por tu compra!',
                    text: `Tu id de compra es ${result.id}`,
                    icon: 'success',
                })
            })
        limpiarCart()
    }




    if (cartProd.length === 0) {
        return (
            <>
                <div className='cartVacio'>
                    <p>No hay productos en el carrito.</p>
                    <Link to='/'>
                        Ir a comprar
                    </Link>
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
                        <button onClick={asd}>
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart