import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail";
import { product } from "../utils/product";
import { fetch } from "../utils/fetch";

const ItemDetailContainer = ({ greeting }) => {

    const [prod, setProd] = useState({});

    useEffect(() => {
        fetch(product)
            .then(res => setProd(res))
    }, [])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemDetail producto={prod} />
        </>
    )

}

export default ItemDetailContainer