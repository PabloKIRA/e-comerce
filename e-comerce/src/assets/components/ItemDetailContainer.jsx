import React, { useEffect, useState } from 'react';
import { getProduct } from '../asyncmock.js';

export function ItemDetailContainer() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(id);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount />
    </div>
  );
}