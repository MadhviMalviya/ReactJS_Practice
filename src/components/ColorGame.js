import React, { useState } from 'react'

function ColorGame() {
const[bgColor,setBgColor]=useState('')

const arr=['Red','Blue','Green',"Yellow",'Purple','Pink','Orange','Skyblue']

function handleChangeColor(color){
  setBgColor(color)
}

  return (
    <div style={{backgroundColor:bgColor,minHeight:'100vh'}} >
    <h1>Color Change App</h1>
    <div>{arr.map((color)=>(<button key={color} onClick={()=>handleChangeColor(color)} >{color}</button>

    ))}
      
    </div>
    </div>
  )
}

export default ColorGame
