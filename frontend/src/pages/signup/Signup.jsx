import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='w-96 border rounded bg-white px-7 py-10'>
        <div className='text-xl text-center font-semibold'>
          Sign up <span className='text-blue-600'> ChatApp</span>
        </div>
        <form>
          <div>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>FullName</span>
              </label>
              <input
                type='text'
                placeholder='Enter your fullname...'
                className='input input-bordered w-full max-w-xs'
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
              />
            </div>

            {/* GENDER CHECKBOX */}
            <GenderCheckbox />
            <div className='text-right'>
              <a
                href='/login'
                className='text-sm hover:underline text-blue-400 mt-2 inline-block'>
                You have already account?
              </a>
            </div>
            <button className='w-full bg-blue-600 p-2 text-white mt-2'>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
