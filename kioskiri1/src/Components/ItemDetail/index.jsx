import React, { useState, useContext } from "react";
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from '../../Context';
import { useCartContext } from "../../Context";

import './index.css';

const ItemDetail = ({ prod }) => {

    const {addProd} = useCartContext();

    const [cart, setCart] = useState(false)

    const onAdd = (cantidad, id) => {
        setCart(true);
        addProd(prod, cantidad);
        alert(`Agregó al carrito ${cantidad} productos`);
    };

    const result = useContext(CartContext);
    console.log(result)

    return (
        <>
            <section>
                <div className="detail">
                    <img src={prod.img}></img>
                    <div>
                        <h2>{prod.name}</h2>
                        <h2>${prod.price}</h2>
                        {
                            cart
                                ? <Link to='/cart'>Finalizar Compra</Link>
                                : <ItemCount inicial={0} stock={7} onAdd={onAdd} />
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export { ItemDetail }