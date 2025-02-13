// import { useEffect, useState } from 'react'
// import Spinner from './Spinner';
//  const url='https://api.github.com/users/QuincyLarson'

 
// const Rendering = () => {
//   const [loading,setLoading]=useState(true);
//   const [isError,setIsError]=useState(false)
//   const [user,setUser]=useState(null)


  
//    const getUsers=async()=>{
//     try{
//       setLoading(true);
//       const response=await fetch(url);
//       if(!response.ok)
//         throw new Error("failed to fetch data");

//       const userData=await response.json()
//       setUser(userData)
//       setIsError(false)
//     }
//      finally{
//         setLoading(false)
//       }

   
        
//     };

//       useEffect(()=>{
//        getUsers()
//        },[]);


//    if(loading)
//     return (<div>
//       <Spinner></Spinner> 
//     </div>)

//    if (isError)
//     return(
//       <div>
//         <h1>Error......</h1>
//       </div>
//       ) 
  

//    return (

//     <div className='flex items-center'>
//     <h2>{user?.login }</h2>
//     <img src={user?.avatar_url} alt={user?.login} width={100} />
//     <p>{user?.followers}</p>
//   </div>
//    )

    
// };

// export default Rendering
