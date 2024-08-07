import ConversationModel from '../models/conversationModel.js'
import MessageModel from '../models/messageModel.js'

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
      await conversation.save()
      await newMessage.save()

      return res.status(201).json(newMessage)
    } catch (error) {
      res.status(500).json({ error: 'Interval Server Error Send Message' })
    }
  }
  async getMessage(req, res) {
    try {
      const { message } = req.body
      const chatwithIdUser = req.params.id
      const senderId = req.user._id

      const conversation = await ConversationModel.findOne({
        participants: { $all: [senderId, senderId] }
      }).populate('message')

      res.status(201).json(conversation.message)
    } catch (error) {}
  }
}

export default new MessageController()
