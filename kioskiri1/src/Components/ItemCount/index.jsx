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
                            <img className="cart" src="../Assets/carrito.jpg"></img>
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
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </button>
                    </div>
                </div>

            </section>
        </>
    )

}

export { ItemCount }