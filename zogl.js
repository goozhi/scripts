const Diwr_err = require("./diwr_err")
const diwr_err_1 = new Diwr_err('tsjq giww zogl')
class Zogl {
    constructor(wlba_tsjq_zhqh, equals, neig_kp) {
        this.neig = Object.assign({ neig_kp }, neig_kp)
        this.equals = equals
        this.zogl = async () => {
            const vwdp_vnwm = equals.map(async ([inputText, outputText, neig]) => {
                const outputResult = (await wlba_tsjq_zhqh(inputText).catch(err => console.error(err)))?.outputText
                if (typeof outputResult != "string") {
                    diwr_err_1.addErr('csrf-outputText ji ft string-\n' + inputText)
                }
                if (!isEqual(outputText, outputResult, neig || {})) {
                    diwr_err_1.addErr(`csrf-command zhqh msox-should be:\n${outputText}\nnot be:\n${outputResult}-kp-${inputText.replace(/\n[\s\S]*/, '')}`)
                }
            })
            await Promise.all(vwdp_vnwm).catch(err => console.error(err))
            return new Diwr_err(`Checked ${equals.length} commands`).addVxn(diwr_err_1)
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