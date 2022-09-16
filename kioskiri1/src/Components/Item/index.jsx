import React from "react";
import './item.css';


const Item = ({ producto }) => {
    return (
        <>
            <section>
                <div className="card">
                    <img src={producto.img}></img>
                    <h2>{producto.name}</h2>
                    <p>${producto.price}</p>
                    <button>
                        <img className="cart" src='../Assets/carrito.jpg' ></img>
                    </button>
                </div>
            </section>
        </>
    )
}

export { Item }