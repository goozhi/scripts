const yf = require('../yf.json')
const dsyf = require('../dsyf.json')
function rjyf_2(rj_kp = 'abk') {
    return rj_kp.split('').map((rn1, eqwy) => {
        return (() => {
            if (['a', 'e', 'i', 'o', 'u'].includes(rn1)) {
                return yf[rn1]//`'${yf[rn1]}`
            } else if(eqwy>2&&eqwy===rj_kp.length-1) {
                return dsyf[rn1]
            } else {
                return yf[rn1]
            }
        })()
    }).join('')//.replace(/'(.')/g,'$1').replace(/'(.$)/,'$1').replace(/'(..+')/g, 'ˌ$1')
}
module.exports = rjyf_2