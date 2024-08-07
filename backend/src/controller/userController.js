import bcrypt from 'bcryptjs'
import UserModel from '../models/userModel.js'
import { generateTokenAndSetCookie } from '../utils/generateToken.js'

class UserController {
  async getUsersForSideBar(req, res) {
    try {
      const loggedInUserId = req.user._id
      const filterUserSideBar = await UserModel.find({
        _id: { $ne: loggedInUserId }
      })

      res.status(200).json(filterUserSideBar)
    } catch (error) {
      console.log('Error while getting users for side bar: ', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

export default new UserController()
