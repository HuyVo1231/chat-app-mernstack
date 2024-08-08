import MessageInput from './MessageInput'
import Messages from './Messages'
import { TiMessages } from 'react-icons/ti'

const MessageContainer = () => {
  const noChatSelected = true

  return (
    <div className='md:w-[100%] flex flex-col bg-white'>
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <div>
          <div className='bg-blue-100 px-4 py-2 mb-2'>
            <span className='label-text'>To: </span>
            <span className='text-gray-900 font-bold'>Nhat Huy</span>
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
  return (
    <div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-blue-200 to-green-200'>
      <div className='px-4 sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2'>
        <p>Welcome to Nhat Huy</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}
