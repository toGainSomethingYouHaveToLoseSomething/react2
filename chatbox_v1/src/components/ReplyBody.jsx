import ChatMsg from './ChatMsg'

export default function ReplyBody() {
  return (
    <>
      <ChatMsg 
        message="Hello, how are you?" 
        sender="user" 
      />
      <ChatMsg 
        message="I'm doing well, thank you for asking!" 
        sender="bot" 
      />
      <ChatMsg 
        message="That's great to hear!" 
        sender="user" 
      />
      <ChatMsg 
        message="Yes, it's always nice to have a good day." 
        sender="bot" 
      />
    </>
  )
}
