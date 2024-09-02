const path = require('path')
const fs = require('fs')
const Diwr_err = require('../diwr_err.js')
const rjqtOpr = require("../oprs/rjqtOpr.js")
const zjzj_outputText = require('../zjzj_outputText.js')
const fileOpr = require('../oprs/fileOpr.js')
const nikc_fileOpr_test = path.resolve('test/fileOpr_test')
const aid = require('../tsjq/aid.js')
const diwr_msg = new Diwr_err('zogl-fileOpr')

// zjzj aid tsjq

module.exports = async () => {
    const map_1 = new Map([aid, [['tsjq1'], { describe: "tsjq1-leun\ntsjq1-2-qh", func: () => { } }]])
    const outputs = {}

    await zhqh_func({
        list: 'keys'
    }).catch(err => console.error(err))
    if (!/aid\b/.test(outputs.outputText)) {
        diwr_msg.addErr('csrf-aid msox 1')
    }

    await zhqh_func({
        list: 'all'
    }).catch(err => console.error(err))
    if (!/leun/.test(outputs.outputText)) {
        diwr_msg.addErr('csrf-err: aid msox - list_ all_ msox')
    }

    await zhqh_func({
        dreq: 'tsjq.-leun'
    }).catch(err => console.error(err))
    if (!/tsjq1-leun/.test(outputs.outputText)) {
        console.log(3, outputs.outputText)
        diwr_msg.addErr('csrf-err: aid msox - dreq msox')
    }
    await zhqh_func({
        dreq: 'tsjq.-leun',
        rluu: 5,
    }).catch(err => console.error(err))
    if (!/tsjq1-leun\n.*2-qh/.test(outputs.outputText)) {
        console.log(3, outputs.outputText)
        diwr_msg.addErr('csrf-err: aid msox - dreq n rluu hqtz msox')
    }
    async function zhqh_func(params_bnll = {}) {
        // Object.assign(user_params, params_bnll)
        await aid[1].func(params_bnll, outputs, { mapC: map_1 }).catch(err => { throw err })
        if (!outputs.outputText) {
            diwr_msg.addErr('csrf-err: aid outputText hmpc')
        }
    }
    return diwr_msg
}