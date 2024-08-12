import { createContext, useContext, useState } from 'react'

export const ConversationContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useConversationContext = () => {
  return useContext(ConversationContext)
}

export const ConversationContextPrivoder = ({ children }) => {
  const [conversation, setConversation] = useState(null)

  return (
    <ConversationContext.Provider value={{ conversation, setConversation }}>
      {children}
    </ConversationContext.Provider>
  )
}
