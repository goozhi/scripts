const cmdMatch = require('./cmdMatch');
const arrC = require('./arrC');
const wvvy = require('./wvvy')
String.prototype.trimLines = function () {
    return this.split(/\n/).map(ele => ele.trim()).join('\n')
}

String.prototype.fmtLines = function (num = 0) {
    return this.split(/\n/).map(ele => ' '.repeat(num) + ele.trim()).join('\n')
}
async function commd(inputText, outputs = { ask: async () => { } }, neig_kp = {}) {
    const neig = Object.assign({ excmds: [] }, neig_kp)
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
        const user_params = Object.assign({}, await outputs.ask({ argsParser: firstLine }).catch(err => { throw err }), { lastParams: otherLines })

        const mapC = new Map([...arrC, ...neig.excmds])
        if (!/\S/.test(user_params._[0])) {
            throw new Error(`there is nothing in inputText\n${JSON.stringify(user_params, null, 2)}`)
        }
        const targetCmd = cmdMatch(user_params._[0], { mapC })

        if (targetCmd.wvvy) {
            if (!wvvy(user_params.pass)) {
                throw new Error('you have no password')
            }
        }
        await targetCmd.func(user_params, outputs, Object.assign(neig, { mapC })).catch(err => { throw err })
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
        return outputs
    }
}
module.exports = commd



