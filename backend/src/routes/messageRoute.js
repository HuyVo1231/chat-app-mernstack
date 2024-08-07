import express from 'express'
import MessageController from './../controller/messageController.js'
import { protectRoute } from '../middleware/protectRoute.js'
const authRouter = express.Router()

// Define Routes Auth
authRouter.get('/:id', protectRoute, MessageController.getMessage)
authRouter.post('/send/:id', protectRoute, MessageController.sendMessage)

export default authRouter
