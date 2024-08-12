import { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from './../../hooks/useSignup'

const Signup = () => {
  const { loading, signup } = useSignup()
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const handleCheckboxGender = (gender) => {
    setInputs({ ...inputs, gender })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className='flex items-center justify-center h-full'>
      <div className='w-96 border rounded bg-white px-7 py-10'>
        <div className='text-xl text-center font-semibold'>
          Sign up <span className='text-blue-600'> ChatApp</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>FullName</span>
              </label>
              <input
                type='text'
                placeholder='Enter your fullname...'
                className='input input-bordered w-full max-w-xs'
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              />
            </div>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input
                type='text'
                placeholder='Enter your username...'
                className='input input-bordered w-full max-w-xs'
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              />
            </div>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='Enter your password...'
                className='input input-bordered w-full max-w-xs'
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              />
            </div>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>ConfirmPassword</span>
              </label>
              <input
                type='password'
                placeholder='Enter your confirmpassword...'
                className='input input-bordered w-full max-w-xs'
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              />
            </div>

            {/* GENDER CHECKBOX */}
            <GenderCheckbox
              onCheckboxChange={handleCheckboxGender}
              selectedGender={inputs.gender}
            />
            <div className='text-right'>
              <Link to='/login' className='text-sm hover:underline text-blue-400 mt-2 inline-block'>
                You have already account?
              </Link>
            </div>
            <button className='w-full bg-blue-600 p-2 text-white mt-2' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : 'Sign up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
