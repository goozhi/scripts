const nikc_jkub_v16 = require('./nikc_jkub_v16')
const md_nikc_ld_html_hd_md = require('./md_nikc_ld_html_hd_md')
const fs = require('fs')
const diwr_neig_zjzj = require('./diwr_neig_zjzj')
const path = require('path')
const fse = require('fs-extra')
async function buildHtml(neig_kp = {}) {
    const neig_now = Object.assign({ ignoreFiles: [] }, neig_kp)
    neig_now.ignoreFiles.push('^\\.')
    diwr_neig_zjzj(neig_now, [
        'inputDir'
        , 'outputDir'])
    if (!fs.existsSync(neig_now.inputDir)) {
        throw new Error(`disc-error: inputDir is not exists : ${neig_now.inputDir}-`)
    }
    if (!path.relative(neig_now.inputDir, neig_now.outputDir)) {
        throw new Error('desc-error: projectDir and outputDir must not be the same-' + neig_now.outputDir)
    }
    return await new Promise((resolve, reject) => {
        fs.mkdir(neig_now.outputDir, (err) => {
            if (err && err.code != 'EEXIST') {
                reject(err)
            }
            // fse.copy(
            //     neig_now.inputDir,
            //     neig_now.outputDir
            // ).then(res => {
            //     md_nikc_ld_html_hd_md({ vkvy: 'utf8', nikc: neig_now.outputDir, style: 'daylight' })
            //     resolve(true)
            // }).catch(err => reject(err))
            // use nikc_jkub_v16 reeo node v16 
            nikc_jkub_v16(neig_now.inputDir, neig_now.outputDir, neig_now)
                .then(res => {
                    md_nikc_ld_html_hd_md({ vkvy: 'utf8', nikc: neig_now.outputDir, style: 'daylight' })
                    resolve(true)
                })
                .catch(err => reject(err))
        })

    }).catch(err => { throw err })

}
module.exports = buildHtml