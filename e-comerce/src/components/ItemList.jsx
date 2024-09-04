import React from 'react'
import { Item } from './Item'

// Componente ItemList mejorado
export const ItemList = ({ items }) => {
  // Verificar que items es un array
  if (!Array.isArray(items)) {
    return <p>Error: `items` debe ser un array.</p>
  }

  // Verificar si items está vacío
  if (items.length === 0) {
    return <p>No hay productos disponibles.</p>
  }

  return (
    <div className="item-list">
      {items.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  )
}
