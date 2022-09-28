import React from 'react';
import NavBar from './Components/Header/nav/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './Components/ItemProdsContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';

export const App = () => {

  const mensaje = '¡BIENVENIDOS A KIOSKIRI!'

  return (
    <>
      <BrowserRouter>
        <NavBar greeting={mensaje} />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:CategoriaId' element={<Productos/>} /> 
          <Route path='/prod/:ProdId' />
          <Route path='/Cart' />
        </Routes>
      </BrowserRouter>
    </>

  )
  
        {/* <ItemDetailContainer greeting={mensaje} /> */}

}

export default App
