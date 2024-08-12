import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import useConversationStore from './../zustand/useConversationStore'
export const useSendMessage = () => {
  const [loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useConversationStore()

  const sendMessage = async (message) => {
    setLoading(true)
    try {
      const res = await axios.post(
        `https://chat-app-mernstack-j7mk.onrender.com/api/messages/send/${selectedConversation._id}`,
        { message },
        { withCredentials: true }
      )
      setMessages([...messages, res.data])
      console.log([...messages, res.data])
    } catch (error) {
      toast.error('Send message failed: ' + error.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    sendMessage
  }
}
