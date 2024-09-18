import React, { useState } from "react";
import { ItemCount } from "../ItemCount";
import { useCartContext } from "../../Context/cartContext.jsx";
import Swal from "sweetalert2";
import './index.css';

const ItemDetail = ({ prod }) => {

    const { addProd } = useCartContext();

    const [, setCart] = useState(false)

    const onAdd = (cantidad, id) => {
        setCart(true);
        addProd(prod, cantidad);
    };



    return (
        <>
            <section className="itemDetail">
                <div className="detail">
                    <img alt='' src={prod.img}></img>
                    <div className="detailProd">
                        <h2>{prod.name}</h2>
                        <h2>${prod.price}</h2>
                        <ItemCount inicial={1} stock={prod.stock} onAdd={onAdd} iconSrc={"https://res.cloudinary.com/dpkvx3lfj/image/upload/v1667265085/carrito_racyor.png"} />
                    </div>
                </div>
            </section>
        </>
    )
}

export { ItemDetail }

export const alertaCompra = (cantidad, prod) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        iconColor: "white",
        background: "#ffbd43",
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
}
