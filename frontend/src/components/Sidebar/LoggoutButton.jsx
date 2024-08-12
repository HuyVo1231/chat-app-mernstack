import { CiLogout } from 'react-icons/ci'
import useLogout from '../../hooks/useLogout'

const LoggoutButton = () => {
  const { logout, loading } = useLogout()

  return (
    <div className='mt-auto' onClick={logout}>
      {loading ? (
        <span className='loading loading-spinner'></span>
      ) : (
        <CiLogout className='h-6 w-6 text-gray-900 cursor-pointer' />
      )}
    </div>
  )
}

export default LoggoutButton
