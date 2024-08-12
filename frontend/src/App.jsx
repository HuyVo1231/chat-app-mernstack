import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar/Navbar'
import { Toaster } from 'react-hot-toast'
import useAuthStore from './zustand/useAuthStore'

function App() {
  const { authUser } = useAuthStore()

  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />}></Route>
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />}></Route>
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />}></Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
