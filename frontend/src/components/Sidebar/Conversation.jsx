const Conversation = () => {
  return (
    <>
      <div className='flex gap-2 items-center hover:bg-gray-300 rounded py-2 px-4 cursor-pointer'>
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img
              src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              alt='Profile'
            />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex justify-between'>
            <p className='font-semibold text-gray-800'>Nhat Huy</p>
            <div className='swap-on text-xl'>🥳</div>
          </div>
        </div>
      </div>
      <div className='divider my-0 py-0 h-2'></div>
    </>
  )
}

export default Conversation
