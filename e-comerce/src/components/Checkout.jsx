import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../servicios/firebaseConfig';

const Checkout = () => {
  const [nombre, setNombre] = useState('');
  const [mail, setMail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [order, setOrder] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { cart } = useContext(CartContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !mail || !direccion) {
      setError('Por favor, complete todos los campos');
      return;
    }
    setLoading(true);
    try {
      const user = {
        nombre,
        mail,
        direccion,
      };
      const data = { user, cart };
      const orderRef = collection(db, 'ordenes');
      const orderId = await addDoc(orderRef, data);
      setOrder(orderId);
      setLoading(false);
    } catch (error) {
      setError('Error al procesar la orden');
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <span>Nombre</span>
        <input
          type="text"
          className="border border-black mx-3 text-black"
          onChange={(e) => setNombre(e.target.value)}
        />
        <span>Mail</span>
        <input
          type="email"
          className="border border-black mx-3 text-black"
          onChange={(e) => setMail(e.target.value)}
        />
        <span>Direccion</span>
        <input
          type="text"
          className="border border-black mx-3 text-black"
          onChange={(e) => setDireccion(e.target.value)}
        />
        {error && (
          <p style={{ color: 'red' }}>{error}</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
          loading={loading}
        >
          {loading ? 'Procesando...' : 'Confirmar orden'}
        </button>
      </form>
      {order && (
        <p>
          ¡Orden confirmada! Número de orden: <strong>{order.id}</strong>
        </p>
      )}
    </div>
  );
};

export default Checkout;