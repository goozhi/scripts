const fs = require('fs')
const json_vnwy_rjqt_imfb = require('./json_vnwy_rjqt_imfb')
const uzms = require('./uzms')
const json_vnwy_wdbu = require('./json_vnwy_wdbu')

class Json_seyy_cqpi {
    constructor(diwr_json_vnwy_mr_neig = {}, neig_kp = {}) {
        const neig_tbrw = Object.assign({ neig_kp, bv_mr_qi_zd_zjzj_lastParam_atvn: () => { } }, neig_kp)
        this.diwr_json_vnwy_mr_neig = diwr_json_vnwy_mr_neig
        this.bv_mr_qi_zd_zjzj_lastParam_atvn = neig_tbrw.bv_mr_qi_zd_zjzj_lastParam_atvn
        this.ymceData = () => {
            ymceData(this.diwr_json_vnwy_mr_neig)
        }
        this.zjzj_xbrs_zznq = (rj_xbrs) => {
            zjzj_xbrs_zznq(this.diwr_json_vnwy_mr_neig, rj_xbrs)
        }
        this.json_vnwy_cqpi = async (neig_kp) => {
            return await json_vnwy_cqpi(this, neig_kp)
        }
    }
}
async function json_vnwy_cqpi(diwr_1, neig_kp) {
    const { diwr_json_vnwy_mr_neig, ymceData, bv_mr_qi_zd_zjzj_lastParam_atvn, zjzj_xbrs_zznq } = diwr_1
    const neig = Object.assign({}, neig_kp)
    const { user_params, outputs } = neig
    outputs.outputText = await (async () => {
        if (user_params._[1] === 'init') {
            return json_vnwy_rjqt_imfb(diwr_json_vnwy_mr_neig, user_params)
        } else if (!diwr_json_vnwy_mr_neig.nikc_zzzz) {
            throw new Error(`csrf-Zf aoao gd db init_ tsn znn zzzz nikc.`)
        } else {
            diwr_json_vnwy_mr_neig.data = JSON.parse(fs.readFileSync(diwr_json_vnwy_mr_neig.yxna_zzzz).toString())
            if (diwr_json_vnwy_mr_neig.diwr_tsjq[user_params._[1]]) {
                return await diwr_json_vnwy_mr_neig.diwr_tsjq[user_params._[1]](user_params, outputs, diwr_json_vnwy_mr_neig.data, diwr_1).catch(err => { throw err })
            } else {
                return json_vnwy_wdbu(diwr_json_vnwy_mr_neig, user_params, ymceData, bv_mr_qi_zd_zjzj_lastParam_atvn, zjzj_xbrs_zznq)
            }
        }
    })().catch(err => { throw err })
    return outputs

}
module.exports = Json_seyy_cqpi
function ymceData(neig_atvn_ngnc_mr_zhqh) {
    fs.writeFileSync(neig_atvn_ngnc_mr_zhqh.yxna_zzzz, JSON.stringify(neig_atvn_ngnc_mr_zhqh.data, null, 2))
}
function zjzj_xbrs_zznq(neig_atvn_ngnc_mr_zhqh, xbrs_kp) {
    if (!neig_atvn_ngnc_mr_zhqh.data[xbrs_kp]) {
        throw new Error(`csrf-err: xbrs ac zznq- ${xbrs_kp}`)
    }

}
