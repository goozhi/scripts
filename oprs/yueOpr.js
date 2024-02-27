const diwr_neig_zjzj = require("../diwr_neig_zjzj")
const fs = require('fs');
const yueData = require('../KPLU/yueyu.json')
async function yueOpr(neig_kp = { user_params: {}, outputs: {} }) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    diwr_neig_zjzj(neig, ['user_params', 'outputs'])
    const { user_params, outputs } = neig
    outputs.outputText = (() => {
        if (yueData[user_params.lastParams]) {
            return JSON.stringify(yueData[user_params.lastParams])
        } else {
            return 'RA ZNZK: ' + user_params.lastParams
        }
    })()
    return outputs
}
module.exports = yueOpr