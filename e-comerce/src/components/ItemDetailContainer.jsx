import React, { useEffect, useState } from 'react'
import { getProductById } from '../asyncmock'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { db } from '../servicios/firebaseConfig'
import { getDoc, doc} from 'firebase/firestore'

export const ItemDetailContainer = () => {
  const [prod, setProd] = useState({})
  const [cargando, setCargando] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    setCargando(true)

    // getProductById(id)
    //   .then(res => {
    //     setProd(res)
    //     setCargando(false)
    //   })
    const productRef = doc(db, "productos", id)
    getDoc(productRef).then(snapshot => {
      setProd(snapshot.data())      
    }).finally(setCargando(false))
    
  }, [id])




  console.log(id)

  if (cargando) {
    return (
      <h1>Cargando....</h1>
    )
  }

  return (
    <>
      {prod &&
        <ItemDetail prod={prod} />
      }
    </>


  )
}