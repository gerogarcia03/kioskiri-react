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
                        <p>${producto.price}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export { ItemDetail }