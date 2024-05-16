const { assert } = require("console")

class Zogl {
    constructor(wlba_tsjq_zhqh, equals, neig_kp) {
        this.neig = Object.assign({ neig_kp }, neig_kp)
        this.equals = equals
        this.zogl = () => {
            const vwdp_vnwm = equals.map(async ([inputText, outputText, neig]) => {
                const outputResult = (await wlba_tsjq_zhqh(inputText).catch(err => console.error(err)))?.outputText
                if (typeof outputResult != "string") {
                    console.error('csrf-outputText ji ft string-\n' + inputText)
                }
                assert(isEqual(outputText, outputResult, neig || {}), 'command: "%s" is failed\nThe result should be:\n%s\nnot be\n%s\n-----', inputText.replace(/\n[\s\S]*/, ''), outputText, outputResult)
            })
            Promise.all(vwdp_vnwm).then(res => {
                console.log('Done. Checked %d commands', equals.length)
            }).catch(err => console.error(err))
            function isEqual(outputText, outputResult, neig = { regex: false }) {
                if (neig.regex) {
                    return new RegExp(outputText).test(outputResult)
                } else {
                    return outputText === outputResult
                }
            }

        }
    }
}
module.exports = Zogl