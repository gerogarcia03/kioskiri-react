import React from 'react';
import NavBar from './Components/Header/nav/NavBar';
import ItemListContainer from './Components/ItemListContainer';

export const App = () => {

  const mensaje = 'BIENVENIDOS A KIOSKIRI'

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={mensaje} />
    </>
  )

}

export default App
