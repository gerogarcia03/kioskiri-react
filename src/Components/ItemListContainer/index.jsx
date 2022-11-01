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

    const [loading, setLoading] = useState(true) 

    useEffect(() => {
        const ProdCollection = collection(db, 'stock');

        if (CategoriaId) {
            const q = query(ProdCollection, where('categoria', '==', CategoriaId))
            getDocs(q)
                .then(res => {setLista(res.docs.map(producto => ({ id: producto.id, ...producto.data() })));
            setLoading(false)})

        } else {
            getDocs(ProdCollection)
                .then(res => {setLista(res.docs.map(producto => ({ id: producto.id, ...producto.data() })));
            setLoading(false)})
        }
    }, [CategoriaId])


    return (
        <>
            <section>
                {loading ? (
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/dpkvx3lfj/image/upload/v1667267681/ezgif.com-gif-maker_utaz0x.gif"></img>
                        </div>
                    </div>
                )
                    : (
                        <ItemList lista={lista} />
                    )}
            </section>
        </>
    )
}

export default ItemListContainer

