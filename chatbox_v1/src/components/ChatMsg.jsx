import '../css/chatmsg.css'
import sasuke from '../images/sasuke.jpg'
import robot from '../images/robot.jpeg'

export default function ChatMsg(props) {

    const {message, sender} = props;
    return (
        <div className={sender === 'bot' ? 'bot' : 'user'}>
            {sender === 'bot' && (
                <img  src={robot} alt="robot" />
            )}

            <span className='textarea'>
                {message}
            </span>

            {sender === 'user' && (
                <img  src={sasuke} alt="sasuke" />
            )}

        </div>
    )
}