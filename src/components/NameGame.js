import React, { useState } from 'react'

function NameGame() {
const [name,setName]=useState('Chintu')

function handleChange(){
   const nameSwap=name==='Chintu'?'Pinku':'Chintu'
   setName(nameSwap)
}

  return (
    <div>
    <h1>{name}</h1>
    <button onClick={handleChange} >Click</button>
      
    </div>
  )
}

export default NameGame
