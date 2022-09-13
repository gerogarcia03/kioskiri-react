import React from "react";
import React, {useState} from "react";


const ItemCount = () => {

    const [stock, setStock] = useState();

    const addProd = () =>{
        setStock(stock + 1)
    }

    const restar = () =>{
        setStock(stock - 1)
    }

}

export default Item