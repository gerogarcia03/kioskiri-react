import React, { useState } from 'react';
import '../../Body.css';
import { product } from '../utils/product';
import { ItemProdList } from '../ItemProdList';
import { fetch } from '../utils/fetch';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Productos = () => {

    let { CategoriaId } = useParams();
    console.log( CategoriaId ) 

    const [listaProd, setLista] = useState([]);

    useEffect(() => {
        fetch(product)
            .then(res=> setLista(res))
    }, [])

    return (
        <>
            <section>
                <ItemProdList listaProd={listaProd} />
            </section>
        </>
    )
}

export default Productos