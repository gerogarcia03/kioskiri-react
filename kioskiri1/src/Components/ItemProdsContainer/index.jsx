import React, { useState } from 'react';
import '../../Body.css';
import { product } from '../utils/product';
import { ItemProdList } from '../ItemProdList';
import { fetch } from '../utils/fetch';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Productos = () => {

    const { CategoriaId } = useParams();
    console.log( CategoriaId ) 

    const [listaProd, setLista] = useState([]);

    useEffect(() => {
        

        const fetch = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(product)
            }, 1000)
    
        });

        if(CategoriaId){
            fetch.then(res => setLista(res.filter(product => product.categoria === CategoriaId)));

        }else{
            fetch.then(res => setLista(res))
        }
    }, [CategoriaId])

    return (
        <>
            <section>
                <ItemProdList listaProd={listaProd} />
            </section>
        </>
    )
}

export default Productos