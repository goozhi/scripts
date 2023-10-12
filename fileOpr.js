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
        readFile: 'readFileSync'
    }
    const key = obj_opr[neig.opr]
    if (key === 'writeFileSync' || key === 'appendFileSync') {
        if (fs.existsSync(neig.existPath || path.dirname(neig.path))) {
            fs[key](neig.path, encoding.convert(neig.content, neig.encoding, 'utf8'))
            return { [neig.opr + 'IsOk']: true }
        } else {
            // throw new Error(`desc-path not exists-${neig.existPath || neig.path}`)
        }
    } else if (key === 'readFileSync') {
        return { [neig.opr + 'IsOk']: true, content: encoding.convert(fs.readFileSync(neig.path), 'utf8', neig.encoding).toString() }
    } else {
        throw new Error('desc-wrong key of fs-' + key)
    }

}
module.exports = fileOpr