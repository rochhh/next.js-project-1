'use client';

import React, { useState } from 'react'
import './app.css'

const Home = () => {
  
  const [data , setData] = useState('');
  
  const handleClick = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  } 

  return (
    <div>
       <div className='inp' >
        <input  type="text" />
        <button onClick={handleClick} className='btn' >Create</button>
       </div>
    </div>
  )
}

export default Home