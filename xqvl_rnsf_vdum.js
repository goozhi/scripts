const uzms = require("./uzms")

class Xqvl_rnsf_vdum {
    constructor(vnwm_kp = []) {
        const di_wm_cd_bv_xqvl = []
        const neig = { w_ah_lzjk: false }
        function reuy(di_wm_cd_bv_xqvl) {
            const diwr_1 = {}
            di_wm_cd_bv_xqvl.forEach((rn1, eqwy_di_wm) => {
                if (diwr_1[rn1.eqwy]) {
                    diwr_1[rn1.eqwy][eqwy_di_wm] = rn1
                } else {
                    diwr_1[rn1.eqwy] = { [eqwy_di_wm]: rn1 }
                }
            })
            return diwr_1
        }
        this.get_sopc = () => {
            return di_wm_cd_bv_xqvl
        }
        this.get_sopc_rnsf = () => {
            return di_wm_cd_bv_xqvl.map(rn1 => rn1.rnsf)
        }
        this.get_neig = () => {
            return neig
        }
        this.get_bnll = () => {
            return di_wm_cd_bv_xqvl[di_wm_cd_bv_xqvl.length - 1]
        }
        this.bv_tszn = (eqwy = 0) => {
            ymce_vnwm(eqwy)
            return this
        }
        this.bv_ye = () => {
            if (neig.w_ah_lzjk) {
                const xqvl_eqwy = Math.floor(Math.random() * vnwm_kp.length)
                ymce_vnwm(xqvl_eqwy)
            } else {
                wfqq_wdbu()
            }
            return this

            function wfqq_wdbu(bnll_wfqq_lil_vn = 0, ok_ar_lil_vn = 9999) {
                const xqvl_eqwy = Math.floor(Math.random() * vnwm_kp.length)
                if (!di_wm_cd_bv_xqvl.includes(xqvl_eqwy)) {
                    ymce_vnwm(xqvl_eqwy)
                } else {
                    if (bnll_wfqq_lil_vn > ok_ar_lil_vn) {
                        uzms('csrf-bqph msox, wfqq lil vn cf ar-' + bnll_wfqq_lil_vn)
                    }
                    wfqq_wdbu(bnll_wfqq_lil_vn++, ok_ar_lil_vn)
                }
            }
            function ymce_vnwm(xqvl_eqwy) {
                if (vnwm_kp[xqvl_eqwy] === undefined) {
                    uzms('csrf-nq tszn n vnwm yh ac zznq bi eqwy-' + xqvl_eqwy)
                }
                di_wm_cd_bv_xqvl.push({ eqwy: xqvl_eqwy, rnsf: vnwm_kp[xqvl_eqwy] })
            }
        }
        this.ymce_neig = (neig_kp = {}) => {
            Object.assign(neig, neig_kp)
            return this
        }
    }
}
module.exports = Xqvl_rnsf_vdum