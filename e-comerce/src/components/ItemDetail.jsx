import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { ItemCount } from './ItemCount/ItemCount'

const ItemDetail = ({prod}) => {
    const {cart, addToCart} = useContext(CartContext)
    const [id, setId] = useState(0)

    const handleAddToCart = (cant) =>{
        const prodConCantidad = {...prod, cantidad: cant}
        addToCart(prodConCantidad)
    }

    return (
        <div className='cardDetalle'>
            
            <h3>
                {prod.nombre}
            </h3>
            <img src={prod.image} alt="" />

            <p>{prod.precio}</p>
               
            <button onClick={() => setId(id + 1)}> ver siguiente</button>
            <button onClick={() => setId(id - 1)}> ver anterior</button>
            <ItemCount handleAddToCart={handleAddToCart}/>
        </div>
    )
}

export default ItemDetail
