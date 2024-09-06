import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {
  const cardCN = 'flex flex-col bg-lime-200 rounded p-4 items-center justify-between w-2/5 '

  return (
    <div className={cardCN}>
      <h3 className="text-2lg font-bold text-sky-500 uppercase">{producto.nombre}</h3>
      <img src={producto.image} alt={producto.nombre} />
      <p>${producto.precio}</p>
      <p>{producto.categoria}</p>
      <Link to={`/detalle/${producto.id}`}>
        <Button color="blue">Ver Detalles</Button>
      </Link>
    </div>
  )
}
