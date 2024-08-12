// useConversationStore.js
import create from 'zustand'

const useConversationStore = create((set) => ({
  messages: [],
  setMessages: (newMessages) => {
    set({ messages: newMessages })
  },
  selectedConversation: null,
  setSelectedConversation: (conversation) => set({ selectedConversation: conversation })
}))

export default useConversationStore
