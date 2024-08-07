import jwt, { decode } from 'jsonwebtoken'
import UserModel from '../models/userModel.js'

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt
    if (!token) {
      return res.status(401).json({
        message: 'You dont have Token - Unauthorizd - No Token Provided!'
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SERECT)
    if (!decoded) {
      return res.status(401).json({
        message: 'Your token is not correct!'
      })
    }

    const user = await UserModel.findById(decoded.userId).select('-password')

    if (!user) {
      return res.status(404).json({
        message: 'User not found!'
      })
    }

    req.user = user
    next()
  } catch (error) {
    res.status(500).json({ error: ' Protected Route Error' })
  }
}