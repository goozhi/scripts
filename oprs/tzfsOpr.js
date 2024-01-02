const diwr_neig_zjzj = require("../diwr_neig_zjzj")
const { marked } = require("marked");
const fs = require('fs');
const buildHtml = require("../buildHtml");
async function tzfsOpr(neig_kp = { user_params: {}, outputs: {} }) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    diwr_neig_zjzj(neig, ['user_params', 'outputs'])
    const { user_params, outputs } = neig
    return await (async () => {
        if (user_params.file) {
            if (fs.existsSync(user_params.file)) {
                const stat_1 = fs.statSync(user_params.file)
                if (stat_1.isDirectory()) {
                    const outputDir = user_params.file.replace(/(?:\\|\/|)\s*$/, '-out')
                    await buildHtml({ inputDir: user_params.file, outputDir }).catch(err => { throw err })
                    outputs.outputText = `Done. See outputDir: ${outputDir}`
                    return outputs
                } else {
                    Object.assign(outputs, {
                        ji_ye_hym_html: true,
                        outputText: marked(fs.readFileSync(user_params.file).toString())
                    })
                    return outputs
                }
            } else {
                throw new Error('csrf-err: yxna ac nqzz-' + user_params.file)
            }
        } else if (user_params.lastParams) {
            Object.assign(outputs, {
                ji_ye_hym_html: true,
                outputText: marked(user_params.lastParams)
            })
            return outputs
        } else {
            throw new Error('csrf-err:nrap mcvn-')
        }
    })().catch(err => { throw err })
}
module.exports = tzfsOpr