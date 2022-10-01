import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail";
import { product } from "../utils/product";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount";

const ItemDetailContainer = () => {

    const [prod, setProd] = useState([]);
    const { DetalleId } = useParams();
    
    useEffect(() => {
        const fetch = new Promise(resolve => {

            setTimeout(() => {
                resolve(product)
            }, 1000)
    
        });
            fetch.then(res => setProd(res.find(prod => prod.id === parseInt(DetalleId))));
    }, [])

    

    return (
        <>
            <ItemDetail prod={prod} />
        </>
    )

}

export default ItemDetailContainer;