import React, { useState } from "react";
import '../../Body.css'
import { ItemList } from "../ItemList"
import { product } from '../utils/product';
import { useEffect } from "react";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {

    const { CategoriaId } = useParams();

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
            <section>
                <ItemList lista={lista} />
            </section>
        </>
    )
}

export default ItemListContainer

