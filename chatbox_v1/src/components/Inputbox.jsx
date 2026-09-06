import React from 'react'
import '../css/inputbox.css'


export default function Inputbox({chatMessages, setChatMessages}) {

  const [inputValue, setInputValue] = React.useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleEnter(event){
    if(event.key==='Enter'){
      handleSendClick()
    }
    if(event.key==='Escape'){
      setInputValue('')
    }
  }

  async function handleSendClick() {
    if (inputValue.trim() === '') return;
    const newChatMessages = [...chatMessages, {
      message: inputValue,
      sender: "user",
      id: crypto.randomUUID()
    }]
    
    setChatMessages(newChatMessages)

    setChatMessages([...newChatMessages, {
      message: 'Loading....',
      sender: "bot",
      id: crypto.randomUUID()
    }]);


    const response = await Chatbot.getResponse(inputValue);

    setTimeout(() => {
      setChatMessages([...newChatMessages, {
      message: response,
      sender: "bot",
      id: crypto.randomUUID()
    }]);
    }, 1000);

    

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
          onKeyDown={handleEnter}
        />
        <button onClick={handleSendClick} id='button'>Send</button>
      </div>
    </>
  )
}
