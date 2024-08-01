import React from 'react'


export const Button = (props) => {


    return (
        <button style={{backgroundColor: props.color}} onClick={props.funcion} > {props.children}</button>
    )
}
