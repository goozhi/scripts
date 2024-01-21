const fs = require('fs')
const path = require('path')
const nikc_jkub_v16 = require('./nikc_jkub_v16')
const hd_rjqt_tum = require('./hd_rjqt_tum')
async function nikc_kzbz_v16(fromPath, toPath, neig_kp = {}) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    await nikc_jkub_v16(fromPath, toPath, neig).catch(err => { throw err })
    hd_rjqt_tum(fromPath)
}
module.exports = nikc_kzbz_v16

