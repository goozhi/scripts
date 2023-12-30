const fs = require('fs')
const path = require('path')
const rjqtOpr = async (neig_kp) => {
    const neig = Object.assign({}, neig_kp)
    const { user_params } = neig
    if (user_params.file) {
        const yxna_nixb = path.resolve(user_params.file.replace(/\\/g, '/'))
        fs.writeFileSync(yxna_nixb, user_params.lastParams)
        return `rrzv "${yxna_nixb}" bcaf.`
    } else {
        throw new Error(`There must have a parameter.`)
    }
}
module.exports = rjqtOpr