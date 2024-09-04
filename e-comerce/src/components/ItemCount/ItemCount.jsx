import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
import './itemCount.css'
import { Button } from '../Button'
import { ItemList } from '../ItemList'

export const ItemCount = ({handleAddToCart}) => {
    const [ count, setCount ] = useState(1)
    

 const restar = () =>{
    setCount(count - 1)
}

const sumar  = ()=> {
    setCount(count + 1)
 }


  return (
    <div className='container'>
        <Button variant='primary' funcion={restar} >  -   </Button> 
        <p>{count}</p>
        <Button color="green" funcion={sumar} >
          +
        </Button>
        <button onClick={()=>handleAddToCart(count)}> Agregar Al Carrito </button>
    </div>
  )
}