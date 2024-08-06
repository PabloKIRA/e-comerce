import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/">
        <h2>Tiendita</h2>
        </Link>
        <CartWidget/>

        <Link to='/categoria/mate' >mate </Link>
        <Link to='/categoria/tec'> Tecnología </Link>
        <Link to='/categoria/calzado' >Calzado </Link>
    </nav>
  )
}

export default NavBar