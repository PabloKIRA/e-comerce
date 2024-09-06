import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './NavBar.css';

/**
 * Componente de navegación superior.
 *
 * @returns {JSX.Element} El componente de navegación.
 */
function NavBar() {
  return (
    <nav>
      <Link to="/" key="home">
        <img
          src={logo}
          alt="Tienda"
          className="nav-logo"
          onError={() => {
            try {
              throw new Error('Error al cargar la imagen de logo');
            } catch (error) {
              console.error(error.message);
            }
          }}
        />
      </Link>
      <CartWidget />

      <Link to="/categoria/mate" key="mate">
        Mate
      </Link>
      <Link to="/categoria/tec" key="tec">
        Tecnología
      </Link>
      <Link to="/categoria/calzado" key="calzado">
        Calzado
      </Link>
    </nav>
  );
}

export default NavBar;