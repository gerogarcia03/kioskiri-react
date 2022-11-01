import React, { useState } from "react";
import '../ItemCount/ItemCount.css';
import { useCartContext } from "../../Context";


const ItemCount = ({ inicial, stock, onAdd }) => {


    const [count, setStock] = useState(inicial);

    const addProd = () => {
        setStock(count + 1)
    }

    const restar = () => {
        setStock(count - 1)
    }




    return (
        <>
            <section>
                <div className="prod">
                    <div className="add">
                        <p>Stock Disponible: {stock}</p>
                        <button disabled={stock <= 0} onClick={() => onAdd(count)}>
                            <img className="cart" src="https://res.cloudinary.com/dpkvx3lfj/image/upload/v1667265085/carrito_racyor.png"></img>
                        </button>
                        <div>
                            <button disabled={count >= stock} onClick={addProd}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </button>
                            <h2>{count}</h2>
                            <button disabled={count <= 0} onClick={restar}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )

}

export { ItemCount }