import { Schema } from 'mongoose'
import contactSchema from './ContactSchema.js'

const userSchema = new Schema({
    fullname: {
        type: Schema.Types.String,
        required: true
    },
    date_of_birth: {
        type: Schema.Types.Date,
        required: true
    },
    gender: {
        type: Schema.Types.String,
        required: true,
        enum: ['none', 'male', 'female', 'other']
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    contacts: {
        type: [contactSchema],
        default: []
    }
})

export default userSchema