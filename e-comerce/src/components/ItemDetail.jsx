import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ItemCount } from './ItemCount/ItemCount'

const ItemDetail = ({prod}) => {

    const {cart, addToCart} = useContext(CartContext)

    console.log(cart)

    const mostrarSiguiente = () => {
        setId(id + 1)
      }
      const mostrarAnterior = () => {
        setId(id - 1)
      }

      const handleAddToCart = (cant) =>{
        const prodConCantidad = {...prod, cantidad: cant}
        addToCart(prodConCantidad)
      }
    

  return (
    <div className='cardDetalle'>
      
     <h3>
       {prod.nombre}
      </h3>
      <img src={prod.image} alt="" />

    <p>{prod.precio}</p>
       
       <button onClick={mostrarSiguiente}> ver siguiente</button>
       <button onClick={mostrarAnterior}> ver anterior</button>
       <ItemCount handleAddToCart={handleAddToCart}/>
    </div>
  )
}

export default ItemDetail