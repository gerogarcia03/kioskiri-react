import React from "react";
import './index.css'


const ItemDetail = ({ producto }) => {

    return (
        <>
            <section>
                <div className="detail">
                    <img src={producto.img} />
                    <h1>{producto.name}</h1>
                    <div>
                        <h2>{producto.description}</h2>
                        <p>${producto.price}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export { ItemDetail }