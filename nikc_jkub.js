const fs = require('fs')
const path = require('path')
async function nikc_jkub(fromPath, toPath, neig_kp = {}) {
    const neig_1 = Object.assign({ ignoreFiles: [], modeOfCopy: 0 }, neig_kp)
    const arr_1 = fs.readdirSync(fromPath, { recursive: true }).filter(ele => {
        if (neig_1.ignoreFiles.some(rn1 => {
            return new RegExp(rn1)
                .test(ele.replace(/\\/g, '/'))
        })) {
            return false
        } else {
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
        fs.copyFileSync(path.join(fromPath, ele), path_target, neig_1.modeOfCopy)
        return true
    })
    await Promise.all(vwdp_arr)
        .catch(err => { throw err })


}
module.exports = nikc_jkub

