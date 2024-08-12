import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  const { loading, login } = useLogin()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    await login({ username, password })
  }

  return (
    <div className='flex items-center justify-center h-full'>
      <div className='w-96 border rounded bg-white px-7 py-10'>
        <div className='text-xl font-semibold text-center'>
          Login
          <span className='text-blue-600'> ChatApp</span>
        </div>
        <form action=''>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter your username...'
              className='input input-bordered w-full max-w-xs'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter your password...'
              className='input input-bordered w-full max-w-xs'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='text-right'>
              <Link
                to='/signup'
                className='text-sm hover:underline text-blue-400 mt-2 inline-block'>
                Dont have an account?
              </Link>
            </div>
            <button
              className='w-full bg-blue-600 p-2 text-white mt-2'
              disabled={loading}
              onClick={handleLogin}>
              {loading ? <span className='loading loading-spinner'></span> : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
