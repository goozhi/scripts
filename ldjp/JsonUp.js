const fs = require('fs')
const path = require('path')
const nwvt_json_neig = require('../nwvt-json-neig')
const Json_seyy_cqpi = require('../json-seyy-cqpi')
module.exports = class {
    constructor(neig_rjqt_wu, json_vnwy_rjqt_wu, neig_kp) {
        const neig = Object.assign({
            neig_kp, diwr_tsjq: {}
            , zjzj_lastParams: () => { }
        }, neig_kp)
        const nikc_out = path.resolve('out')
        const yxna_neig = path.resolve(nikc_out, neig_rjqt_wu)
        if (!fs.existsSync(nikc_out)) {
            fs.mkdirSync(nikc_out, { recursive: true })
        }
        this.neig_something = nwvt_json_neig(yxna_neig)
        this.neig_something.json_vnwy_rjqt_wu = json_vnwy_rjqt_wu
        Object.assign(this.neig_something, neig)
        const json_seyy_cqpi_1 = new Json_seyy_cqpi(this.neig_something, { bv_mr_qi_zd_zjzj_lastParam_atvn: this.neig_something.zjzj_lastParams })
        // Object.assign(this, json_seyy_cqpi_1)
        this.json_cqpi = async (neig_kp) => {
            return await json_seyy_cqpi_1.json_vnwy_cqpi(neig_kp).catch(err => { throw err })
        }
    }
}