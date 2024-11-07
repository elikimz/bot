import React from 'react'
import { useEffect,useState } from 'react'
const url='https://api.github.com/users/ivey'
import Spinner from './Spinner';


const Rendering = () => {
const[isloading,setIsLoading]=useState(true)
const [iserror,setIsError]=useState(false)
const [user,setUsers]=useState(null)

useEffect(()=>{
    fetch(url).
      then((resp)=>{
        if(resp.status>=200 && resp.status<=299){
            return resp.json();
        }
        else{
            setIsError(true)
            setIsLoading(false)
            throw new Error(resp.statusText)
        }
      }).
      then((user)=>{
        const {login} = user
        setUsers(user)
        setIsLoading(false)
        console.log(user)
      }).
      catch(error=>console.log(error))
      setUsers(user)
     
    
},[]);
   
    
   
   if(isloading)
    return <Spinner />;
    if(iserror)
        return <p>Error Occured</p>

    if (!user) return null;

  const { login, avatar_url, html_url } = user;

  return (
    
    <>
  <section className="flex justify-center items-center py-10">
      <ul className="list-none p-0">
        <li
          key={login}
          className="border border-gray-300 rounded-lg p-5 max-w-xs mx-auto text-center shadow-md"
        >
          <img
            src={avatar_url}
            alt={login}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{login}</h2>
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-blue-500 hover:underline"
          >
            View Profile
          </a>
        </li>
      </ul>
    </section>
    </>
  )
}

export default Rendering