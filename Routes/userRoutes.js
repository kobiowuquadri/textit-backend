import express from "express"
import { userRegister } from "../Controllers/userControllers.js"
import { upload } from "../Middlewares/uploadImage.js"

export const userRouters = express.Router()


userRouters.post('/user-register', upload.single("profileImage"), userRegister)
