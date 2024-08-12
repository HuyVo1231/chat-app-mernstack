import { useEffect, useState } from 'react'
import axios from 'axios'
import useConversationStore from './../zustand/useConversationStore'
export const useGetMessage = () => {
  const [loading, setLoading] = useState(false)
  const { selectedConversation, messages, setMessages } = useConversationStore()

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true)
      try {
        const res = await axios.get(
          `https://chat-app-mernstack-j7mk.onrender.com/api/messages/${selectedConversation._id}`,
          {
            withCredentials: true
          }
        )
        setMessages(res.data)
      } catch (error) {
        console.error('get message failed :', error.response.data.message)
        setMessages([]) // Reset messages when conversation changes
      } finally {
        setLoading(false)
      }
    }
    if (selectedConversation?._id) getMessage()
  }, [selectedConversation?._id, setMessages])
  return { loading, messages }
}
