import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const {cart} = useContext(CartContext)

  return (
    <Link to='/cart'>
    <div>🛒
      <span>{cart.length}</span>
    </div>
    </Link>
  )
}

export default CartWidget