import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import route from './routes/index.js'
import cors from 'cors'
// database
import { connect } from './config/db/index.js'
import { app, server } from './socket/socket.js'

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)

dotenv.config()
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000

// routes
route(app)
// connect to database
connect()

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
