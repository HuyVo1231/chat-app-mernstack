import MessageContainer from '../../components/messages/MessageContainer'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {
  return (
    <div className='flex justify-center items-center h-full w-full bg-gradient-to-r from-blue-200 to-green-200'>
      <div className='flex sm:h-[450px] md:h-[550px] lg:w-[90%] xl:w-[80%]  rounded-lg border overflow-hidden p-4 bg-white shadow-lg'>
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home
