const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const entofaSchema = new mongoose.Schema({
    en: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    fa: [{
        type: String,
        required: true,
        trim: true
    }]
}, {
    timestamps: true
})

entofaSchema.plugin(uniqueValidator)

const EnToFa = mongoose.model('EnToFa', entofaSchema)

module.exports = EnToFa