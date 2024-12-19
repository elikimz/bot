import React from 'react'
import { useState } from 'react'
const App = () => {
  const [value,setValue]=useState(0)
 const  setCounter=()=>{
    const g =value+1
    setValue(g)
console.log(g)
  }
  const  setCounters=()=>{
    const g =value-1
    setValue(g)
console.log(g)
  }
  const  setSet=()=>{
    setValue(0)
console.log(value)
  }

  const increaseNow=()=>{
    setTimeout(()=>{
      // const g=value+1
      setValue((prevState)=>{
        return prevState+1

      })
    },2000)
  }
  return (
    <>
    <section className="flex flex-col items-center justify-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-lg w-1/2 mx-auto my-8">
    <p className="text-3xl font-bold text-gray-800">{value}</p>
    
    
    <button  className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105" onClick={setCounters}>decrease</button>
    <button  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105" onClick={setSet}>reset</button>
    <button  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105" onClick={setCounter}>Increase</button>
    <button  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105" onClick={increaseNow}>Increase Timer</button>
    </section>
    </>

  )
}

export default App