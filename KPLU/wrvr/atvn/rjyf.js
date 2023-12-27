const yf = require('../yf.json')
function rjyf(rj_kp = 'abk') {

    return rj_kp.split('').map((rn1, eqwy) => {
        return (() => {
            if (['a', 'e', 'i', 'o', 'u'].includes(rn1)) {
                return `'${yf[rn1]}`
            } else {
                return yf[rn1]
            }
        })()
    }).join('').replace(/'(.')/g,'$1').replace(/'(.$)/,'$1').replace(/'(..+')/g, 'ˌ$1')
}
module.exports = rjyf