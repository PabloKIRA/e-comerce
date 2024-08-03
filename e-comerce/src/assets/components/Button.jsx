import React from 'react';
import { Button } from './Button';

const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Button color="blue" funcion={handleClick}>
        Click me
      </Button>
    </div>
  );
};

export default App;