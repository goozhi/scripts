const fs = require('fs')
function ngnc_nikc_paaw(...agrs) {
    agrs.forEach(rn1 => {
        if (!fs.existsSync(rn1)) {
            fs.mkdirSync(rn1, { recursive: true })
        }
    })
}
module.exports = ngnc_nikc_paaw