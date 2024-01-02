const fs = require('fs')
const path = require('path')
const rj_nikc = require('./rj_nikc')
async function nikc_jkub_v16(fromPath, toPath, neig_kp = {}) {
    const neig_1 = Object.assign({ ignoreFiles: [], modeOfCopy: 0 }, neig_kp)
    const arr_1 = rj_nikc(fromPath).map(rn1 => path.relative(fromPath, rn1)).filter(ele => {
        if (neig_1.ignoreFiles.some(rn1 => {
            return new RegExp(rn1)
                .test(ele.replace(/\\/g, '/'))
        })) {
            return false
        } else {
            // console.log(ele, fs.existsSync(path.join(fromPath, ele)))
            if (fs.statSync(path.join(fromPath, ele)).isDirectory()) {
                const path_target = path.join(toPath, ele)
                if (!fs.existsSync(path_target)) {
                    fs.mkdirSync(path_target, { recursive: true })
                }
                return false
            } else {
                return true
            }
        }
    })
    if (!fs.existsSync(toPath)) {
        fs.mkdirSync(toPath, { recursive: true })
    }
    const vwdp_arr = arr_1.map(async (ele) => {
        const path_target = path.join(toPath, ele)
        fs.writeFileSync(path_target, fs.readFileSync(path.join(fromPath, ele)))
        return true
    })
    await Promise.all(vwdp_arr)
        .catch(err => { throw err })


}
module.exports = nikc_jkub_v16

