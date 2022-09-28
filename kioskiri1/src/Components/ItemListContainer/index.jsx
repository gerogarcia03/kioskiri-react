import React, { useState } from "react";
import '../../Body.css'
import ItemCount from "../ItemCount";
import { ItemList } from "../ItemList"
import { fetch } from "../utils/fetch";
import { stock } from "../utils/stock";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {

    let { CategoriaId } = useParams();
    console.log(CategoriaId);
 
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
            <h1> NUESTRAS OFERTAS </h1>
            <section>
            {/* <ItemCount inicial={0} stock={7} onAdd={onAdd} /> */}
            <ItemList lista={lista} />
            </section>
        </>
    )
}

export default ItemListContainer

