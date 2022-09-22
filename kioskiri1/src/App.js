import React from 'react';
import NavBar from './Components/Header/nav/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';

export const App = () => {

  const mensaje = 'BIENVENIDOS A KIOSKIRI'

  return (
    <>
      <NavBar />
      {/* <ItemListContainer greeting={mensaje} /> */}
      <ItemDetailContainer greeting={mensaje} />
    </>
  )

}

export default App
