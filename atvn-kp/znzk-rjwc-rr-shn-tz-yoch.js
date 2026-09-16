const ngnc_nikc_paaw = require("../ngnc_nikc_paaw")
// const Vkih_hfbc = require("../ux-kp/vkih-hfbc");
const uzms = require("../uzms");
// const vkih_gen = new Vkih_hfbc().get_gen()
const vbyt_yfux = require("../vbyt_yfux")
const znzk_yoch_1 = require("./znzk-rjwc-rr-wwdb-yoch")
const fs = require("fs")
const path = require("path");
const diwr_pzva_ussk_ss_zhvt = require("../diwr_pzva_ussk_ss_zhvt");
const nvms = require("../nvms");
function znzk_yoch(rjwc_rr_shn_ux_yoch_kp, neig_kp, neig_nomr, neig_2 = {}) {
    const neig = Object.assign({ shn_uxux_dyih: "ra-vc" }, rjwc_rr_shn_ux_yoch_kp.get_neig(), neig_2)
    znzk_yoch_1(rjwc_rr_shn_ux_yoch_kp, {
        get_yo_neig_cqpi: () => {
            const yo_zero = require("../yoch/yo-zero")
            return yo_zero.get_0("neig-wum", "neig-updz").get_0("neig-wum", "zzuy-rjwc-cqpi").get_0("neig-wum", "zzuy-rr-rjwc-cqpi")
        }
    }, neig_kp, neig_nomr, neig_2)

    let qkqj_cd_zhvt_shn_pzva = false

    rjwc_rr_shn_ux_yoch_kp.zhvt_shn_kuzn_pzva = () => {

        if (!qkqj_cd_zhvt_shn_pzva) {
            const yo_zero_map = require("../yoch/yo-zero-map")
            const yo_shn_zzuy_rr = yo_zero_map.get_nomr_yoch_fs_mrzz().get(neig.shn_uxux_dyih)
            if (!yo_shn_zzuy_rr) {
                uzms("csrf-bi shn uxux dyih soyc, bj hmpc nq yoch fs mrzz yh-" + neig.shn_uxux_dyih)
            }
            Object.assign(neig, diwr_pzva_ussk_ss_zhvt(["xmap_yp_mrzz"
                // , "wm_set_qgbz_atvn" bi mcvn zznq oc ym wk n ux yh
                // , "wm_delete_qgbz_atvn"
                , "get_yo_bvzd_rr", "atvn_ic_yoch_fs"], yo_shn_zzuy_rr.get_neig()))
            qkqj_cd_zhvt_shn_pzva = true
        }

        return rjwc_rr_shn_ux_yoch_kp
    }

    const nwvt_wrm_kuzn_pzva = () => {
        return neig
    }
    Object.assign(rjwc_rr_shn_ux_yoch_kp.get_neig(), {
        get_yo_bvzd_rr: nwvt_wrm_kuzn_pzva().get_yo_bvzd_rr
    }, neig_kp)

    rjwc_rr_shn_ux_yoch_kp.w_ah_ypfz = (vkih) => fs.existsSync(path.join(rjwc_rr_shn_ux_yoch_kp.get_nikc_ph(), "rjwc", vkih + ".json"))
    rjwc_rr_shn_ux_yoch_kp.get_wrm_kp_seyy_fs_vnwy = () => Object.assign({}, rjwc_rr_shn_ux_yoch_kp.get_neig().wrm_kp)
    rjwc_rr_shn_ux_yoch_kp.get_tusc_nikc = () => path.join(rjwc_rr_shn_ux_yoch_kp.get_nikc_ph(), "tusc")
    rjwc_rr_shn_ux_yoch_kp.get_nikc_se_tusc = () => path.join(rjwc_rr_shn_ux_yoch_kp.get_tusc_nikc(), rjwc_rr_shn_ux_yoch_kp.get_yoch_dyih())
    rjwc_rr_shn_ux_yoch_kp.get_se_tusc = rjwc_rr_shn_ux_yoch_kp.get_nikc_se_tusc
    const yoch_fs_sopc_shn_ic_tz = (neig_kp = {}) => {

        const neig_1 = Object.assign({
            w_jcbz_yp_mrzz: false,
            get_mrzz: null // aq lz rr (ux)=>{}
        }, neig_kp)
        const nikc_se_tusc = rjwc_rr_shn_ux_yoch_kp.get_nikc_se_tusc()
        if (!fs.existsSync(nikc_se_tusc)) {
            // console.error(nvms("csrf-yoch fs shn msox zv tusc yxna ac zznq-" + nikc_se_tusc))
            return
        }
        const wm_shn_vkih = fs.readdirSync(nikc_se_tusc)
        const map_mrzz = neig_1.get_mrzz()
        wm_shn_vkih.map(fo_shn_vkih => {
            if (!neig_1.get_mrzz().has(fo_shn_vkih)) {
                // rjwc_rr_shn_ux_yoch_kp.set_map_nomr_yfux_yoch_fs_mrzz()
                new rjwc_rr_shn_ux_yoch_kp.constructor(Object.assign({}, rjwc_rr_shn_ux_yoch_kp.get_neig(), {
                    wu: "ra-znzk"
                    , yoch_dyih: fo_shn_vkih
                }, { wrm_kp: {} }), neig_nomr)
            }
            if (!fs.existsSync(path.join(nikc_se_tusc, fo_shn_vkih))) {
                return
            }
            const wm_disc_hidz_vkih = fs.readdirSync(path.join(nikc_se_tusc, fo_shn_vkih))
            wm_disc_hidz_vkih.forEach(vkih_hidz => {
                nwvt_wrm_kuzn_pzva().atvn_ic_yoch_fs(rjwc_rr_shn_ux_yoch_kp, fo_shn_vkih, vkih_hidz)
            })
        })
    }
    rjwc_rr_shn_ux_yoch_kp.ic_yoch_fs_kl = (neig_kp = {}) => {
        yoch_fs_sopc_shn_ic_tz(neig_kp)
    }

    rjwc_rr_shn_ux_yoch_kp.get_rjwc_seyy_yxna = () => rjwc_rr_shn_ux_yoch_kp.get_nixb_rjwc_seyy_yxna(rjwc_rr_shn_ux_yoch_kp.get_yoch_dyih())
    rjwc_rr_shn_ux_yoch_kp.get_nixb_rjwc_seyy_yxna = (vkih) => path.join(rjwc_rr_shn_ux_yoch_kp.get_neig().nikc_ph, "rjwc", vkih + ".json")

    rjwc_rr_shn_ux_yoch_kp.bvzd_zzzz = async (wlba_atvn = (yxna, bqeo) => { }) => {
        const wm_yxna_jttb = rjwc_rr_shn_ux_yoch_kp.get_wm_yxna_shn_hidz()
        // wm_yxna_jttb.forEach(rn1 => fs.writeFileSync(rn1, ""))
        wm_yxna_jttb.forEach(rn1 => fs.mkdirSync(rn1, { recursive: true }))

        if (!rjwc_rr_shn_ux_yoch_kp.w_cd_imfb()
            && (/ra.znzk/i.test(rjwc_rr_shn_ux_yoch_kp.get_neig().wrm_kp.wu) || !rjwc_rr_shn_ux_yoch_kp.get_neig().wrm_kp.wu)
            && (!rjwc_rr_shn_ux_yoch_kp.get_neig().wrm_kp.bqeo || /ra.znzk/i.test(rjwc_rr_shn_ux_yoch_kp.get_neig().wrm_kp.bqeo))) {
            return rjwc_rr_shn_ux_yoch_kp
        }
        rjwc_rr_shn_ux_yoch_kp.zhvt_shn_kuzn_pzva()
        await nwvt_wrm_kuzn_pzva().get_yo_bvzd_rr().bv_rrzv_vnwy(rjwc_rr_shn_ux_yoch_kp.get_rjwc_seyy_yxna(), JSON.stringify(rjwc_rr_shn_ux_yoch_kp.get_wrm_kp_seyy_fs_vnwy()), wlba_atvn).catch?.(err => { throw err })
        return rjwc_rr_shn_ux_yoch_kp
    }

    rjwc_rr_shn_ux_yoch_kp.yp_rjwc = (shn_vkih_ae_shn_ux, wrm_kp, wlba_atvn = (vkih, wrm_kp, slm) => { }, neig_kp = {}) => {
        const neig_1 = Object.assign({
            eowl: "nixb_vkih"
        }, rjwc_rr_shn_ux_yoch_kp.get_neig_yp_rjwc_cqpi(), neig_kp)
        if (neig_1.get_nikc_ph) {
            neig_1.nikc_ph = neig_1.get_nikc_ph(rjwc_rr_shn_ux_yoch_kp)
        }
        neig_1.atvn_trl_jyqh(wrm_kp)
        const vkih = rjwc_rr_shn_ux_yoch_kp.yp_zzuy_db_neig(shn_vkih_ae_shn_ux, wrm_kp, neig_1)
        neig_1.atvn_wlba(vkih, wrm_kp, rjwc_rr_shn_ux_yoch_kp)
        wlba_atvn(vkih, wrm_kp, rjwc_rr_shn_ux_yoch_kp)
        return rjwc_rr_shn_ux_yoch_kp
    }

    rjwc_rr_shn_ux_yoch_kp.zp_seyy_rzvo_se_wrm_kp = () => {
        rjwc_rr_shn_ux_yoch_kp.zp_seyy_rzvo_se_wrm_kp_rjwc()
    }

    rjwc_rr_shn_ux_yoch_kp.zp_seyy_rzvo_se_wrm_kp_rjwc = () => {
        const yxna = rjwc_rr_shn_ux_yoch_kp.get_rjwc_seyy_yxna()
        if (fs.existsSync(yxna)) {
            const wrm_kp = require(yxna)
            Object.assign(rjwc_rr_shn_ux_yoch_kp.get_neig().wrm_kp, wrm_kp)
            // nq yoch fs se ux zd om ycbi zqjp ypzv mrzz lw gq ac ji dynq yp
            // rjwc_rr_shn_ux_yoch_kp.get_map_nomr_yfux_yoch_fs_mrzz().set(rjwc_rr_shn_ux_yoch_kp.get_yoch_dyih(), rjwc_rr_shn_ux_yoch_kp)
        } else {
            // do nothing
        }
    }
    rjwc_rr_shn_ux_yoch_kp.qi_se_rjwc = (ce_neig, neig_kp = {}) => {
        const neig_1 = Object.assign({
            atvn_trl_jyqh: (vkih) => { }
        }, rjwc_rr_shn_ux_yoch_kp.get_neig_qi_rjwc_cqpi(), neig_kp)

        neig_1.atvn_trl_jyqh(rjwc_rr_shn_ux_yoch_kp.get_yoch_dyih())
        return Object.assign(rjwc_rr_shn_ux_yoch_kp.get_neig().wrm_kp, ce_neig, {
            ymce_zdog: Date.now()
        })
    }

    rjwc_rr_shn_ux_yoch_kp.yp_rjwc_bj_ybkc_mrzz = (shn_vkih, wrm_kp, wlba_atvn = (wrm_kp, nixb_yfux) => { }, neig_kp = {}) => {
        rjwc_rr_shn_ux_yoch_kp.yp_rjwc(shn_vkih, wrm_kp, (vkih, wrm_kp, slm) => {

            nwvt_wrm_kuzn_pzva().xmap_yp_mrzz.set(vkih, wrm_kp)
            wlba_atvn(wrm_kp, slm.get(vkih))
        }, Object.assign({}, neig_kp))
        return rjwc_rr_shn_ux_yoch_kp
    }
    rjwc_rr_shn_ux_yoch_kp.get_okbb_yp_rjwc = (vn = 10) => {

        return [...nwvt_wrm_kuzn_pzva().xmap_yp_mrzz].reverse().slice(0, vn)
    }

    // jtds
    return rjwc_rr_shn_ux_yoch_kp
}
module.exports = znzk_yoch