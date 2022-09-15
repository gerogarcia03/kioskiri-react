import React from "react";
import { Item } from '../Item';
 
const ItemList = ({ lista }) => {
    return (
        <>
            {lista.map ((prod, i) => <Item key={`${prod.id}-${i}`} producto = {prod} />)}
        </>
    );
};

export { ItemList }
