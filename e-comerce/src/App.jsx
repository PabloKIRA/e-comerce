import './App.css'
import ItemListContainer from './components/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import { CartContextProvider } from './context/CartContext'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Checkout from './components/Checkout'

export function App() {

  const {darkTheme} = useContext(ThemeContext)

  return (
    <>
    <CartContextProvider>
   
    <div className={darkTheme ? "dark" : "light" }>

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting="hola" />}/>
        <Route path='/categoria/:categoria' element={ <ItemListContainer greeting="hola" />}/>
        <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>} /> 
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<h1>Ey! te perdiste, volve al inicio y compra!</h1>} /> 
      </Routes>

    </BrowserRouter>
    </div>
    </CartContextProvider>
    </>
  )
}