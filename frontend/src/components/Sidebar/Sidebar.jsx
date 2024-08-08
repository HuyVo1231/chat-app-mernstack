import Conversations from './Conversations'
import LoggoutButton from './LoggoutButton'
import SearchInput from './SearchInput'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-300 bg-gray-50'>
      <SearchInput />
      <div className='divider my-2'></div>
      <Conversations />
      <LoggoutButton />
    </div>
  )
}

export default Sidebar
