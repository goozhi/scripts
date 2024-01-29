const fs = require('fs')
const path = require('path')
const axios = require('axios')
const getHtmlOpr = async (neig_kp) => {
    const neig = Object.assign({}, neig_kp)
    const { user_params, outputs } = neig
    outputs.outputText = await (async () => {
        if (!user_params.lastParams) {
            throw new Error(`must have last params.`)
        }
        return await axios(user_params.lastParams)
            .then(res => res.data)
            .catch(err => { throw err })

    })().catch(err => {
        throw err
    })
    return outputs
}
module.exports = getHtmlOpr