import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../servicios/firebaseConfig'

const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [order, setOrder] = useState(null) // Cambiar a null inicialmente para mejor manejo de estado

    const { cart, vaciarCart } = useContext(CartContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validación de campos
        if (!nombre || !mail || !direccion) {
            alert("Por favor, completa todos los campos.")
            return
        }

        const user = {
            nombre,
            mail,
            direccion
        }
        
        const data = { user, cart }
        
        try {
            const orderRef = collection(db, "ordenes")
            const orderDoc = await addDoc(orderRef, data)
            
            setOrder(orderDoc.id)  // Aquí se obtiene el ID correctamente

            // Vaciar el carrito después de la compra
            vaciarCart()

            // Mostrar un mensaje de éxito
            alert(`Orden confirmada. Su número de orden es: ${orderDoc.id}`)
        } catch (error) {
            console.error("Error al crear la orden:", error)
            alert("Hubo un error al procesar tu orden. Por favor, intenta de nuevo.")
        }
    }   
    
    return (
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <span>Nombre</span>
                <input type="text" className='border border-black mx-3 text-black' onChange={(e) => setNombre(e.target.value) }/>    
                <span>Mail</span>
                <input type="email" className='border border-black mx-3 text-black' onChange={(e) => setMail(e.target.value)}/>    
                <span>Dirección</span>
                <input type="text" className='border border-black mx-3 text-black' onChange={(e) => setDireccion(e.target.value)}/>    
                <button type='submit'>Confirmar</button>
            </form>  
            {order && <p>Su orden ha sido confirmada. ID de la orden: {order}</p>} 
        </div>
    )
}

export default Checkout
