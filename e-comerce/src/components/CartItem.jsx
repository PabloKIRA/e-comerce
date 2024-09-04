import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({producto}) => {

    const {eliminarProducto} = useContext(CartContext)

  return (
    <div>
        <h3>{producto.nombre}</h3>
        <p>${producto.precio}</p>
        <p>{producto.cantidad}</p>
        <button onClick={()=>eliminarProducto(producto.id)}>
            eliminar producto
        </button>
    </div>
  )
}

export default CartItem