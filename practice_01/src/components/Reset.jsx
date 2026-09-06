import React from 'react'


export default function Reset({setCount}) {

    const handleOnClick =()=>{
        setCount(0)
    }

  return (
    <>
        <button onClick={handleOnClick}>Reset</button>
    </>
  )
}
