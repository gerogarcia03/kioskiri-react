import React from "react";
import './item.css';
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount";


const Item = ({ producto }) => {

    const onAdd = (cantidad) => {

        alert(`Agregó al carrito ${cantidad} productos`);
    }

    return (
        <>
            <section>
                <div className="card">
                    <Link to={`/Detalle/${producto.id}`}>
                        <img src={producto.img}></img>
                        <h2>{producto.name}</h2>
                        <p>${producto.price}</p>
                        <button to={'/cart'}>
                            <img className="cart" src="../Assets/carrito.jpg"></img>
                        </button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export { Item }