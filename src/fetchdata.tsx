import React, { useEffect, useState } from 'react'
 const url='https://api.github.com/users';
const Fetchdata = () => {

  const [users,setUsers]=useState([]);
  const getUsers=async()=>{
    const response=await fetch(url);
    const users=await response.json();
    console.log(users)
    setUsers(users)
    console.log(users)
  }

  useEffect(()=>{
     getUsers()
  },[]);

  return (
    <>
    <div className="p-8">
      <h1 className='absolute inset-x-0 top-0 h-16 flex items-center justify-center text-white bg-blue-600 shadow-lg text-xl font-semibold'>
        GitHub Users
      </h1>

      {/* Grid layout for users */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-24">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <div key={id} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img src={avatar_url} alt={login} className="w-24 h-24 rounded-full mb-4" />
              <h4 className="font-semibold text-lg mb-2">{login}</h4>
              <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                View Profile
              </a>
            </div>
          );
        })}
      </div>
    </div>
  </>
  )
}

export default Fetchdata
