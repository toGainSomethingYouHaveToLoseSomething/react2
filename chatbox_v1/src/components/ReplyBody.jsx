import react from 'react'
import ChatMsg from './ChatMsg'

export default function ReplyBody(props) {
    
    const chatMessages = props.chatMessages;

    return (
        <>
            {chatMessages.map((chatmessage) => {
                return (
                    <ChatMsg
                        message={chatmessage.message}
                        sender={chatmessage.sender}
                        key={chatmessage.id}
                    />
                )
            })}
        </>
    )
}
