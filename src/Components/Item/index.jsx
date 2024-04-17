import React from "react";
import './item.css';
import { Link } from "react-router-dom";


const Item = ({ producto }) => {

    return (
        <>
            <section className="item">
                <div className="card">
                    <Link to={`/Detalle/${producto.id}`}>
                        <img alt="prod" src={producto.img}></img>
                        <h2>{producto.name}</h2>
                        <p>${producto.price}</p>
                    </Link>
                </div>
            </section>
        </>
    )
}

export { Item }