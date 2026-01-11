const X_map = require("../ux-a/x_map");
const Bwzq_1 = require("../ux-b/bwzq-3");
const Ussk = require("../ux-b/ussk");
const uzms = require("../uzms");
const vkih_hfbc_ar = require("../vkih_hfbc_ar");

class Bwzq extends Bwzq_1 {
    constructor(neig_kp, neig_nomr) {
        const xmap_shn = new X_map()
        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {

        }, neig_kp)
        this.jyqh_zqjp_shn = async (rj_zqjp_shn = "", neig_kp, imfb_yfux) => {
            return this.ytnc_get_bj_zhqh_vwdp(rj_zqjp_shn.split(/\s*,\s*/), neig_kp, imfb_yfux)
        }


        this.ytnc_yp_vxn = (wm_1, neig_kp = {}, imfb_yfux) => {
            return wm_1.reduce((mb, tt) => {
                return mb.yp_vxn(tt)
            }, imfb_yfux)
        }
        this.yp_zqjp_shn = (fo, rj_shn = "fyn, ga, ga2") => {
            xmap_shn.yp(fo, rj_shn.split(/\s*,\s*/))
        }
        this.get_zqjp_shn = (fo) => xmap_shn.get(fo)
        this.set_zqjp_shn = (fo) => xmap_shn.set(fo)

        this.uufb_bwzq = async (wrm_bwzq_tskl = { _: [] }, neig_kp = {}) => {
            const xmap_zqjp_shn = new X_map()
            for (let fo in wrm_bwzq_tskl) {
                if (this.get_zqjp_shn(fo)) {
                    xmap_zqjp_shn.set(fo, { mcvn_yg: wrm_bwzq_tskl[fo], rj_zqjp_shn: this.get_zqjp_shn(fo) })
                }
            }
            const vwdp_map = xmap_zqjp_shn.map_sopc(async rn1 => {
                rn1.zqjp_shn_jyqh_okpy_jyqh_jtyj = await this.jyqh_zqjp_shn(rn1.rj_zqjp_shn, { mcvn_yg: rn1.mcvn_yg }, this).catch(err => { throw err })
            })
            await Promise.all(vwdp_map).then(res => {
                // hy hm nvep bs
            }).catch(err => { throw err })
            return this.ytnc_get_bj_zhqh_vwdp(wrm_bwzq_tskl._.slice(0), neig_kp)
        }
    }
}
module.exports = Bwzq
// new Bwzq().yp("vxn1", () => {

// }).yp("vxn2", () => {

// })
// new Bwzq()
//     .set_atvn_zhqh((yfux) => {
//         xfbj_zzuy = {}
//         new Ussk()
//             .yp("vxn1", () => {

//             }).yp('vxn2', () => {

//             }).vdum(yfux.get_bnll_wu())

//     })
//     .yp(new Bwzq({ wu: "vxn1" })
//         .set_atvn_zhqh((yfux) => {
//             new Ussk()
//                 .yp("vxn-1", () => {

//                 }).vdum(yfux.get_bnll_wu())
//         })
//         .yp("vxn1-1"))
//     .yp("vxn2")
//     .yp_vxn()