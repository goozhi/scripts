const nvms = require('./nvms')
if (typeof nvms !== 'function') {
    console.error('csrf-nvms ac lh function ja umdy nvms is_ not a_ functions_ n zbhm, bi msox ahoa w wrvr badb lw uzms atvn ae nvms atvn-' + (typeof nvms))
}
function uzms(rj_kp) {
    throw nvms(rj_kp)
}
module.exports = uzms

