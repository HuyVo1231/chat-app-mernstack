import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const useConversation = () => {
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true)
      try {
        const res = await axios.get('http://localhost:5000/api/user/getAll', {
          withCredentials: true
        })

        setConversations(res.data)
      } catch (error) {
        toast.error('Get conversation failed: ' + error.response.data.message)
      } finally {
        setLoading(false)
      }
    }
    getConversation()
  }, [])

  return {
    loading,
    conversations
  }
}

export default useConversation
