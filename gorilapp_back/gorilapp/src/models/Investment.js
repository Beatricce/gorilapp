const mongoose = require('mongoose')

const {Schema} = mongoose

const schema = new Schema({
    opcao: {
        type: String,
        required: false
    },
    valor: {
        type: Number,
        required: false
    },
    data: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('investment', schema)