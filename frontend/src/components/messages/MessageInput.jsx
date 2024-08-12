import { useState } from 'react'
import { IoIosSend } from 'react-icons/io'
import { useSendMessage } from '../../hooks/useSendMessage'

const MessageInput = () => {
  const { loading, sendMessage } = useSendMessage()
  const [message, setMessage] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message) {
      return
    }
    await sendMessage(message)
    setMessage('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full font-semibold  relative'>
        <input
          type='text'
          className='border text-sm rounded block w-full p-2.5 bg-white focus:border-gray-400 transition duration-300'
          placeholder='Enter your message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' className='absolute inset-y-0 end-0 pe-5 flex items-center text-2xl'>
          {loading ? <span className='loading loading-spinner'></span> : <IoIosSend />}
        </button>
      </div>
    </form>
  )
}

export default MessageInput
