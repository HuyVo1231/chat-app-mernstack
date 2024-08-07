import express from 'express'
import AuthController from './../controller/authController.js'

const authRouter = express.Router()

// Define Routes Auth
authRouter.post('/login', AuthController.loginUser)
authRouter.post('/signup', AuthController.signupUser)
authRouter.post('/logout', AuthController.logoutUser)

export default authRouter
