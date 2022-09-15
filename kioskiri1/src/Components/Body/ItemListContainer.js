import React, { useState } from "react";
import './Body.css';
import ItemCount from "./ItemCount";




const ItemList = ({ greeting }) => {

    const onAdd = (cantidad) =>{
        alert(`Agregó al carrito ${cantidad} productos`);
    }

    return (
        <>
            <h1>{greeting}</h1>
             <ItemCount inicial={0} stock={7} onAdd={onAdd} />
        </>
    )
}

export default ItemList

