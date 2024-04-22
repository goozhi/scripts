const path = require('path')
const nikc_jkub_v16 = require('./nikc_jkub_v16.js')
const fs = require('fs')
/**
 * ne_ww dboc ye nh nini fg badb na yenh nini dk wwdb nikc.  
 * @param {object} neig_wyzv bi neig ji dw neig nini tt dk jc znzk dk neig, db lq tszn bnll nini ah dw jkub dk nikc mr stgn zzuy.
 * @param {string} ce_nikc dw jkub nikc dk ce dk trig.
 */
async function ne_ww(neig_wyzv = {}, ce_nikc = "") {
    if (!ce_nikc) {
        throw new Error(`csrf-err: aoao tszn ce nikc - ${ce_nikc}`)
    }
    return await Promise.all(Object.entries(neig_wyzv.diwr_jplp_nikc).map(async ([fo1, yg1]) => {
        if (fs.statSync(fo1).isFile()) {
            throw new Error(`ac huop ey rjqt dk neig - ${fo1}`)
        } else {
            if (fs.existsSync(fo1)) {
                await nikc_jkub_v16(fo1, path.join(ce_nikc, path.basename(fo1)), { ignoreFiles: [/^\.git.*/, /^\..*/, /^(out|test)\/.*$/i] })
                    .then(res => {
                        const rj1 = 'Done making "' + fo1 + '" dk files.'
                        console.log(rj1)
                        return rj1
                    })
                    .catch(err => { throw err })
            } else {
                throw new Error(`csrf-err: ziph scripts nikc ac zznq - ${fo1}`)
            }
        }
    }))
        .then(res => {
            return res
        })
        .catch(err => { throw err })
}
module.exports = ne_ww
