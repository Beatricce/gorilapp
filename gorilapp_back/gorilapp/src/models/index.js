const mongoose = require('mongoose')

const config = require('../config')

const Investment = require('./Investment')

async function connect(){
    if(mongoose.connect.readyState !== 1 /*connected*/){
        await mongoose.connect(config.mongodb.connectionString, {useNewUrlParser: true})
        console.log("conectado ...")
    }
}

async function disconnect(){
    if(mongoose.connection.readyState == 1){
        await mongoose.connection.close()
    }
}

module.exports = {
    connect, 
    disconnect,
    Investment
}