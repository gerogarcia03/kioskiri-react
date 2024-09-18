import React from 'react';
import { useCartContext } from '../../Context/cartContext.jsx';
import './Cart.css'
import { ItemCount } from '../ItemCount';
import { useState } from 'react';

const CartView = ({ prod, stock, inicial }) => {

    const { eliminarProd, addProd } = useCartContext()

    const [count, setCart] = useState()
    
    const [ setStock] = useState(inicial);

    const onAdd = (cantidad, id) => {
        setCart(true);
        addProd(prod, cantidad);
    };

    const restar = () => {
        setCart(count - 1)
    }


    return (
        <>
            <section className='cartView'>
                <div className='Card'>
                    <img src={prod.img} alt=''></img>
                    <div>
                        <h2>{prod.name}</h2>
                        <h2>${prod.price}</h2>
                        <p>Cantidad:{prod.cantidad}</p>

                        <section className="itemCount">
                            <div className="prod">
                                <div className="add">
                                    <p>Stock Disponible: {stock}</p>
                                    <div>
                                        <button disabled={stock <= 0} onClick={() => onAdd(1)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                        </button>
                                        <h2>{prod.cantidad}</h2>
                                        <button onClick={restar}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </section>

                        <button onClick={() => eliminarProd(prod.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                        </button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CartView
