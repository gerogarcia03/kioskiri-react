import React, { useState } from "react";
import '../../Body.css'
import { ItemList } from "../ItemList"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from '../../firebase/Firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';



const ItemListContainer = () => {
    const { CategoriaId } = useParams();
    
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const ProdCollection = collection(db, 'stock');

        if (CategoriaId) {
            const q = query(ProdCollection, where('categoria', '==', CategoriaId))
            getDocs(q)
                .then(res=> setLista(res.docs.map(producto => ({id:producto.id, ...producto.data() }))))

        } else {
            getDocs(ProdCollection)
                .then(res=> setLista(res.docs.map(producto => ({id:producto.id, ...producto.data() }))))
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

