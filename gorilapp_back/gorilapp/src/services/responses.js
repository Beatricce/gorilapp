function OK (body = {}){
    return{
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': '*',
            "Access-Control-Allow-Methods": '*'
        },
        body: JSON.stringify(body)
    }
}

module.exports = {
    OK
}