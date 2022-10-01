import React from 'react';
import NavBar from './Components/Header/nav/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';



export const App = () => {

  const mensaje = '¡BIENVENIDOS A KIOSKIRI!'

  return (
    <>
      <BrowserRouter>
        <NavBar greeting={mensaje} />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/Categoria/:CategoriaId' element={<ItemListContainer />} />
          <Route path='/Detalle/:DetalleId' element ={<ItemDetailContainer/>} />
          <Route path='/Cart' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
