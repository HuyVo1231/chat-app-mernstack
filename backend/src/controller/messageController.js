import ConversationModel from '../models/conversationModel.js'
import MessageModel from '../models/messageModel.js'
import { io, getReceiverSocketId } from '../socket/socket.js'

class MessageController {
  async sendMessage(req, res) {
    try {
      const { message } = req.body
      const receiverId = req.params.id
      const senderId = req.user._id

      let conversation = await ConversationModel.findOne({
        participants: { $all: [senderId, receiverId] }
      })
      if (!conversation) {
        conversation = await ConversationModel.create({
          participants: [senderId, receiverId]
        })
      }

      const newMessage = new MessageModel({
        senderId,
        receiverId,
        message
      })

      if (newMessage) {
        conversation.message.push(newMessage._id)
      }
      // await conversation.save()
      // await newMessage.save()

      await Promise.all([conversation.save(), newMessage.save()])

      const receiverSocketId = getReceiverSocketId(receiverId)
      if (receiverSocketId) {
        // io.to(receiver_id).emit() used to send event to specific client
        io.to(receiverSocketId).emit('newMessage', newMessage)
      }

      return res.status(201).json(newMessage)
    } catch (error) {
      res.status(500).json({ error: 'Interval Server Error Send Message' })
    }
  }
  async getMessage(req, res) {
    try {
      const chatwithIdUser = req.params.id
      const senderId = req.user._id

      const conversation = await ConversationModel.findOne({
        participants: { $all: [chatwithIdUser, senderId] }
      }).populate('message')

      if (!conversation) {
        return res.status(404).json({ error: 'Conversation not found' })
      }

      res.status(200).json(conversation.message) // Sử dụng 200 cho phản hồi thành công
    } catch (error) {
      console.error('Error fetching messages:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

export default new MessageController()
