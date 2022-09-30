import React from "react";
import './index.css';
import {} from '../utils/product' 

const ItemDetail = ({ prod }) => {

    return (
        <>
            <section>
                <div className="detail">
                    <img src={prod.img}></img>
                    <h2>{prod.name}</h2>
                    <div>
                        <p>${prod.price}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export { ItemDetail }