import React from 'react'
import { Item } from './item.jsx'
export const ItemList = ( {items} ) => {

  return (
    <>
       {items?.map( (e) => {
        return (
            <Item key={e.id} producto={e} />
        )
       } )} 
    </>
  )
}