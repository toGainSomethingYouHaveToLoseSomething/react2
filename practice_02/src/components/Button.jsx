import React, { useState } from 'react'
import './../CSS/button.css'

export default function Button() {

    const [isButtonOn, setIsButtonOn] =  useState(true)

    function handleOnClick(){
        if(isButtonOn){
            setIsButtonOn(false)
        }
        else{
            setIsButtonOn(true)
        }
    }

  return (
    <>
      <button 
        id='btn'
        onClick={handleOnClick}
        className={isButtonOn ? 'button-green' : 'button-red'}
      >
        {isButtonOn ? 'ON' : 'OFF'}
      </button>
    </>
  )
}
