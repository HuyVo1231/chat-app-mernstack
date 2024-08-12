import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import useAuthStore from '../zustand/useAuthStore'

const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const logout = useAuthStore((state) => state.logout)

  const handleLogout = async () => {
    setLoading(true)
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/logout',
        {},
        {
          withCredentials: true
        }
      )
      if (res.data.message) {
        toast.success(res.data.message)
        logout()
      }
    } catch (error) {
      toast.error('Logout failed: ' + error.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    logout: handleLogout,
    loading
  }
}

export default useLogout
