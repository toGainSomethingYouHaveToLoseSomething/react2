import React from 'react'
import '../css/inputbox.css'

export default function Inputbox() {
  return (
    <>
      <div class='inputbox'>
        <input 
          id='input' 
          type="text" 
          placeholder="Send a message to Chatbot" 
        />
        <button id='button'>Send</button>
      </div>
    </>
  )
}
