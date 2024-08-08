import { FaSearch } from 'react-icons/fa'
const SearchInput = () => {
  return (
    <form className='flex gap-4'>
      <input
        type='text'
        placeholder='Search...'
        className='input input-bordered rounded-full'
      />
      <button
        type='submit'
        className='btn btn-circle bg-sky-500 hover:bg-sky-600 text-white'>
        <FaSearch className='w-4 h-4 outline-none' />
      </button>
    </form>
  )
}

export default SearchInput
