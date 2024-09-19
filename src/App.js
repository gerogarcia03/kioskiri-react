import React from 'react';
import NavBar from './Components/Header/nav/NavBar';
import { Footer } from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext } from './Context/cartContext.jsx';
import Error from './Components/ErrorPage'
import Cart from './Components/Cart';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import MiCuenta from './Components/MiCuenta/index.jsx';




export const App = () => {

  const mensaje = '¡BIENVENIDOS A KIOSKIRI!'

  return (
    <>
      <CartContext >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} greeting={mensaje} />
            <Route path='/Categoria/:CategoriaId' element={<ItemListContainer />} />
            <Route path='/Detalle/:DetalleId' element={<ItemDetailContainer />} />
            <Route exact path='/Menu/Cart' element={<Cart />} />
            <Route exact path='/Menu/SignIn' element={<SignIn />}></Route>
            <Route exact path='/Menu/SignUp' element={<SignUp />}></Route>
            <Route path='*' element={< Error />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext>
    </>
  )
}

export default App
