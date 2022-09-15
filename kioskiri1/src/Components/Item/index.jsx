import React from "react";


const Item = ({producto}) => {
    return (
        <>
        <img src={producto.img}></img>
        <h2>{producto.name}</h2>
        <p>${producto.price}</p>
        </>
    )
}

export { Item }