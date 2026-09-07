import React from 'react'
import ChatMsg from './ChatMsg'
import './../css/replyBody.css'

export default function ReplyBody(props) {
    const chatMessages = props.chatMessages;

    const replybodyDiv = React.useRef(null)

    React.useEffect(()=>{
        const containerElem =  replybodyDiv.current
        if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight
        }
    },[chatMessages])


    return (
        <div className='replybody-container' ref={replybodyDiv}>
            {chatMessages.map((chatmessage) => {
                return (
                    <ChatMsg
                        message={chatmessage.message}
                        sender={chatmessage.sender}
                        key={chatmessage.id}
                    />
                )
            })}
        </div>
    )
}
