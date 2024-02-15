import { userModel } from '../Models/userModels.js'
import path from 'path'
import bcrypt from 'bcrypt'

export const userRegister = async (req, res) => {
  try {
    const image = req.file
    if (!image) {
      return res
        .status(400)
        .json({ success: false, message: 'No image file provided!' })
    }
    const { name, email, password } = req.body
    const existingUser = await userModel.findOne({ email })
    if (existingUser) {
      return res
        .status(409)
        .json({ sucess: false, message: 'Email already in use.' })
    }
    let hashPassword
    if (password) {
      hashPassword = await bcrypt.hash(password, 10)
    }
    const newUser = userModel({
      name,
      email,
      password: hashPassword,
      profileImage: image.path.replace(/\\/g, '/').replace('public/', '')
    })
    const savedUser = await newUser.save()
    res
      .status(201)
      .json({ success: true, message: 'User Created Successfully', savedUser })
  } catch (err) {
    console.log(err.message)
    res.status(404).json({ success: false, message: err.message })
  }
}
