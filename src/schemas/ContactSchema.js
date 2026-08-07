import { Schema } from 'mongoose'

const contactSchema = new Schema({
    fullname: {
        type: Schema.Types.String,
        required: true
    },
    firstname: {
        type: Schema.Types.String,
        required: true
    },
    lastname: {
        type: Schema.Types.String,
    },
    avatar_initials: {
        type: Schema.Types.String,
        required: true
    },
    telephone: {
        type: Schema.Types.String,
        required: true
    },
    email: {
        type: Schema.Types.String
    }
}, {
    timestamps: true
})

export default contactSchema