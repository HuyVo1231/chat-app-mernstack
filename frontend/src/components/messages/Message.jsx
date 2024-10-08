import useConversationStore from '../../zustand/useConversationStore'
import useAuthStore from './../../zustand/useAuthStore'
import { convertToVNTime } from './../../utils/extractTime'

const Message = ({ message }) => {
  const { authUser } = useAuthStore()
  const { selectedConversation } = useConversationStore() // Invoke the function here
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic
  const bubbleBgColor = fromMe ? 'bg-red-400' : ''
  const shakeClass = message.shouldShake ? 'shake' : ''

  return (
    <div>
      <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img alt='Tailwind CSS chat bubble component' src={profilePic} />
          </div>
        </div>

        <div
          className={`chat-bubble  text-white ${bubbleBgColor} ${shakeClass} `}>
          {message.message}
        </div>
        <div className={`chat-footer opacity-50`}>
          {convertToVNTime(message.createdAt)}
        </div>
      </div>
    </div>
  )
}

export default Message
