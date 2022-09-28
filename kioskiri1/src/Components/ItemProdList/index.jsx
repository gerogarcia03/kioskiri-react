import React from "react";
import { ItemProds } from '../ItemProds';

const ItemProdList = ({ listaProd }) => {
    return (
        <>
            {listaProd.map((prod, i) => <ItemProds key={`${prod.id}-${i}`} stock={prod} />)}
        </>
    );
};

export { ItemProdList }