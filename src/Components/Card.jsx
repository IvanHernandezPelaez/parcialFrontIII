import React from 'react'

const Card = ({nombre, color}) => {
  return (
    <div>
        <h3>Hola {nombre}</h3>
        <h3>Sabemos que tu color favorito es {color}</h3>
    </div>
  )
}

export default Card