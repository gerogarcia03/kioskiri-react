import React, { useState } from "react";
import './index.css';
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ prod }) => {

    const [cart, setCart] = useState(false)

    const onAdd = (cantidad) => {
        setCart(true);

        alert(`Agregó al carrito ${cantidad} productos`);
    }

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
                            :<ItemCount inicial={0} stock={7} onAdd={onAdd} />
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export { ItemDetail }