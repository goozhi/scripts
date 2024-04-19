const fdmj_wdbu = require("./fdmj_wdbu")

/**
 * 
 * @param {object} user_params
 * @returns {string} 
 */
function rj_wdbu(user_params) {
    if (user_params.lastParams) {
        const diwr_1 = fdmj_wdbu(user_params)
        return eval(`(${diwr_1[1]})`)(diwr_1[2])
    } else {
        throw new Error(`csrf-err: last mcvn hmpc.-`)
    }
}
module.exports = rj_wdbu