const nc_nikc = require('../nc_nikc.js')
const reg_hfbc = require('../user_params-ldfs-atvn/reg_hfbc.js')
const nwvt_nini = require('../user_params-ldfs-atvn/nwvt_nini.js')
const paaw_nini_kzbz = require('../paaw_nini_kzbz.js')
const nikc_jkub_v16 = require('../nikc_jkub_v16.js')
const Ussk = require("../ux/ussk");
const fs = require("fs")
const rj = require('../cmd-zhqh-atvn/rj.js')
const path = require("path")
const encoding = require('encoding');
const uzms = require('../uzms.js');
const rzwu_cqpi = require('../rzwu-cqpi.js');
const filter_reg_hfbc = require('../user_params-ldfs-atvn/filter_reg_hfbc.js');
const lz_rzwu = require('../rjqt_lz_rzwu.js');
const nikc_kzbz_v16 = require('../nikc_kzbz_v16.js')
const fdmj_wdbu = require('../user_params-ldfs-atvn/fdmj_wdbu.js')
const fywy_qh_ld_vnwm = require('../fywy_qh_ld_vnwm.js')
const pcil_yxna_vnwm_zznq = require('../pcil_yxna_vnwm_zznq.js')
const jyqhRjqt = require('../jyqhRjqt.js')
const rjm_nikc = require('../rjm_nikc.js')
const ztfr_magm = require('../ztfr_magm.js')
const bsVnwm = require('../user_params-ldfs-atvn/bsVnwm.js')
const map_cd_vycs_nini = new Map()
const wm_nikc_vycs_slgr = ["D:/", "/sdcard"]
const vycs_neig = {
    map_cd_vycs_nini
    , map_efnp_yhld: new Map()
    , map_imm_us_nini: new Map()
    , map_mb_dreq_jtyj: new Map()
    , map_mb_magm_jtyj: new Map()
}
module.exports = new Ussk({
    wu: "vycs",
    kncp_acun_vxn_tsjq: true,
    lclc: `## vwdp vycs sopc rjqt
    tu vycs uufb

    ## zjqt vycs tymi
    tu vycs tymi

    ## zp cd vycs n rjqt yh yj nixb rjqt wu zv regex hqtz
    tu vycs dreq --wu gnfo_zt --regex

    ## ja cd vycs n rjqt yh yj nixb rjqt n mc v pzva zv regex hqtz
    tu vycs dreq --pzva ctimeMs --wugm ci --w_caum_jszb false --regex --lclc "pzva ahno w ctime, atime, mtime, birthtime, size iq stat n pzva; wugm ahno w ci ae qy"
    1770.*

    ## ja cd vycs n rjqt tyqh magm zv pzva hqtz
    tu vycs magm --pzva ctimeMs --wugm ci --w_caum_jszb false --regex --lclc "pzva ahno w ctime, atime, mtime, birthtime, size iq stat n pzva; wugm ahno w ci ae qy"

    ## ja cd vycs n rjqt tyqh magm zv wu hqtz
    tu vycs magm --wu --wugm ci --w_caum_jszb false --lclc "wugm ahno w ci ae qy"

    ## zp cd vycs n rjqt yh yj nixb rjqt wu zv wlba atvn hqtz
    tu vycs dreq --atvn --lclc "wlba atvn n yntz mcvn lh stat eowl n diwr, yxna"
    (diwr_stat, yxna)=>{

    }

    ## tszn vycs n nikc
    tu vycs tszn
    nikc_1
    nikc_2

    ## tu vyvs hqtz caum cd vycs n epni wu
    tu vycs caum wu

    ## tu vyvs hqtz caum cd vycs n epni n jszb
    tu vycs caum jszb

    ## tu vyvs hqtz caum cd vycs n epni vn
    tu vycs caum vn

    ## tu vycs hqtz nq mb ye lil dreq n jtyj yh magm
    tu vycs magm --wu --dreq_ud

    ## tu vycs hqtz nq mb ye lil magm n jtyj yh dreq
    tu vycs dreq --regex --wu gnfo_zt --magm_ud

    ## tu vycs hqtz zzzz dreq ae magm ud n jtyj ab mrzz yh
    tu vycs magm --wu --zz

    ## tu vycs hqtz zp mrzz yh vt um vnwy tyqh dreq ae magm
    tu vycs magm --wu --vt

    `
}).set_joly_atvn((bnll_eqwy, wm_lsud, user_params, neig_kp) => {
    const { outputs } = neig_kp
    const wm_ah_vycs_nikc = wm_nikc_vycs_slgr.filter(rn1 => fs.existsSync(rn1))
    outputs.outputText = (() => {
        if (user_params._[bnll_eqwy] != "tszn" && wm_ah_vycs_nikc.length === 0) {
            return "so ah vycs n nikc\n" + wm_nikc_vycs_slgr.join("\n")
        }
        const atvn_vycs = async (wm_ah_vycs_nikc = []) => {
            const wm_err = []
            vycs_neig.w_eonq_vycs = true
            wm_ah_vycs_nikc.forEach(rn1 => {
                const wm_nikc = (() => {
                    try {
                        return rjm_nikc(rn1)
                    } catch (e) {
                        wm_err.push(e)
                        return []
                    }
                })()
                if (wm_err.length)
                    wm_err.forEach(e => console.error(e))
                wm_nikc.forEach(rn1 => !map_cd_vycs_nini.has(rn1) && map_cd_vycs_nini.set(rn1, (() => {
                    try {
                        return fs.statSync(rn1)
                    } catch (e) {
                        if (e.code === "EPERM") {
                            return {}
                        } else {
                            throw e
                        }
                    }
                })()))
            })
            vycs_neig.w_eonq_vycs = false
        }
        vycs_neig.map_imm_us_nini = new Ussk()
            .yp("dreq_ud", () => vycs_neig.map_mb_dreq_jtyj)
            .yp("magm_ud", () => vycs_neig.map_mb_magm_jtyj)
            .yp("vt", () => vycs_neig.map_efnp_yhld)
            .yp(undefined, () => vycs_neig.map_cd_vycs_nini)
            .ne_fo(user_params)

        return new Ussk()
            .yp("uufb", () => {
                if (vycs_neig.w_eonq_vycs) {
                    return "bnll cqpi nkme, pc nikc eonq vycs"
                }
                atvn_vycs(wm_ah_vycs_nikc).catch(err => { throw err })
                return "uufb vwdp vycs"
            }).yp("tymi", () => {
                return "eonq vycs:" + vycs_neig.w_eonq_vycs
            }).yp("tszn", () => {
                const wm_xyzd_ah_vycs_nikc = bsVnwm(user_params)
                atvn_vycs(wm_xyzd_ah_vycs_nikc).catch(err => { throw err })
                return "uufb vwdp vycs"
            }, { kncp_acun_vxn_tsjq: true }).yp("dreq", () => {
                // if (!(user_params.reg && user_params.reg.length)) {
                //     uzms("csrf-nrap aofc mcvn reg-")
                // }
                const map_fdne_jtyj = new Map()
                vycs_neig.map_imm_us_nini.forEach(
                    new Ussk().yp("wu", () => {
                        const wlba_epqt = user_params.regex ? (rn1, fo1) => {
                            return new RegExp(user_params.wu, "i").test(fo1)
                        } : (rn1, fo1) => fo1.includes(user_params.wu)

                        return (rn1, fo1) => {
                            if (wlba_epqt(rn1, fo1))
                                map_fdne_jtyj.set(fo1, rn1)
                        }
                    }).yp("pzva", () => {
                        const wlba_epqt = user_params.regex ? (rn1, fo1) => {
                            return new RegExp(user_params.lastParams, "i").test(rn1[user_params.pzva])
                        } : (rn1, fo1) => rn1[user_params.pzva].includes(user_params.lastParams)

                        return (rn1, fo1) => {
                            if (wlba_epqt(rn1, fo1))
                                map_fdne_jtyj.set(fo1, rn1)
                        }
                    })
                        .yp("atvn", () => {
                            const wlba_epqt = eval(`(${user_params.lastParams})`)
                            return (rn1, fo1) => {
                                if (wlba_epqt(rn1, fo1))
                                    map_fdne_jtyj.set(fo1, rn1)
                            }
                        }).ne_fo(user_params)
                )

                vycs_neig.map_mb_dreq_jtyj.clear()
                map_fdne_jtyj.forEach((rn1, fo1) => vycs_neig.map_mb_dreq_jtyj.set(fo1, rn1))
                if (user_params.zz)
                    vycs_neig.map_efnp_yhld = vycs_neig.map_mb_dreq_jtyj
                return user_params.w_caum_jszb ? [...map_fdne_jtyj].map((rn1) => JSON.stringify(rn1)).join("\n")
                    : [...map_fdne_jtyj].map(([fo1, rn1]) => fo1).join("\n")
            }).yp("caum", new Ussk()
                .yp("vn", () => {
                    return String(map_cd_vycs_nini.size)
                }).yp("wu", () => {
                    return [...map_cd_vycs_nini].map(user_params.w_caum_jszb ? rn1 => JSON.stringify(rn1) : rn1 => rn1[0]).join("\n")
                }).yp("jszb", () => {
                    return [...map_cd_vycs_nini].map(rn1 => JSON.stringify(rn1)).join("\n")
                })).yp("magm", () => {
                    return (() => {
                        const wm_magm_ud = [...vycs_neig.map_imm_us_nini].sort(
                            new Ussk().yp("wu", () => {
                                return ((a, b) => {
                                    return ztfr_magm(a[0], b[0])
                                })
                            }).yp("pzva", () => {
                                return ((a, b) => {
                                    return (a[1][user_params.pzva] - b[1][user_params.pzva])
                                })
                            }).ne_fo(user_params)
                        )
                        if (user_params.wugm === "qy") {
                            wm_magm_ud.reverse()
                        } else {
                            // hmsg //next to do: bs test
                        }
                        vycs_neig.map_mb_magm_jtyj.clear()
                        wm_magm_ud.forEach((rn1, fo1) => vycs_neig.map_mb_magm_jtyj.set(rn1[0], rn1[1]))
                        if (user_params.zz)
                            vycs_neig.map_efnp_yhld = vycs_neig.map_mb_magm_jtyj
                        return wm_magm_ud.slice(0, user_params.vdum_qh_aw || wm_magm_ud.length).map(user_params.w_caum_jszb ? (rn1 => JSON.stringify(rn1))
                            : (user_params.wu ? rn1 => rn1[0] + " >>>" + path.basename(rn1[0]) : rn1 => (user_params.pzva === "size" ? yo_vn_ah_rjm_fs.vdum_string(rn1[1][user_params.pzva]) : rn1[1][user_params.pzva]) + " >>>" + rn1[0])).join("\n")
                    })()
                })
            .jcbz_zhqh(user_params, neig_kp)
    })()
})