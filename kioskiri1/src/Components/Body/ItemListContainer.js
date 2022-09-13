import React, { useState } from "react";
import './Body.css';
import coca500 from '../../Assets/coca500.jpg';
import blueberry from '../../Assets/blueberry14.jpg';
import laysJamon from '../../Assets/laysjamon.jpg';
import cart from '../../Assets/carrito.jpg';


const ItemList = ({ greeting }) => {


    const [stock, setStock] = useState(0);

    const addProd = () => {

        if (stock === 10){
            setStock = 10;
        }

        setStock(stock + 1);
    }

    const restar = () => {
        if (stock === 0) {
            setStock(stock = 0)
        }

        setStock(stock - 1);

    }

    return (
        <>
            <h1>{greeting}</h1>
            <section>
                <div className="prod">
                    <img src={coca500}></img>
                    <h2>Coca Cola 500ml</h2>
                    <p>$180</p>
                    <p>Stock Disponible: 10</p>
                    <div className="add">
                        <button onClick={cart}>
                            <img className="cart" src={cart}></img>
                        </button>
                        <div>
                            <button onClick={addProd}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </button>


                            <button onClick={restar}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                            </button>
                            <h2>{stock}</h2>
                        </div>
                    </div>
                </div>
                <div className="prod">
                    <img src={blueberry}></img>
                    <h2>Beldent Bluberry 14</h2>
                    <p>$140</p>
                    <div className="add">
                        <button onClick={cart}>
                            <img className="cart" src={cart}></img>
                        </button>
                        <div>
                            <button onClick={addProd}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </button>

                            <button onClick={restar}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="prod">
                    <img src={laysJamon}></img>
                    <h2>Lays Jamon Serrano 85g</h2>
                    <p>$360</p>
                    <div className="add">
                        <button onClick={cart}>
                            <img className="cart" src={cart}></img>
                        </button>

                        <div>
                            <button onClick={addProd}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </button>

                            <button onClick={restar}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
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

export default ItemList

