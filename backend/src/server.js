import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import route from './routes/index.js'
// database
import { connect } from './config/db/index.js'
const app = express()

dotenv.config()
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000

// routes
route(app)
// connect to database
connect()

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
