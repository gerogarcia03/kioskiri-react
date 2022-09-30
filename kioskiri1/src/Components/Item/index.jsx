import React from "react";
import './item.css';
import { Link } from "react-router-dom";


const Item = ({ producto }) => {
    return (
        <>
            <section>
                <div className="card">
                    <Link to={'/Producto/${producto.id}'}>
                        <img src={producto.img}></img>
                        <h2>{producto.name}</h2>
                        <p>${producto.price}</p>
                        <button>
                            <img className="cart" src='Assets/carrito.jpg' ></img>
                        </button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export { Item }