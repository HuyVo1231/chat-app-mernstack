import Conversation from './Conversation'
import useConversation from './../../hooks/useConversation'
import { randomEmoji } from './../../utils/Emoji'

const Conversations = () => {
  const { loading, conversations } = useConversation()
  return (
    <div className='py-2 flex flex-col overflow-y-scroll custom-scrollbar bg-white'>
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={randomEmoji()}
          lastIndex={index === conversations.length - 1}
        />
      ))}
      {loading ? <span className='loading loading-spinner'></span> : null}
    </div>
  )
}

export default Conversations
