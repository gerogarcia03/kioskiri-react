import React, { useState, useContext } from "react";
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from '../../Context';
import { useCartContext } from "../../Context";
import Swal from "sweetalert2";
import './index.css';

const ItemDetail = ({ prod }) => {

    const { addProd } = useCartContext();

    const [cart, setCart] = useState(false)

    const onAdd = (cantidad, id) => {
        setCart(true);
        addProd(prod, cantidad);

        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            iconColor: "white",
            background: "#c5b197",
            color: "white",
            customClass: {
                popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        })

        Toast.fire({
            icon: 'success',
            title: `Agregó al carrito ${cantidad} ${prod.name}`
        })
    };

    const result = useContext(CartContext);
    console.log(result)

    return (
        <>
            <section>
                <div className="detail">
                    <img alt='' src={prod.img}></img>
                    <div>
                        <h2>{prod.name}</h2>
                        <h2>${prod.price}</h2>
                        <ItemCount inicial={1} stock={prod.stock} onAdd={onAdd} />
                    </div>
                </div>
            </section>
        </>
    )
}

export { ItemDetail }