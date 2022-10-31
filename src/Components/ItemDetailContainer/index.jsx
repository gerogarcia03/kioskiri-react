import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail";
import { useParams } from "react-router-dom";
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
                        id: result.id,
                        ...result.data(),
                    }
                )
            })
    }, [])



    return (
        <>
            <ItemDetail prod={prod} />
        </>
    )

}

export default ItemDetailContainer;