import React from 'react'
import './Estilos.css'

const Productos = ({producto})=>{
  const {id, nombre, imagen, precio } = producto
  return(
    <li key={id} className='card'>
      <h2>{nombre}</h2>
      <img src={imagen} alt="" className="card-img"/>
      <h3>{precio}</h3>
    </li>
  )

}

export default Productos