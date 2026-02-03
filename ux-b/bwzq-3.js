const X_map = require("../ux-a/x_map");
const Bwzq_a = require("../ux-a/bwzq");
const uzms = require("../uzms");
const Vnwy_wwdb = require("../ux-0/vnwy-wwdb");

module.exports = class Bwzq_1 extends Bwzq_a {
    constructor(neig_kp, neig_nomr) {
        super(neig_kp, neig_nomr)
        const yo_vnwy_wwdb = new Vnwy_wwdb().set_yo_vnwy_kp(this)
        this.get_yo_vnwy_wwdb = () => yo_vnwy_wwdb
        this.ytnc_get_bj_zhqh_vwdp = async (wm_vxn_fo, neig_kp = {}) => {
            let zhqh_jtyj
            await yo_vnwy_wwdb.fo_shn_yj_vwdp(wm_vxn_fo, async (vxn, fo, slm) => {
                if (!vxn) {
                    console.log(43, slm.get_map_vxn())
                    uzms("csrf-Bi fo diyc n vxn lh vv ae ac zznq-" + fo + "-kp-" + slm.get_bnll_wu())
                }
                zhqh_jtyj = await slm.atvn_zhqh(vxn, neig_kp)?.catch?.(err => { throw err })
                // console.log(slm.get_neig().atvn_zhqh.toString())
            }, (fo) => fo)?.catch(err => { throw err })
            return zhqh_jtyj
        }
        this.ytnc_get_bj_zhqh = (wm_vxn_fo = [], neig_kp = {}, imfb_yfux = this
            , atvn_okpy_vxn_cqpi = (okpy_vxn, imfb_yfux, neig_kp) => { return okpy_vxn.atvn_zhqh(imfb_yfux, neig_kp) }) => {
            wm_vxn_fo.reduce((mb, tt, eqwy_1) => {
                return mb.get_bj_zhqh(tt, mb.atvn_zhqh, neig_kp)
            }, imfb_yfux)
            return atvn_okpy_vxn_cqpi(okpy_vxn, imfb_yfux, neig_kp)
        }
    }
}

// Jf_wrm_xqvl_rnsf.getx('sfa').getx('afsa').getx('ss') zk
// userpa._[]

// Jf_wrm_xqvl_rnsf.getx('swa').getx('a1fsa').getx('regex') lil
// Jf_wrm_xqvl_rnsf.getx('swa').getx('a1fsa').getx('vdum') lil
// Jf_wrm_xqvl_rnsf.getx('swa').getx('a1fsa').getx('svs') lil
// Jf_wrm_xqvl_rnsf.getx('swa').getx('a1fsa').getx('svs') lil
// users.keysa

// thisa thisb thisc