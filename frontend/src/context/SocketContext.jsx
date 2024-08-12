import { createContext, useContext, useEffect, useState } from 'react'
import useAuthStore from './../zustand/useAuthStore'
import io from 'socket.io-client'

export const SocketContext = createContext()

export const useSocketContext = () => {
  return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [onlineUser, setOnlineUser] = useState([])
  const { authUser } = useAuthStore()

  useEffect(() => {
    if (authUser) {
      const socketInstance = io('https://chat-app-mernstack-j7mk.onrender.com', {
        query: {
          userId: authUser._id
        }
      })
      setSocket(socketInstance)

      // Listening to the 'getOnlineUsers' event
      socketInstance.on('getOnlineUsers', (users) => {
        setOnlineUser(users)
      })

      return () => socketInstance.close()
    } else {
      if (socket) {
        socket.close()
        setSocket(null)
      }
    }
  }, [authUser])

  return <SocketContext.Provider value={{ socket, onlineUser }}>{children}</SocketContext.Provider>
}

export default SocketContextProvider
