import React from 'react'
import { FaPlus,FaMinus } from "react-icons/fa";
import { useState } from 'react';
import './App.css'


const App = () => {

  const [count, setCount] = useState(0);

  return (
    <>
    <h1>Increment & Decrement</h1>
      <div className='container'>
        
        <div className='counter'>
          
          
          <p onClick={()=> setCount(count-1)}><FaMinus /></p>
          <p>{count}</p>
          <p onClick={()=>setCount(count+1)}><FaPlus /></p>
      
        </div>
        
      </div>
      <button onClick={()=> setCount(0)}>resets</button>
    </>
  )
}

export default App