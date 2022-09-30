import React, { useState } from "react";
import '../../Body.css'
import ItemCount from "../ItemCount";
import { ItemList } from "../ItemList"
// import { fetch } from "../utils/fetch";
import { product } from '../utils/product';
import { useEffect } from "react";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {

    const { CategoriaId } = useParams();
    console.log( CategoriaId );
 
    const onAdd = (cantidad) => {
        alert(`Agregó al carrito ${cantidad} productos`);
    }

    const [lista, setLista] = useState([]);

    useEffect(() => {
        const fetch = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(product)
            }, 1000)
    
        });

        if(CategoriaId){
            fetch.then(res => setLista(res.filter(product => product.categoria === CategoriaId)));

        }else{
            fetch.then(res => setLista(res))
        }
    }, [CategoriaId])

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

