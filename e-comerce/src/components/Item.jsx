import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const Item = ({ producto }) => {
  return (
    <div className="cardReal">
      <h3>{producto.nombre}</h3>
      {/* <img src={producto.image} alt="foto del producto" /> */}
      <p>{producto.precio}</p>
      <p>{producto.categoria}</p>
      <img src={producto.image} alt="" />
      <Button color="blue">
        <Link to={`/detalle/${producto.id}`}>Ver Mas</Link>
      </Button>
    </div>
  );
};