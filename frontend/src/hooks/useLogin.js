import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import useAuthStore from '../zustand/useAuthStore'

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const setAuthUser = useAuthStore((state) => state.setAuthUser)

  const login = async ({ username, password }) => {
    const success = handleInputError({ username, password })
    if (!success) return

    setLoading(true)
    try {
      const response = await axios.post(
        'https://chat-app-mernstack-j7mk.onrender.com/api/auth/login',
        {
          username,
          password
        },
        { withCredentials: true }
      )
      toast.success(response.data.message)
      setAuthUser(response.data)
    } catch (error) {
      toast.error('Login failed: ' + error.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    login,
    loading
  }
}

export default useLogin

function handleInputError({ username, password }) {
  if (!username || !password) {
    toast.error('Please fill all required fields')
    return false
  }
  if (password.length < 6) {
    toast.error('Password should be at least 6 characters long')
    return false
  }
  return true
}
