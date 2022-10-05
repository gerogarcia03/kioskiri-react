import React from 'react';
import NavBar from './Components/Header/nav/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext } from './Context';



export const App = () => {

  const mensaje = '¡BIENVENIDOS A KIOSKIRI!'

  return (
    <>
      <CartContext >
        <BrowserRouter>
          <NavBar greeting={mensaje} />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/Categoria/:CategoriaId' element={<ItemListContainer />} />
            <Route path='/Detalle/:DetalleId' element={<ItemDetailContainer />} />
            <Route path='/Cart' />
          </Routes>
        </BrowserRouter>
        </CartContext>
    </>
  )
}

export default App
