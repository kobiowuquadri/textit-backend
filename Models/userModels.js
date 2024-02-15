import mongoose from 'mongoose';
import validator from 'validator';

const { isEmail } = validator;

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter a name"]
    },
    email : {
        type: String,
        required: [true, "Please enter an email"], 
        unique: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, "Please enter a password"]
    },
    profileImage: {
        type: String,
        required: [true, "Please enter a profile image"]
    }
}, {timestamps: true})

export const userModel = mongoose.model("usermodels", userSchema)
