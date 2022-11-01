import React from "react";
import './item.css';
import { Link } from "react-router-dom";


const Item = ({ producto }) => {

    return (
        <>
            <section>
                <div className="card">
                    <Link to={`/Detalle/${producto.id}`}>
                        <img alt="prod" src={producto.img}></img>
                        <h2>{producto.name}</h2>
                        <p>${producto.price}</p>
                        <button>
                            <img className="cart" alt="cart" src="https://res.cloudinary.com/dpkvx3lfj/image/upload/v1667265085/carrito_racyor.png"></img>
                        </button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export { Item }