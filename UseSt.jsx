import React from 'react'
import { useState } from 'react'
export default function LoginPage() {
    const[val,setVal]=useState(0);
    const inc=()=>{
        setVal(val+1);
    };

  return (
    <>
    <p>Count: {val}</p>
    <button onClick={inc}>Click here!</button>
    </>
  )
}
