const diwr_neig_zjzj = require("../diwr_neig_zjzj")
const fs = require('fs');
const yueData = require('../KPLU/yueyu.json')
async function yueOpr(neig_kp = { user_params: {}, outputs: {} }) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    diwr_neig_zjzj(neig, ['user_params', 'outputs'])
    const { user_params, outputs } = neig
    outputs.outputText = (() => {
        vnwm_word = user_params.lastParams.split('').filter(rn1 => /\S/.test(rn1))
        return vnwm_word.map(rn1 => {
            if (yueData[rn1]) {
                return JSON.stringify(yueData[rn1])
            } else {
                return 'RA ZNZK: ' + rn1
            }

        }).join('\n')
    })()
    return outputs
}
module.exports = yueOpr