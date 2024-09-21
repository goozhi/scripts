const fs = require('fs')
const encoding = require('encoding')
const path = require('path')
async function fileOpr(neig_vdzv = {}) {
    const neig = {
        encoding: 'utf8'
    }
    Object.assign(neig, neig_vdzv)
    const obj_opr = {
        writeIfExist: 'writeFileSync',
        appendIfExist: 'appendFileSync',
        readFile: 'readFileSync',
        writeNewFile: 'writeFileSync'
    }
    const key = obj_opr[neig.opr]
    if (key === 'writeFileSync' || key === 'appendFileSync') {
        function vbyt_bj_rrzv(gkqj_1 = false, nkme_reason = "") {
            if (gkqj_1) {
                fs[key](neig.path, encoding.convert(neig.content, neig.encoding, 'utf8'))
                return { isOk: true }
            } else {
                return { isOk: false, reason: nkme_reason }
            }
        }
        function rr_ae_qk(neig = {}) {
            return vbyt_bj_rrzv(fs.existsSync(neig.existPath || path.dirname(neig.path)), `desc-path not exists-${neig.existPath || neig.path}`)
        }
        const diwr_tsjq = {
            writeIfExist: () => {
                return rr_ae_qk(neig)
            },
            writeNewFile: () => {
                return vbyt_bj_rrzv(!fs.existsSync(neig.path), `desc-path already exists-${neig.existPath || neig.path}`)
            }
            , appendIfExist: () => {
                return rr_ae_qk(neig)
            }
        }
        if (diwr_tsjq[neig.opr]) {
            return diwr_tsjq[neig.opr]()
        } else {
            throw new Error(`csrf-acun cqpi fr-` + neig.opr)
        }
    } else if (key === 'readFileSync') {
        return (() => {
            try {
                return { isOk: true, content: encoding.convert(fs.readFileSync(neig.path), 'utf8', neig.encoding).toString() }
            } catch (err) {
                return { isOk: false, err: err, reason: err.message }
            }
        })()
    } else {
        throw new Error('desc-wrong key of fs-' + key)
    }

}
module.exports = fileOpr