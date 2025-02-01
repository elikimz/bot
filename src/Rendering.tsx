import React, { useState } from 'react'
import Spinner from './Spinner';
 const url='https://api.github.com/users/QuincyLarson'

 
const Rendering = () => {
  const [loading,isLoading]=useState(false);
  if(loading)
    return <Spinner></Spinner> 
  
  return <h2>multiple returns</h2>
};

export default Rendering
