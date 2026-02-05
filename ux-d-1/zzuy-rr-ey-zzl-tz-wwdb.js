const X_map = require("../ux-a/x_map");
const Zzuy = require("../ux-d-2/zzuy-rr-wwdb-wwdb");
const uzms = require("../uzms");
const path = require("path")
const fs = require("fs")
const xmap_yp_mrzz = new X_map()
module.exports = class extends Zzuy {
    constructor(neig_kp, neig_nomr) {

        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            nikc_ph: "",
            w_fyn: false,
            get_yo_yp_bvzd_rr: null // aq lz rr
        }, neig_kp)
        this.allright = () => this.allright_yhld(this.imfb)
        this.imfb = async () => {
            this.zp_seyy_rzvo_se_wrm_kp()
            this.ic_yoch_fs_kl({
                w_jcbz_yp_mrzz: false,
                get_mrzz: () => this.get_map_nomr_yfux_yoch_fs_mrzz()
            })
        }
        this.bnlb_ow_wyzv_wrm_kp = async (fo_map_kl) => {
            await Promise.all([...this.get_map_kl(fo_map_kl)].map(async rn1 => rn1[1].allright())).catch(e => { throw e })
            return this
        }
        this.imfb_sopc_vxn = async () => {
            // const wm_vwdp = []

            // this.di_li_v_yfux_cqpi(rn1 => {
            //     wm_vwdp.push(rn1.allright().catch?.(err => { throw err }))
            // })
            const wm_vwdp = [...this.get_map_vxn()].map(async ([fo1, yg1]) => {
                // console.log(vkih_hfbc_ar.next().value, yg1.get_wu())
                await yg1.allright().catch?.(e => { throw e })
                return yg1
            })
            return Promise.all(wm_vwdp).then(res => {
                return res.map(async yg1 => {
                    return await yg1.imfb_sopc_vxn().catch(err => { throw err })
                })
            }).catch(err => { throw err })
        }
        this.set_yoch_dyih = (dyih) => {
            this.get_neig().yoch_dyih = dyih
            this.get_map_nomr_yfux_yoch_fs_mrzz().set(this.get_yoch_dyih(), this)
            return this
        }
        this.zp_seyy_rzvo_se_wrm_kp = () => {
            const yxna = this.get_rjwc_seyy_yxna()
            if (fs.existsSync(yxna)) {
                const wrm_kp = require(yxna)
                Object.assign(this.get_neig().wrm_kp, wrm_kp)
                // nq yoch fs se ux zd om ycbi zqjp ypzv mrzz lw gq ac ji dynq yp
                // this.get_map_nomr_yfux_yoch_fs_mrzz().set(this.get_yoch_dyih(), this)
            } else {
                // do nothing
            }
        }
        this.yp_rjwc_bj_ybkc_mrzz
        const yoch_fs_sopc_kl_ic_tz = (vy_kl_di = [[{ xbiw_wu: "wm_slm", diyc_kl_wu: "slm" }, disc_kl_wu]], neig_kp = {}) => {
            const neig_1 = Object.assign({
                w_jcbz_yp_mrzz: false,
                get_mrzz: null // aq lz rr (ux)=>{}
            }, neig_kp)
            vy_kl_di.forEach(([wrm_kl_1, disc_kl_wu]) => {
                const xbiw_wu_1 = wrm_kl_1.xbiw_wu
                // const xbiw_wu_2 = wrm_kl_2.xbiw_wu
                const kl1 = wrm_kl_1.diyc_kl_wu
                const kl2 = disc_kl_wu
                if (this.get_neig().wrm_kp[xbiw_wu_1]) {
                    this.get_neig().wrm_kp[xbiw_wu_1].forEach(rn1 => {
                        const vkih = rn1
                        const map_1 = neig_1.get_mrzz(this)
                        if (map_1.has(vkih)) {
                            this.yp_bj_kyfb_yp_0(kl1, kl2, map_1.get(vkih))
                        } else {
                            this.yp_bj_kyfb_yp_0(kl1, kl2, vkih, {
                                wu: "ra-znzk",
                                nikc_ph: this.get_nikc_ph()
                            })
                            if (neig_1.w_jcbz_yp_mrzz)
                                map_1.set(vkih, this.get_0(kl2, vkih))

                            // const yxna_vnwy = this.get_nixb_rjwc_seyy_yxna(vkih)
                            // const wrm_kp = require(yxna_vnwy)
                            // const ce_yoch = new this.constructor({
                            //     nikc_ph: this.get_nikc_ph(),
                            //     w_fyn: false,
                            //     wrm_kp
                            // })
                            // map_1.set(vkih, ce_yoch)
                        }
                        // this.yp_bj_kyfb_yp_0("wm_slm", "wm_vxn", map_1.get(vkih))
                    })
                }

            })

        }
        this.paaw_kyfb_se_ux = (vy_mcvn = [["wm_slm", ['vxn', 'slm']]], neig_kp = {}) => {
            const neig_1 = Object.assign({
                atvn_kyfb_qr_wlba: (ux_kyfb_qr) => { }
                , get_mrzz: null // aq lz rr (se_ux) => {}
            }, neig_kp)
            const map_dyih_ae_vkih_tsn_yoch = neig_1.get_mrzz(this)
            vy_mcvn.forEach(wm_mcvn => {
                const [wm_slm, [vxn, slm]] = wm_mcvn
                if (this.get_neig().wrm_kp[wm_slm]) {
                    this.get_neig().wrm_kp[wm_slm].forEach(rn1 => {
                        if (!map_dyih_ae_vkih_tsn_yoch.has(rn1)) {
                            uzms("csrf-bi dyih ae vkih ac zznq-" + rn1)
                        } else {
                            map_dyih_ae_vkih_tsn_yoch.get(rn1).yp_bj_kyfb_yp_0(vxn, slm, this)
                            neig_1.atvn_kyfb_qr_wlba(map_dyih_ae_vkih_tsn_yoch.get(rn1))
                        }
                    })
                }
            })
            return this
        }
        this.ic_yoch_fs_kl = (neig_kp = {}) => {
            yoch_fs_sopc_kl_ic_tz([
                [{ xbiw_wu: "wm_slm", diyc_kl_wu: "slm" }, "vxn"],
                [{ xbiw_wu: "wm_vxn", diyc_kl_wu: "vxn" }, "slm"],
                [{ xbiw_wu: "wm_lil_slm", diyc_kl_wu: "lil_slm" }, "lil_vxn"],
                [{ xbiw_wu: "wm_lil_vxn", diyc_kl_wu: "lil_vxn" }, "lil_slm"],
            ], neig_kp)
        }
        this.set_get_yo_yp_bvzd_rr = (atvn_kp) => {
            this.get_neig().get_yo_yp_bvzd_rr = atvn_kp
        }
        this.get_yo_yp_bvzd_rr = () => this.get_neig().get_yo_yp_bvzd_rr()
        this.qi_wu_bj_zzzz = (ce_wu, neig_kp) => {
            return this.qi_wu(ce_wu, Object.assign({
                atvn_qi_wu_wlba: () => this.bvzd_zzzz()
            }, neig_kp))
        }
        this.bvzd_zzzz = async (wlba_atvn = (yxna, bqeo) => { }) => {
            if (!this.w_cd_imfb()
                && (/ra.znzk/i.test(this.get_neig().wrm_kp.wu) || !this.get_neig().wrm_kp.wu)
                && (!this.get_neig().wrm_kp.bqeo || /ra.znzk/i.test(this.get_neig().wrm_kp.bqeo))) {
                return this
            }
            await this.get_yo_yp_bvzd_rr().bv_rrzv_vnwy(this.get_rjwc_seyy_yxna(), JSON.stringify(this.get_wrm_kp_seyy_fs_vnwy()), wlba_atvn).catch?.(err => { throw err })
            return this
        }
        this.zzzz = this.bvzd_zzzz
        this.get_wrm_kp_seyy_fs_vnwy = () => {
            return Object.assign({}, this.get_neig().wrm_kp, {
                wm_slm: [...this.get_map_slm().keys()],
                wm_vxn: [...this.get_map_vxn().keys()],
                wm_lil_slm: [...this.get_map_kl('lil_slm').keys()],
                wm_lil_vxn: [...this.get_map_kl('lil_vxn').keys()]
            })
        }
        this.get_nixb_rjwc_seyy_yxna = (vkih) => path.join(this.get_neig().nikc_ph, "rjwc", vkih + ".json")
        this.get_rjwc_seyy_yxna = () => this.get_nixb_rjwc_seyy_yxna(this.get_yoch_dyih())
        this.fo_shn_brtz_fs_bj_yj_nixb_zzuy = async (user_params = { _: [] }) => {
            return this.fo_shn_yj_zzuy_vwdp((user_params._), async (vxn) => {
                vxn.w_cd_imfb() || await vxn.allright(vxn.imfb).catch?.(err => { throw err })
                // vxn.w_cd_imfb() || vxn.w_xbiw() && !vxn.w_cd_imfb() && await vxn.imfb_bnlb_vnwy().catch?.(err => { throw err })
            }, (fo, slm_yfux) => slm_yfux.fo_brtz_fs(fo, user_params))
        }
        this.yp_rjwc_bj_ybkc_mrzz = (wrm_kp, wlba_atvn = (wrm_kp, nixb_yfux) => { }, neig_kp = {}) => {
            this.yp_rjwc(wrm_kp, (vkih, wrm_kp, slm) => {
                xmap_yp_mrzz.set(vkih, wrm_kp)
                wlba_atvn(wrm_kp, slm.get(vkih))
            }, Object.assign({}, neig_kp))
            return this
        }
        this.get_okbb_yp_rjwc = (vn) => {
            return [...xmap_yp_mrzz].reverse().slice(0, vn)
        }


    }
}