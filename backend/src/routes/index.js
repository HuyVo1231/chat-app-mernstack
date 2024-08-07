import authRouter from './authRoute.js'
import messageRouter from './messageRoute.js'
import userRouter from './userRoute.js'

function route(app) {
  app.use('/api/auth', authRouter)
  app.use('/api/messages', messageRouter)
  app.use('/api/user', userRouter)
}

export default route
