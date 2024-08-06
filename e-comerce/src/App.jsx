import './App.css'
import { Button } from './components/Button'
import ItemCount from './components/ItemCount/Itemcount';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PostsContainer from './components/PostsContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

export function App() {

  return (
    <>

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting="hola" />}/>
          <Route path='/categoria/:categoria' element={ <ItemListContainer greeting="hola" />}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
          <Route path='*' element={<h1>Ey! te perdiste, volve al inicio y compra!</h1>} /> 
        </Routes>

      </BrowserRouter>

    </>
  )
}