const commd = require('../commd')
const uzms = require('../uzms')
const JsonUp = require('./JsonUp')
const diwr_tsjq = {
    run: async (user_params, outputs, data, diwr_1) => {
        diwr_1.zjzj_xbrs_zznq(user_params._[2])
        const rj_tsjq_non = data[user_params._[2]]
            .replace(/(?=\n|$)/, (user_params.p ? " -p " + user_params.p : ""))
            + ("\n" + user_params.lastParams)
        const rj_tsjq_wu = rj_tsjq_non.match(/\S+/)?.[0]
        if (!rj_tsjq_wu) {
            uzms('csrf-tsjq wu sopj cgne-' + rj_tsjq_non)
        }
        Object.assign(outputs, await commd(rj_tsjq_non, outputs).catch(err => { throw err }))
        return outputs.outputText
    }
}
const diwr_hot = new JsonUp('hot-neig.json', 'neig_hot_link.json', { diwr_tsjq, zjzj_lastParams })
const atvn_ngnc_mr_zhqhOpr = async (neig_kp) => {
    return await diwr_hot.json_cqpi(neig_kp).catch(err => { throw err })
}
module.exports = atvn_ngnc_mr_zhqhOpr

function zjzj_lastParams(rj_kp) {
    const fl1 = rj_kp.match(/.*/)
    if (/^.* -p /.test(fl1)) {
        uzms('csrf-zf acoa ilzz wvvy-' + String(fl1).match(/-p +\w+/))
    }
}
