import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
        <h2 className='text-2xl font-medium text-black py-2'>Chat App</h2>
      </div>
      <Home />
    </div>
  )
}

export default App
