import React from 'react';
import '../Item/item.css'

const ItemProds = ({ stock }) => {

  return (
    <>
        <section>
          <div className='card'>
            <img src={stock.img}></img>
            <h2>{stock.name}</h2>
            <p>${stock.price}</p>
          </div>
        </section>
    </>
  )
}

export { ItemProds } 


 
