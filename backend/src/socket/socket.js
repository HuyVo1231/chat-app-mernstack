import http from 'http'
import { Server } from 'socket.io'
import express from 'express'

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId]
}

const userSocketMap = {} // {userId: socketId}

io.on('connection', (socket) => {
  console.log('a user connected', socket.id)

  const userId = socket.handshake.query.userId
  if (userId != 'undefined') {
    userSocketMap[userId] = socket.id
  }

  // socket.on() is used to listen to the events, can be used both client and server side
  io.emit('getOnlineUsers', Object.keys(userSocketMap))

  socket.on('disconnect', () => {
    console.log('a user disconnected', socket.id)
    delete userSocketMap[userId]
  })
})

export { app, io, server, getReceiverSocketId }
