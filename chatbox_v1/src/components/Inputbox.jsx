import React from 'react'
import '../css/inputbox.css'


export default function Inputbox({chatMessages, setChatMessages}) {

  const [inputValue, setInputValue] = React.useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSendClick() {
    if (inputValue.trim() === '') return;
    const newChatMessages = [...chatMessages, {
      message: inputValue,
      sender: "user",
      id: crypto.randomUUID()
    }]
    
    setChatMessages(newChatMessages);

    const response =  Chatbot.getResponse(inputValue);
    setChatMessages([...newChatMessages, {
      message: response,
      sender: "bot",
      id: crypto.randomUUID()
    }]);

    setInputValue('');
  }

  return (
    <>
      <div className='inputbox'>
        <input 
          id='input' 
          type="text" 
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Send a message to Chatbot" 
        />
        <button onClick={handleSendClick} id='button'>Send</button>
      </div>
    </>
  )
}
