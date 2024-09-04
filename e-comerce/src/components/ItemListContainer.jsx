import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { getProducts } from '../asyncmock'; // Importa correctamente desde tu mock
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setCargando(true);

    // Llama a getProducts si no estás filtrando por categoría
    getProducts()
      .then((productos) => {
        // Filtra productos por categoría si existe
        if (categoria) {
          const productosFiltrados = productos.filter(
            (producto) => producto.categoria === categoria
          );
          setItems(productosFiltrados);
        } else {
          setItems(productos);
        }
      })
      .catch((err) => console.error("Error al obtener los productos:", err))
      .finally(() => setCargando(false));
  }, [categoria]);

  if (cargando) {
    return <h2>Cargando....</h2>;
  }

  return (
    <div className='flex p-10 gap-2 justify-center'>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
