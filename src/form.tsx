
import { useState } from 'react'

const Form = () => {
  const [FirstName,setFirstName]=useState('')
  const [Email,setEmail]=useState('')
  const [Age,setAge]=useState('')
  
  const [people,setPeople]=useState<{FirstName:String;Email:String;Age:string}[]>([])

const handleSubmit=(e)=>{
e.preventDefault();
if(FirstName&&Email&&Age){
  const person={FirstName,Email,Age};
  setPeople((people)=>{
    return(
      [...people, person]
    )
  });
  setFirstName('')
  setEmail('')
  setAge('')
  console.log(person)
}
  else{
    alert('Please enter First Name and Email')
    return;
  }
}

  return (
    <>
   <form className='bg-green-400 px-10 py-10  mt-10 max-w-lg mx-auto 'onSubmit={handleSubmit}>
    <div className=' flex flex-col ml-10  '>
      <label htmlFor='FirstName'>Name:</label>
      <input 
       type='FirstName' 
       id='FirstName' name='FirstName'
       value={FirstName}
       onChange={(e)=>setFirstName(e.target.value)}/>

      <label htmlFor='email'>Email:</label>
      <input
        type='text'
        id='email' 
        name='email'
        value={Email}
        onChange={(e)=>setEmail(e.target.value)} />

     <label htmlFor='Age'>Age:</label>
      <input
        type='text'
        id='age' 
        name='age'
        value={Age}
        onChange={(e)=>setAge(e.target.value)} />
    </div>

    <div className=' bg-white rounded-md mt-5 ml-10 w-max px-3 hover:bg-sky-700'>
    <button type='submit'>Add Person</button>
    </div>
    </form>
     {people.map((person)=>{
      const {FirstName,Email,Age}=person
      return(
        <>
        <div className='bg-emerald-100 flex flex-col mx-auto max-w-lg px-3 text-black border-double border-4 border-sky-600'>
         <h4>Name:{FirstName}</h4>
         <p>Email:{Email}</p>
         <p>Age:{Age}</p>
       
        <div className='flex justify-end '>
        <button  className='bg-green-600 rounded-md w-max px-3 hover:bg-sky-700 flex items-end -mt-8 mb-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
       </svg>
        </button>
        </div>
        </div>
        </>
      )

   })}
   </> 
 
  )
}

export default Form