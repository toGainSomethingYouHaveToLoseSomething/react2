import react from 'react'
import Inputbox from './components/Inputbox'
import './css/app.css'
import ReplyBody from './components/ReplyBody'

function App() {
  
  const [chatMessages, setChatMessages] = react.useState([
          {
              message: "Hello, how are you?",
              sender: "user",
              id: "id1"
          },
          {
              message: "I'm doing well, thank you for asking!",
              sender: "bot",
              id: "id2"
          },
          {
              message: "That's great to hear!",
              sender: "user",
              id: "id3"
          },
          {
              message: "Yes, it's always nice to have a good day.",
              sender: "bot",
              id: "id4"
          }
      ])

  return (
    <>
      <div className='wbody'>
        <div className='container'>
          <Inputbox 
            setChatMessages={setChatMessages} 
            chatMessages={chatMessages}
          />

          <ReplyBody chatMessages={chatMessages} />
        </div>
      </div>

    </>
  )
}

export default App
