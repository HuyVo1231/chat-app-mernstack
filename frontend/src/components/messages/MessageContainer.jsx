import MessageInput from './MessageInput'
import Messages from './Messages'
import { TiMessages } from 'react-icons/ti'
import useConversationStore from './../../zustand/useConversationStore'
import { useEffect } from 'react'
import useAuthStore from '../../zustand/useAuthStore'

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversationStore()

  useEffect(() => {
    // Clean up function
    return () => {
      setSelectedConversation(null)
    }
  }, [setSelectedConversation])

  return (
    <div className='md:w-[100%] flex flex-col h-full bg-white'>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className='flex flex-col h-full'>
          <div className='bg-blue-100 px-4 py-2 mb-2'>
            <span className='label-text'>To: </span>
            <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </div>
      )}
    </div>
  )
}
export default MessageContainer

const NoChatSelected = () => {
  const { authUser } = useAuthStore()

  return (
    <div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-blue-200 to-green-200'>
      <div className='px-4 sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2'>
        <p>
          Welcome to <span className='font-bold text-black'>{authUser.fullName}</span>
        </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}
