import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from '../servicios/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const productRef = doc(db, 'productos', id);
        const snapshot = await getDoc(productRef);
        setProduct(snapshot.data());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  console.log(id);

  return (
    <ItemDetail product={product} loading={loading} />
  );
};