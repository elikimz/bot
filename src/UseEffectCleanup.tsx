// import { useEffect, useState } from 'react'

// const UseEffectCleanup = () => {
//   const[size,SetSize]=useState(window.innerWidth)
//   const checksize=()=>{
//     SetSize(window.innerWidth)
//   }

//   useEffect(()=>{
//     window.addEventListener('resize',checksize)
//     return (()=>{
//       window.removeEventListener('resize',checksize)
//     }
//     )
//   })
//   console.log(size)
//   return (
   
//     <div>
//       <h2>{size} PX</h2>
//     </div>
//   )
// }

// export default UseEffectCleanup
