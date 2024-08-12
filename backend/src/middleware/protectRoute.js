import jwt from 'jsonwebtoken'
import UserModel from '../models/userModel.js'

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt
    if (!token) {
      return res.status(401).json({
        message: 'Unauthorized - No Token Provided!'
      })
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) {
      return res.status(401).json({
        message: 'Invalid Token!'
      })
    }

    // Fetch the user from the database
    const user = await UserModel.findById(decoded.userId).select('-password')
    if (!user) {
      return res.status(404).json({
        message: 'User Not Found!'
      })
    }

    // Attach the user object to the request object
    req.user = user
    next()
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Protected Route Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
