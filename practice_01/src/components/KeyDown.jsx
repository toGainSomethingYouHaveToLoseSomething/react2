import React, { useState } from 'react'

export default function KeyDown() {

    const [Name, SetName] =useState('')

    const [name, setName] = useState('')

    function handleChange(event){
        setName(event.target.value)
    }

    function handleClick(){
        SetName(name)
        setName('')
    }

    function handleKeyDown(event){
        if(event.key==='Escape'){
            setName('')
        }
        if(event.key==='Enter'){
            handleClick()
        }
    }

  return (
    <>
        <input 
            type="text" 
            placeholder='enter your name'
            onChange={handleChange}
            value={name}
            onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>send</button>
        <p>
            your name is: {Name}
        </p>
    </>
  )
}
