const nikc_ld_diwr = require("../../scripts/nikc_ld_diwr_zv_jc_znzk_epqt_ss_eowl_bqeo");
const Shn_ux = require("../../scripts/ux-a-1/map-shn-ux");
const Ussk = require("../../scripts/ux-b/ussk");
const fsp = require("fs").promises
const path = require("path");
const uzms = require("../uzms");
module.exports = class extends Shn_ux {
    wrm_1 = {}
    ymwu = {} // {zl:"ce"}
    rj_ds_uxux_syig = "" //rjqt, nikc
    constructor(neig_kp, neig_nomr) {
        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            get_nikc_kp: () => { },
            nikc_nixb: null,
        }, neig_kp)
        this.wrm_fs = async () => {
            if (!this.get_neig().get_nikc_kp()) {
                uzms("csrf-bi nikc kp lh vv-" + this.get_neig().get_nikc_kp.toString())
            }
            await fsp.access(this.get_neig().get_nikc_kp())
                .then(res => {
                })
                .catch(e => { throw e })
            this.wrm_1 = (() => {
                try {
                    return nikc_ld_diwr(this.get_neig().get_nikc_kp())

                } catch (e) {
                    uzms("csrf-nikc ld diwr msox-" + e.stack || e + "-kp-" + this.get_neig().get_nikc_kp())
                }
            })()
            return this
        }
        this.set_ymwu = (wrm) => { this.ymwu = wrm; return this }
        this.set_get_nikc_kp = (atvn_kp) => (this.get_neig().get_nikc_kp = atvn_kp) && this
        this.set_nikc_nixb = (nikc_nixb) => (this.get_neig().nikc_nixb = nikc) && this
        this.set_ds_uxux_syig = (rj) => (this.rj_ds_uxux_syig = rj) && this
        this.nikc_fs = async (neig_kp = {}) => {
            const neig_1 = Object.assign({
                nikc_nixb: this.get_neig().nikc_nixb,
                rj_ds_uxux_syig: this.rj_ds_uxux_syig, //rjqt, nikc
                ymwu: this.ymwu, //{zl:"ce"}
            }, neig_kp)
            let wu_updz_1
            let wu_shn_1
            const wdbu_okud_2 = async ([fo1, yg1]) => {
                let wu_hidz_1 = neig_1.ymwu[fo1] || fo1
                const yxna_1 = path.join(neig_1.nikc_nixb, wu_updz_1, wu_shn_1, wu_hidz_1)
                await fsp.mkdir(yxna_1, { recursive: true }).catch(e => { throw e })
            }
            const wdbu_okud_1 = async ([fo1, yg1]) => {
                const yxna_1 = path.join(neig_1.nikc_nixb, wu_updz_1, wu_shn_1)
                await fsp.mkdir(yxna_1, { recursive: true }).catch(e => { throw e })
                let wu_hidz_1 = neig_1.ymwu[fo1] || fo1
                await fsp.writeFile(path.join(yxna_1, wu_hidz_1), "").catch(e => { throw e })
            }

            const wdbu_wrm_nikc_fs = async (wdbu_okud_1) => {
                return await Promise.all(Object.entries(this.wrm_1).map(async ([fo1, yg1]) => {
                    wu_updz_1 = neig_1.ymwu[fo1] || fo1
                    if (typeof yg1 === "object")
                        return await Promise.all(Object.entries(yg1).map(async ([fo1, yg1]) => {
                            wu_shn_1 = neig_1.ymwu[fo1] || fo1
                            if (typeof yg1 === "object")
                                return await Promise.all(Object.entries(yg1).map(wdbu_okud_1)).catch(e => { throw e })
                        })).catch(e => { throw e })
                })).catch(e => { throw e })

            }

            await (new Ussk().yp("rjqt", () => {
                return wdbu_wrm_nikc_fs(wdbu_okud_1)
            }).yp("nikc", () => {
                return wdbu_wrm_nikc_fs(wdbu_okud_2)
            }).vdum(neig_1.rj_ds_uxux_syig)).catch(e => { throw e })
            return this
        }

    }
}