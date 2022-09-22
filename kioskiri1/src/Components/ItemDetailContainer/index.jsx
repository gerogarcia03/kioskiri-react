import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail";
import { producto } from "../utils/product";
import { fetch } from "../utils/fetch";

const ItemDetailContainer = ({ greeting }) => {

    const [prod, setProd] = useState({});

    useEffect(() => {
        fetch(producto)
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