import mongoose from 'mongoose'
import { isEmail } from 'validator'

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter a name"]
    },
    email : {
        type: String,
        required: [isEmail, "Please enter a email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"]
    },
    profileImage: {
        type: String,
        required: [true, "Please enter a profile image"]
    }
})

export const userModel = mongoose.model("usermodels", userSchema)

