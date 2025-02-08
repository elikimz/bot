import React, { useState } from 'react'

const circuit = () => {
const [text,setText]=useState('')
const [isError,setIsEror]=useState(false)
//  const firstValue=text|| 'hellow world';
//  const secondValue= text && 'hellow world';


  return (
    <div>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
     <h1> {text || "john doe"}</h1>
     <button className='text-blue-600' onClick={()=>setIsEror(!isError)}>taggle error</button>
     {isError && <h1>Error.........</h1>}

     {isError ?<h1>there is error....</h1>: <h1>there is no error!!!!</h1>}
     
    </div>
  )
}

export default circuit
