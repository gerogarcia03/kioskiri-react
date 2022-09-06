import React from 'react';
import NavBar from './Components/Header/nav/NavBar';
import ItemList from './Components/Body/ItemListContainer';

export const App = () => {

const mensaje = 'BIENVENIDOS A KIOSKIRI'

  return (
    <>
    <NavBar />
    <ItemList greeting={mensaje}/>
    </>
  )

}

export default App
