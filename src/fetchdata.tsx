//import React from 'react'
import { useEffect,useState } from 'react'
 const url="https://api.github.com/users"
 

const Fetchdata = () => {

    const [users,setUsers]=useState([]);

    const getUsers=async () =>{
        const response=await fetch(url)
        const  users= await response.json();
        setUsers(users);
        // console.log(Users);
    }

    useEffect(()=>{
        getUsers();
    },[]);
    
  return (
    <>
    <section className="p-4 bg-gray-200 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4 text-center">Github Users</h2>
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {users.map((user) => {
      const { id, login, avatar_url } = user;
      return (
        <li key={id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <img src={avatar_url} alt={login} className="w-24 h-24 rounded-full mb-2" />
          <h3 className="text-lg font-semibold">{login}</h3>
        </li>
      );
    })}
  </ul>
</section>

    </>
  )
}

export default Fetchdata



