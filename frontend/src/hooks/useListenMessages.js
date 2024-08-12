import { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversationStore from './../zustand/useConversationStore'
const useListenMessages = () => {
  const { socket } = useSocketContext()
  const { messages, setMessages } = useConversationStore()

  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
      newMessage.shouldShake = true
      setMessages([...messages, newMessage])
    })

    return () => socket?.off('newMessage')
  }, [socket, messages, setMessages])
}

export default useListenMessages
