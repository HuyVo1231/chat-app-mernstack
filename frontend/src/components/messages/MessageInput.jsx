import { IoIosSend } from 'react-icons/io'

const MessageInput = () => {
  return (
    <form>
      <div className='w-full font-semibold  relative'>
        <input
          type='text'
          className='border text-sm rounded block w-full p-2.5 bg-white focus:border-gray-400 transition duration-300'
          placeholder='Enter your message...'
        />
        <button
          type='submit'
          className='absolute inset-y-0 end-0 pe-5 flex items-center text-2xl'>
          <IoIosSend />
        </button>
      </div>
    </form>
  )
}

export default MessageInput
