import React from 'react';
import NavBar from './Components/Header/nav/NavBar';
import { Footer } from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext } from './Context';
import Error  from './Components/ErrorPage'
import Cart from './Components/Cart';
import Form from './Components/Form';




export const App = () => {

  const mensaje = '¡BIENVENIDOS A KIOSKIRI!'

  return (
    <>
      <CartContext >
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} greeting={mensaje} />
            <Route path='/Categoria/:CategoriaId' element={<ItemListContainer />} />
            <Route path='/Detalle/:DetalleId' element={<ItemDetailContainer />} />
            <Route exact path='/Menu/Cart' element={<Cart />} />
            <Route exact path='/Menu/miCuenta' element={< Form/>}></Route>
            <Route path='*' element={< Error />}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
        </CartContext>
    </>
  )
}

export default App
