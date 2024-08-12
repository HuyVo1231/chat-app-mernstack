import { useEffect, useRef } from 'react'
import { useGetMessage } from '../../hooks/useGetMessage'
import useListenMessages from '../../hooks/useListenMessages'
import Message from './Message'

const Messages = () => {
  const { messages, loading } = useGetMessage()
  const lastMessageRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' }) // Scroll to bottom when new messages arrive
    }, 100)
  }, [messages])

  useListenMessages()
  return (
    <div className='flex-1 px-4 overflow-y-scroll custom-scrollbar bg-gray-50'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <div key={index} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  )
}

export default Messages
