import React, { useState } from "react";
import '../Body.css'
import ItemCount from "../ItemCount";
import { ItemList } from "../ItemList";
import { fetch } from "../utils/fetch";
import { stock } from "../utils/stock";
import { useEffect } from "react";




const ItemListContainer = ({ greeting }) => {

    const onAdd = (cantidad) => {
        alert(`Agregó al carrito ${cantidad} productos`);
    }

    const [lista, setLista] = useState([]);

    useEffect(() => {
        fetch(stock)
            .then(res => setLista(res))
    }, [])

    return (
        <>
            <h1>{greeting}</h1>
            {/* <ItemCount inicial={0} stock={7} onAdd={onAdd} /> */}
            <ItemList lista={lista} />
        </>
    )
}

export default ItemListContainer

