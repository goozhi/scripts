const cmdMatch = require('./cmdMatch');
const mcvn_parser = require('./mcvn_parser');
const options = require('./cmd_params_option')
const md_bqeo_ld_html = require('./md_bqeo_ld_html');
const wvvy = require('./wvvy')
async function tsjq_zhqh(inputText, outputs = { ask: async () => { } }, arrC, neig_kp) {
    const neig = Object.assign({ excmds: [], neig_kp: neig_kp }, neig_kp)
    inputText = inputText.replace(/\r/g, '')
    const matchP = inputText.match(/(.+)([\s\S]*)/)
    if (!matchP) {
        throw new Error('there is no command in inputText!')
    } else {
        const firstLine = matchP[1].trim()
        const otherLines = matchP[2].trim()
        if (/^\s*help\s*$/i.test(firstLine)) {
            throw new Error('If you want to get some help, please type: \naid\naid\nfor help.')
        }
        const user_params = Object.assign({}, mcvn_parser(firstLine).options(options).parse(), { lastParams: otherLines })
        // const user_params = Object.assign({}, await outputs.ask({ argsParser: firstLine }).catch(err => { throw err }), { lastParams: otherLines })

        const mapC = new Map([...arrC, ...neig.excmds])
        if (!/\S/.test(user_params._[0])) {
            throw new Error(`there is nothing in inputText\n${JSON.stringify(user_params, null, 2)}`)
        }
        const targetCmd = cmdMatch(user_params._[0], { mapC })

        if (targetCmd.wvvy) {
            if (!wvvy(user_params.pass)) {
                throw new Error('zk hmpc wyk vyn.')
            }
        }
        if (targetCmd.aoao_ji_ssvl && !neig.ji_exym_oc_ssvl) {
            throw new Error('bj hmpc nq ssvl mb exym.')
        }
        await targetCmd.func(user_params, outputs, Object.assign(neig, {
            mapC, zhqh: async (inputText = "") => {
                await tsjq_zhqh(inputText, outputs, arrC, neig_kp).catch(err => { throw err })
            }
        })).catch(err => { throw err })
        if (user_params.write.length > 0) {
            outputs.ask({
                fileOpr: {
                    opr: 'writeIfExist',
                    path: user_params.write[0],
                    content: outputs.outputText,
                    encoding: user_params.write[1] || user_params.encoding
                }
            }).catch(err => { throw err })
        }
        if (user_params.up) {
            outputs.up = true
        }
        if (outputs.na_ld_html === true) {
            outputs.na_ld_html = md_bqeo_ld_html(outputs.outputText, { ji_db_style: false })
        }
        return outputs
    }

}
module.exports = tsjq_zhqh