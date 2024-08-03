import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
export const ItemCount = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const restar = () => {
    console.log("se esta ejecutando restar");
    setCount(count - 1);
  };

  const sumar = () => {
    console.log("se esta ejecutando sumar");
    setCount(count + 1);
  };

  return (
    <div className='container'>
      <Button variant='primary' onClick={restar}>
        -
      </Button>
      <p>{count}</p>
      <Button color="green" onClick={sumar}>
        +
      </Button>
    </div>
  );
};