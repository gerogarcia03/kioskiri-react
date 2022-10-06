import React, { createContext, useState, useContext } from 'react'
import { product } from '../Components/utils/product';

export const Context = createContext([]);

export const useCartContext = () => useContext(Context)

const CartContext = ({ children }) => {

    const [cartProd, setCartProd] = useState([])
    //--------
    const limpiarCart = () => setCartProd([]);

    //--------
    const addProd = (item, cantidad) => {
        let CartNew;
        let prod = cartProd.find(prod => prod.id === item.id);
        if (prod) {
            prod.cantidad += cantidad;
            CartNew = [...cartProd];
        }else {
            prod = {...item, cantidad: cantidad};
            CartNew = [...cartProd, prod];
        }
        setCartProd(CartNew)
    }
    console.log(`cart : `, cartProd)

    //--------
    const prodEnCart = (id) => cartProd.find(product => product.id === id) ? true : false;

    //------------
    const eliminarProd = (id) => {
        const filter = cartProd.filter((product) => {
            return product.id !== id;
        })
        setCartProd(filter)
    };

    //------
    const precioTotal = () => {
        return cartProd.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
    }

    //-----
    const prodTotales = () => {
        cartProd.find((acc, ActualProd) => acc+ ActualProd.cantidad, 0 )
    }


    return (
        <Context.Provider value={{
            addProd,
            eliminarProd,
            prodEnCart,
            limpiarCart,
            precioTotal,
            cartProd
        }}>
            {children}
        </Context.Provider>
    )
}

export { CartContext }


