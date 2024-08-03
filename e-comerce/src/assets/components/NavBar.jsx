import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h2>Tienda</h2>
      </Link>
      <CartWidget />

      <Link to="/categoria/mate">mate</Link>
      <Link to="/categoria/tec">Tecnología</Link>
      <Link to="/categoria/calzado">Calzado</Link>
    </nav>
  );
};

export default NavBar;