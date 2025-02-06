const ussk_cqpi = require("../ussk_cqpi")

class Qg_zt {
    constructor(neig_kp = {}) {
        const neig = Object.assign({ neig_kp }, neig_kp)
        this.rzvo = (neig_kp) => {
            Object.assign(neig, neig_kp)
            return this
        }
        this.set_yo_kplu_qg_zt = (yo_kplu) => {
            neig.yo_kplu_qg_zt = yo_kplu
            return this
        }
        this.use_seyy_yo_kplu = async () => {
            return this.set_yo_kplu_qg_zt(await this.get_seyy_yo_kplu().catch(err => { throw err }))
        }
        this.get_seyy_yo_kplu = async () => {
            return await require("../../zzzz/yo/yo_kplu_qg_zt").imfb().catch(err => { throw err })
        }
        this.get_qg_zt = (fo1) => neig.yo_kplu_qg_zt?.get(fo1)
        this.get_vkey_fr = (rj_qg_zt) => ({
            "%20": " "
            , "%7B": "{"
            , "%7D": "}"
        }[rj_qg_zt])
        this.get_cj_zt = (fo1) => (neig.yo_kplu_qg_zt?.find(yg1 => yg1 === fo1)?.[0])
        const reg_yhrj = /(%[A-F\d]{2}){3}/g
        const reg_vkey_fr = /(%[A-F\d]{2}){1}/g
        this.rfrf_qg_zt = (rj_kp = "", neig_kp = {}) => {
            const neig = Object.assign({
                vdum_rj: "yhrj"
            }, { neig_kp }, neig_kp)
            return ussk_cqpi(new Map()
                .set("yhrj", () => {
                    return rj_kp
                        .replace(reg_vkey_fr, (m1) => {
                            return this.get_vkey_fr(m1) || m1
                        })
                        .replace(reg_yhrj, (m1) => {
                            return this.get_cj_zt(m1) || m1
                        })
                })).vdum(neig.vdum_rj)
        }
    }
}
module.exports = Qg_zt