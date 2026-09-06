import React, { useState } from 'react'

export default function NameInput() {

  const [inputValue , setInputValue] = useState('')

  const handleOnChange = (event) =>{
    setInputValue(event.target.value)
  }

  function handleReset(){
    setInputValue('')
  }

  function handleExample(){
    setInputValue('Alice')
  }

  return (
    <>
        <input 
            type="text" 
            placeholder='type your name'
            onChange={handleOnChange}
            value={inputValue}
        />
        
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleExample}>example</button>
        <p>
            hello {inputValue}
        </p>
    </>
  )
}
