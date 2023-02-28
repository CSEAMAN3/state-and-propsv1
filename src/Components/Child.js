import React from 'react'
import "./Child.css"
import boy from "../Images/boy.jpg"

export default function Child({name, surname}) {

  return (
    <div>
        <h2>The boys name is {name} {surname}</h2>
        <img src={boy} alt="Billie smiling" />
    </div>
  )
}
