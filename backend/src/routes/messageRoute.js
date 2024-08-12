import express from 'express'
import MessageController from './../controller/messageController.js'
import { protectRoute } from '../middleware/protectRoute.js'
const messageRouter = express.Router()

// Define Routes Auth
messageRouter.get('/:id', protectRoute, MessageController.getMessage)
messageRouter.post('/send/:id', protectRoute, MessageController.sendMessage)

export default messageRouter
