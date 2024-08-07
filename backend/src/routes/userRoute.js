import express from 'express'
import UserController from './../controller/userController.js'
import { protectRoute } from '../middleware/protectRoute.js'

const userRouter = express.Router()

// Define Routes Auth
userRouter.get('/getAll', protectRoute, UserController.getUsersForSideBar)

export default userRouter
