import create from 'zustand'

const useAuthStore = create((set) => ({
  authUser: JSON.parse(localStorage.getItem('chat-user')) || null,
  setAuthUser: (user) => {
    localStorage.setItem('chat-user', JSON.stringify(user))
    set({ authUser: user })
  },
  logout: () => {
    localStorage.removeItem('chat-user')
    set({ authUser: null })
  }
}))

export default useAuthStore
