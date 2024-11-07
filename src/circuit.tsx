import React, { useState } from 'react'

const circuit = () => {
    const[text,setText]=useState('')
    const [isError,setIsError]=useState(false)
    const [color,setColor]=useState('white')
    // const fistValue=text||'hellow world'
    // const secondValue=text&&'hellow world'
    const colorTaggle=()=>{
      setColor(color==='white'? 'black':'white')

    }
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen space-y-2 "
     style={{ backgroundColor: color, color: color === 'white' ? 'black' : 'white' }} 
    >
        
    {text || 'john doe'}
    {text && <h1>Hello world</h1>}
    <button 
      onClick={() => setIsError(!isError)} 
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
    >
      Toggle Error
    </button>
    {isError && <h1>Error........</h1>}

    {/* Tarciary operator */}
    {isError?<h1>There is  error</h1>:<h2><section>
        There is no error!
        </section></h2>}
  </div>
  <div className="absolute top-1 right-4 ">
          <button
            onClick={colorTaggle}
            className="px-4 py-2  bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
          >
            Change Color Mode
          </button>
        </div>

  </>
  )
}

export default circuit