import React, { useEffect, useState } from 'react';
import { getProducts } from '../asyncmock.js';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export function ItemListContainer() {
  const { categoria } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(categoria);
      setProducts(data);
    };

    fetchProducts();
  }, [categoria]);

  return (
    <div>
      <h1>Productos</h1>
      <ItemList products={products} />
    </div>
  );
}