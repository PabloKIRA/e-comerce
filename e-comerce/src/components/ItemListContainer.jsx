import React, { useEffect, useState } from 'react'
import { getProducts } from '../asyncmock'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../servicios/firebaseConfig'



const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)

  const { categoria } = useParams()


  useEffect(() => {
    setCargando(true)
    // if(categoria) {
    //   getProducts().then(prods => setItems(prods.filter(e => e.categoria === categoria)))
    //   .catch(err => err)
    //   .finally(() => setCargando(false))
    // }else{
    //   getProducts().then(prods => setItems(prods))
    //   .catch(err => err)
    //   .finally(() => setCargando(false))
    // }
    if (categoria) {
      const productosPorCat = query(collection(db, "productos"), where("categoria", "==", categoria))
      getDocs(productosPorCat).then(snapshot => {
        const prods = snapshot.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setItems(prods)
      }).finally(setCargando(false))
    } else {
      getDocs(collection(db, "productos")).then(snapshot => {
        const prods = snapshot.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setItems(prods)
      }).finally(setCargando(false))
    }
  }, [categoria])

  if (cargando) {
    return (
      <h2>Cargando....</h2>
    );
  }



  return (
    <div className='flex p-10 gap-2 justify-center'>
      <div class="absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] index_beams__yWcJT">
        <div class="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5" style="mask-image:linear-gradient(to bottom, transparent, black);-webkit-mask-image:linear-gradient(to bottom, transparent, black)">
        </div>
        </div>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer