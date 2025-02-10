import Modal from "./modal"
import data from "./data"
import { useState } from "react"

const UseReducer = () => {
  const[name,setName]=useState("")
  const [people,setPeople]=useState(data);
  const[showModal,setShowModal]=useState(false);

  console.log(people)

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name){
   setShowModal(true)

   setPeople([...people,{id:new Date().getTime().toString(),name}])
   setName("")
    }
    else{
      setShowModal(true)
    }

  };
  return(
   <>
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
  {showModal && <Modal />}

  <form 
    onSubmit={handleSubmit} 
    className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
  >
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">Name:</label>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Enter name..."
      />
    </div>

    <button 
      type="submit"
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
    >
      Add
    </button>
  </form>
  {people.map((person)=>{
    return <div key={person.id}>
      <h4>{person.name}</h4>

    </div>
  })}
</div>
  </>
  );
}

export default UseReducer
