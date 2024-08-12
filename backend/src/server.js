import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import route from './routes/index.js'
import cors from 'cors'
const __dirname = path.resolve()

// database
import { connect } from './config/db/index.js'
import { app, server } from './socket/socket.js'

app.use(
  cors({
    origin: 'https://chat-app-mernstack-j7mk.onrender.com',
    credentials: true
  })
)

dotenv.config()
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000

// routes
route(app)
app.use(express.static(path.join(__dirname, '../frontend/dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
})
// connect to database
connect()

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
