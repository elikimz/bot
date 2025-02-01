import  { useEffect, useState } from 'react'

const Form = () => {
  const[value,Setvalue]=useState(0);

  console.log('call use effect')
  
    useEffect(()=>{
      if (value >=1){
          document.title=`New message(${value})`
      }
    console.log("render components")

  },[value]);
  return (
    <div>
      <h1>{value}</h1>
    <button onClick={()=>Setvalue(value+1)}>click here</button> 
    </div>
  )
};

export default Form
