import useConversationStore from '../../zustand/useConversationStore'
import { useSocketContext } from '../../context/SocketContext'

const Conversation = ({ conversation, emoji, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } =
    useConversationStore()
  const isSelected = selectedConversation?._id === conversation._id

  const { onlineUser } = useSocketContext()
  const isOnline = onlineUser.includes(conversation._id)
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-gray-300 rounded py-2 px-4 cursor-pointer
        ${isSelected ? 'bg-gray-300' : ''}
      `}
        onClick={() => setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
          <div className='w-12 rounded-full'>
            <img src={conversation.profilePic} alt='Profile' />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex justify-between'>
            <p className='font-semibold text-gray-800'>
              {conversation.fullName}
            </p>
            <div className='swap-on text-xl'>{emoji}</div>
          </div>
        </div>
      </div>
      {!lastIndex && <div className='divider my-0 py-0 h-2'></div>}
    </>
  )
}

export default Conversation
