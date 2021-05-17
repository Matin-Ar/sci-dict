const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const fatoenSchema = new mongoose.Schema({
    fa: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    en: [{
        type: String,
        required: true,
        lowercase: true,
        trim: true
    }]
}, {
    timestamps: true
})

fatoenSchema.plugin(uniqueValidator)

const FaToEn = mongoose.model('FaToEn', fatoenSchema)

module.exports = FaToEn