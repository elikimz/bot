import { useState } from "react";

const Form = () => {
  const [firstName,setFirstName]=useState('');
  const[email,setEmail]=useState('');
  const[people,setPeople]=useState([])
  const[age,setAge]=useState()


const handleSubmit=(e)=>{
     e.preventDefault();
   if(firstName&&email){
    const person={id: new Date().getTime().toString(),firstName,email,age}
    setPeople((people)=>{
      return [...people,person]
    });
     setFirstName('')
      setEmail('')
      setAge('')
     

  console.log(person)
}
   else {
   console.log('empty value');
}


};




  return (
    <>
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
    <form className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Enter your name"
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
        />
         <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
          Age:
        </label>
        <input
          type="text"
          id="age"
          name="age"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Enter your Age"
          value={age}
          onChange={(e)=>setAge(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}
        type="submit" 
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
      >
        Submit
      </button>
      
    </form>
    <div className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
  {people.map((person) => {
    const { id, firstName, email,age } = person;

    return (
      <div key={id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900">{firstName}</h4>
        <p className="text-sm text-gray-600">{email}</p>
        <p>{age}</p>
      </div>
    );
  })}
</div>
      
  </div>

  
  </>
  )
 
}

export default Form
