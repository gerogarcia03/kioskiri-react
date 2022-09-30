import React from 'react';
import { Link } from 'react-router-dom';
import '../Item/item.css'

const ItemProds = ({ stock }) => {

  return (
    <>
      <section>
        <div className='card'>
          <Link to={'/Producto/${producto.id}'}>
            <img src={stock.img}></img>
            <h2>{stock.name}</h2>
            <p>${stock.price}</p>
            <button>
              <img className="cart" src='../Assets/carrito.jpg' ></img>
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export { ItemProds }



