const { connect, disconnect ,Investment} = require("../models")
const { OK } = require('../services/responses')

async function get (event){
    await connect()

    const investments = await Investment.find()

    await disconnect()
    return OK(investments)

}

async function create(event){
    await connect()
    const bodyParams = JSON.parse(JSON.stringify(event.body))
    
    const { opcao, valor, data } = bodyParams

    const investment = await Investment.create({ opcao, valor, data })

    await disconnect()
    return OK(investment)
}


async function remove(event) {
    await connect()

    const _id = event.path._id

    await Investment.deleteOne({ _id })
    
    await disconnect()

    return OK(_id)

}

module.exports = {
    get,
    create,
    remove
}
