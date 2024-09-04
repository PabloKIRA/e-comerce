import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg';
import './NavBar.css'; 
function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Tienda" className='nav-logo'/>
      </Link>
      <CartWidget />

      <Link to='/categoria/mate'>Mate</Link>
      <Link to='/categoria/tec'>Tecnología</Link>
      <Link to='/categoria/calzado'>Calzado</Link>
    </nav>
  )
}

export default NavBar
