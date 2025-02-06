import React, { useState } from 'react'

const circuit = () => {
const [text,setText]=useState('')
 const firstValue=text|| 'hellow world';
 const secondValue= text && 'hellow world';


  return (
    <div>
      <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>
    </div>
  )
}

export default circuit
