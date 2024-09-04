import React, { useState } from 'react';
import { ItemCount } from './ItemCount/ItemCount';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const Item = ({ producto }) => {
  // No se necesita el estado isVisible si solo rediriges al detalle
  const cardCN = 'flex flex-col bg-lime-200 rounded p-4 items-center justify-between w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'; // Ajusta w-2/5 según el diseño responsivo deseado
  const imgCN = 'w-full h-40 object-cover mb-4 rounded'; // Ajusta el tamaño de la imagen para ser más responsivo

  return (
    <div className={cardCN}>
      <h3 className='text-2xl font-bold text-sky-500 uppercase mb-2'>{producto.nombre}</h3>
      <img src={producto.image} alt={producto.nombre} className={imgCN} /> 
      <p className='text-lg font-semibold text-gray-700'>${producto.precio}</p>
      <p className='text-sm text-gray-500 capitalize'>{producto.categoria}</p>

      <Button color="blue" funcion={() => {}}> 
        <Link to={`/detalle/${producto.id}`} className="text-white">Ver Detalles</Link> 
      </Button>
    </div>
  );
};
