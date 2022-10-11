import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail";
import { product } from "../utils/product";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount";
import { db } from '../../firebase/Firebase';
import { doc, getDoc, collection } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [prod, setProd] = useState([]);
    const { DetalleId } = useParams();

    useEffect(() => {


        const ProdCollection = collection(db, 'stock');
        const refDoc = doc(ProdCollection, DetalleId);
        getDoc(refDoc)
        .then((result) => {
            setProd(
                {
                    id:result.id,
                    ...result.data(),
                }
            )
        })



        // const fetch = new Promise(resolve => {

        //     setTimeout(() => {
        //         resolve(product)
        //     }, 1000)

        // });
        // fetch.then(res => setProd(res.find(prod => prod.id === parseInt(DetalleId))));
    }, [])



    return (
        <>
            <ItemDetail prod={prod} />
        </>
    )

}

export default ItemDetailContainer;