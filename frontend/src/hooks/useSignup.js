import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import useAuthStore from '../zustand/useAuthStore'

const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const setAuthUser = useAuthStore((state) => state.setAuthUser)

  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
    const success = handleInputError({ fullName, username, password, confirmPassword, gender })
    if (!success) return

    setLoading(true)
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/signup',
        {
          fullName,
          username,
          password,
          confirmPassword,
          gender
        },
        { withCredentials: true }
      )
      toast.success(response.data.message)
      setAuthUser(response.data)
    } catch (error) {
      toast.error('Signup failed: ' + error.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    signup,
    loading
  }
}

export default useSignup

function handleInputError({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error('Please fill all required fields')
    return false
  }
  if (password !== confirmPassword) {
    toast.error('Passwords do not match')
    return false
  }
  if (password.length < 6) {
    toast.error('Password should be at least 6 characters long')
    return false
  }
  return true
}
