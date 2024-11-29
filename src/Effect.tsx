//import React, { Component } from 'react'
import { useEffect ,useState} from 'react'

const Effect = () => {
  const [value,setValue]=useState(0)
useEffect(()=>{
  if(value>1){
    document.title=`new message(${value})`
  }
 
  console.log("call useEffect")
})
console.log( "render Component")
  return (
    <>
    <p>{value}</p>
    <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105" onClick={()=>setValue(value+1)}>click</button>
    
    </>
  )
}

export default Effect