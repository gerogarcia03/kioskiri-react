import React from 'react';
import './form.css'
import { useCartContext } from '../../Context';
import { db } from '../../firebase/Firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const Form = () => {

    const { cartProd, precioTotal } = useCartContext([]);

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
            console.log(cliente)
            })
        }

    return (
        <>
            <div className='form'>
                <h2>Complete el siguiente formulario para finalizar la compra.</h2>
                <form>
                    <h2>Ingresa!</h2>
                    <div>
                        <input type='name' placeholder='Nombre' ></input>
                    </div>
                    <div>
                        <input type='email' placeholder='Email' ></input>
                    </div>
                    <div>
                        <input type='telefono' placeholder='Teléfono' ></input>
                    </div>
                    <button onClick={asd}>Enviar</button>
                </form>
            </div>
        </>
    )
}


export default Form