const JsonUp = require('./JsonUp')
const diwr_tsjq = {
    run: async (user_params, outputs, data, diwr_1) => {
        diwr_1.zjzj_xbrs_zznq(user_params._[2])
        const atvn_yhld = eval(data[user_params._[2]])
        return String(atvn_yhld(user_params.lastParams))
    }
}
const Diwr_json = new JsonUp('atvn-cgnc-mr-zhqh-neig.json', 'neig_atvn_ngnc_mr_zhqh_link.json', {
    diwr_tsjq,
    zjzj_lastParams: zjzj_rj_atvn
})
const atvn_ngnc_mr_zhqhOpr = async (neig_kp) => {
    return await Diwr_json.json_cqpi(neig_kp).catch(err => { throw err })
}
module.exports = atvn_ngnc_mr_zhqhOpr

function zjzj_rj_atvn(rj_atvn) {
    try {
        eval(rj_atvn)
    } catch (err) {
        throw new Error(`csrf-err: atvn pc oxn - ${err}`)
    }

}
