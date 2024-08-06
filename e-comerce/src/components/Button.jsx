import React from 'react'
import './Button'

export const Button = (props) => {


    return (
        <button style={{backgroundColor: props.color}} onClick={props.funcion} > {props.children}</button>
    )
}