import bcrypt from 'bcryptjs'
import UserModel from '../models/userModel.js'
import { generateTokenAndSetCookie } from '../utils/generateToken.js'

class AuthController {
  async signupUser(req, res) {
    try {
      const { fullName, username, password, confirmPassword, gender } = req.body

      if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Password dont match' })
      }

      const user = await UserModel.findOne({ username })

      if (user) {
        return res.status(400).json({ message: 'User already exists' })
      }

      // HASH PASSWORD
      const salt = await bcrypt.genSalt(10)
      const passwordSalt = await bcrypt.hash(password, salt)

      // Avatar
      const boyProfilePic =
        'https://i.pinimg.com/236x/42/fb/77/42fb77fd2a15a9519723daf82b3a636d.jpg'
      const girlProfilePic =
        'https://eliscenter.edu.vn/wp-content/uploads/2024/09/anh-anime-4yLFpY0.jpg'

      const newUser = new UserModel({
        fullName,
        username,
        password: passwordSalt,
        gender,
        profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
      })

      if (newUser) {
        await generateTokenAndSetCookie(newUser._id, res)
        await newUser.save()

        return res.status(201).json({
          _id: newUser._id,
          fullName: newUser.fullName,
          username: newUser.username,
          profilePic: newUser.profilePic,
          message: 'Created new user successfully!'
        })
      } else {
        res.status(400).json({ message: 'Invalid new user data' })
      }
    } catch (error) {
      console.log('Error while creating new user: ', error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
  async loginUser(req, res) {
    try {
      const { username, password } = req.body
      const user = await UserModel.findOne({ username })
      const passwordHash = await bcrypt.compare(password, user?.password || '')
      if (!user || !passwordHash) {
        return res.status(400).json({ message: 'Invalid username or password' })
      }
      generateTokenAndSetCookie(user._id, res)

      res.json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
        message: 'Logged in successfully!'
      })
    } catch (error) {
      console.log('Error while login account user: ', error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
  async logoutUser(req, res) {
    try {
      res.cookie('jwt', '', { maxAge: 0 })
      res.status(200).json({ message: 'Log out successfully!' })
    } catch (error) {
      console.log('Error while logout user: ', error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}

export default new AuthController()
