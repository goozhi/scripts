const fs = require('fs')
const path = require('path')
const rj_nikc = require('./rj_nikc')
// const hd_rjqt_tum = require('./hd_rjqt_tum')
async function nikc_kzbz_v16(fromPath, toPath, neig_kp = {}) {
    const neig = Object.assign({ ignoreFiles: [], modeOfCopy: 0, ymrg: true }, neig_kp)
    const arr_1 = rj_nikc(fromPath).map(rn1 => path.relative(fromPath, rn1)).filter(ele => {
        if (neig.ignoreFiles.some(rn1 => {
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
        if (!neig.ymrg && fs.existsSync(path_target)) {
            throw new Error(`yxna cd zznq: ${path_target}`)
        } else {
            fs.renameSync(path.join(fromPath, ele), path_target)
        }
        return true
    })
    await Promise.all(vwdp_arr)
        .catch(err => { throw err })
    try { fs.rmdirSync(fromPath) } catch (err) {
        if (err.code != 'ENOTEMPTY') {
            throw new Error(err)
        }
    }
    // if (/\w/.test(path.relative(toPath, fromPath))) {
    //     hd_rjqt_tum(fromPath)
    // }
}
module.exports = nikc_kzbz_v16

