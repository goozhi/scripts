const zqjp_rfrf = require("../../scripts/zqjp_rfrf")
const wydb_wdbu = require("../../scripts/wydb_wdbu")
const html_parser = require("../../scripts/html-parser")
const ussk_cqpi = require("../../scripts/ussk_cqpi")
const md_ld_html = require("../../scripts/md_ld_html")
const yhrj_xjvx_ld_wrvr = require("../../scripts/KPLU/wrvr/atvn/yhrj_xjvx_ld_wrvr")
const wrvr_kp = require("../../scripts/KPLU/wrvr/index")
const uzms = require("../../scripts/uzms")
const Zdti = require("../../scripts/ux/zdti")
const lclc_trl_wdbu = require("../atvn-kp/lclc-trl-wdbu")
const Ussk = require("../ux-b/ussk")
const yo_zdti = new Zdti()
class Jplp_rjwc {
    constructor(neig_kp = {}) {
        const neig = {
            wu: "ra-znzk"
            , w_ocxt_rfrf: false
            , w_oh_oam: false
            , ebwu: "wrvr" //"yhrj" "so"
            // , afoa: "rfrf_wrvr"
            , bqeo: "ra-znzk"
            , uxux: "md" //"txt html"
            , vkih: Math.random().toString()
            , zdog_1: new Date().getTime()
        }
        const neig_joyp = {}
        Object.assign(neig, neig_kp)
        this.rzvo = (neig_kp = {}) => {
            Object.assign(neig, neig_kp)
            return this
        }
        this.set_vkih = (vkih = "") => {
            neig.vkih = vkih
            return this
        }
        this.get_zdog_string = () => yo_zdti.vdum_sum(neig.zdog_1)
        this.rzvo_joyp_neig = (neig_kp = {}) => {
            Object.assign(neig_joyp, neig_kp)
            return this
        }
        this.get_lclc = (neig_kp = {}) => {
            return qirw_rj(lclc_trl_wdbu(neig.lclc), neig_kp)
        }

        this.get_vkih = () => neig.vkih
        function set_one(vdzv_kp, key = "", uxux = "string") {
            if (typeof vdzv_kp != uxux) {
                uzms('csrf-uxux aoao w ' + uxux + "-" + vdzv_kp)
            }
            neig[key] = vdzv_kp
        }
        this.set_bqeo = (bqeo_kp = "") => {
            set_one(bqeo_kp, 'bqeo', "string")
            return this
        }
        this.set_wu = (wu_kp = "") => {
            set_one(wu_kp, 'wu', "string")
            return this
        }
        this.get_neig = () => neig
        this.get_joyp_neig = () => {
            return neig_joyp
        }
        this.get_rjwc = (neig_kp = {}) => {
            const wu_yhld = ussk_cqpi(new Map()
                .set("html", () => {
                    return /^\s*<h/.test(neig.wu) ? neig.wu : `<h2>${neig.wu}</h2>`
                }).set("txt", () => {
                    return neig.wu
                }).set("md", () => {
                    return /^\s*#|^\s*<h/.test(neig.wu) ? neig.wu : `## ${neig.wu}`
                })).vdum(neig.uxux)
            return qirw_rj(wu_yhld, neig_kp) + "\n" + qirw_rj(neig.bqeo, neig_kp)
        }
        this.w_pc_wu = () => neig.wu ? this : false
        this.get_wu = (neig_kp = {}) => {
            return qirw_rj(neig.wu, neig_kp)
        }
        this.get_link = (neig_kp) => {
            const neig_1 = Object.assign({
                // link_yntz: "vkih", // "shjp"
                vdum_yntz: "html",
                // get_vkih: () => this.get_vkih()
                get_shjp: () => "#" + this.get_vkih()
            }, neig_kp)
            if (neig.w_oh_oam) {
                if (neig_1.tn_vyn != "tnoh") {
                    return ""
                }
            }
            return new Ussk()
                .yp("md", () => {
                    return `[${this.get_wu(neig_1)}](${neig_1.get_shjp()})`
                })
                .set_nmky_cqpi_fo('html')
                .yp("html", () => {
                    return `<a href="${neig_1.get_shjp()}">${this.get_wu(neig_1).trim()}</a>`
                }).vdum(neig_1.vdum_yntz)
        }
        this.get_bqeo = (neig_kp = {}) => {
            return qirw_rj(neig.bqeo, neig_kp)
        }
        function qirw_rj(bqeo_kp, neig_kp = {}) {
            if (typeof bqeo_kp != "string") {
                uzms('csrf-kp bqeo ac lh zt fr sum uxux-' + typeof bqeo_kp + '-kp-' + JSON.stringify(neig))
            }
            const neig_1 = Object.assign({
                // qirw: "so",//"rfrf_lh_yhrj"
                vdum_ebwu: "so", // "yhrj" "wrvr"
                vdum_yntz: neig.uxux,//"html" "md"
            }, neig_kp)
            const rj_rfrf_ud = (() => {
                const rfrf_nixb_bqeo = (rfrf_wlba = (rj) => rj) => {
                    return ussk_cqpi(new Map()
                        .set("txt", () => rfrf_wlba(bqeo_kp))
                        .set("md", () => wydb_wdbu(bqeo_kp, rfrf_wlba))
                        .set("html", () => {
                            return bqeo_kp.replace(/(>)([^<>]+)(<)/g, (m1, p1, p2, p3) => {//replace_all
                                return `${p1}${rfrf_wlba(p2)}${p3}`
                            })//replace_all
                        })
                    ).vdum(neig.uxux)
                }
                if (neig.w_oh_oam) {
                    if (neig_1.tn_vyn != "tnoh") {
                        return ""
                    }
                }
                if (neig.w_ocxt_rfrf) {
                    return bqeo_kp
                }
                return neig.atvn_rfrf ? neig.atvn_rfrf(bqeo_kp, neig_1.vdum_ebwu) : ussk_cqpi(new Map()
                    .set("so", () => bqeo_kp)
                    .set("wrvr", () => {
                        return ussk_cqpi(new Map()
                            .set("yhrj", () => neig.atvn_rfrf ? neig.atvn_rfrf(bqeo_kp, "yhrj") : rfrf_nixb_bqeo(yhrj_rfrf_lh_wrvr))
                        )
                            .setDefault(rn1 => bqeo_kp)
                            .vdum(neig.ebwu)
                    })
                    .set("yhrj", () => {
                        return ussk_cqpi(
                            new Map()
                                .set("wrvr", () => {
                                    return neig.atvn_rfrf ? neig.atvn_rfrf(bqeo_kp, "wrvr") : rfrf_nixb_bqeo(zqjp_rfrf)
                                    // return ussk_cqpi(new Map()
                                    //     .set("txt", () => zqjp_rfrf(bqeo_kp))
                                    //     .set("md", () => wydb_wdbu(bqeo_kp, zqjp_rfrf))
                                    //     .set("html", () => {
                                    //         return bqeo_kp.replace(/(>)([^<>]+)(<)/g, (m1, p1, p2, p3) => {//replace_all
                                    //             return `${p1}${zqjp_rfrf(p2)}${p3}`
                                    //         })//replace_all
                                    //     })
                                    // ).vdum(neig.uxux)
                                })
                        )
                            .setDefault(rn1 => bqeo_kp)
                            .vdum(neig.ebwu)

                    })).setDefault(() => bqeo_kp).vdum(neig_1.vdum_ebwu)
            })()

            return ussk_cqpi(new Map()
                .set("txt", () => ussk_cqpi(new Map()
                    .set('txt', () => rj_rfrf_ud)
                    .set('md', () => rj_rfrf_ud)
                    .set('html', () => html_parser.parse(rj_rfrf_ud).structuredText)
                ).vdum(neig.uxux))
                .set("md", () => ussk_cqpi(new Map()
                    .set('txt', () => rj_rfrf_ud)
                    .set('md', () => rj_rfrf_ud)
                    .set('html', () => html_ld_md(rj_rfrf_ud))
                ).vdum(neig.uxux))
                .set("html", () => ussk_cqpi(new Map()
                    .set('txt', () => md_ld_html(rj_rfrf_ud))
                    .set('md', () => md_ld_html(rj_rfrf_ud))
                    .set('html', () => rj_rfrf_ud)
                ).vdum(neig.uxux))
            ).vdum(neig_1.vdum_yntz)

        }
    }
}
module.exports = Jplp_rjwc

function html_ld_md(rj_kp) {
    const root = html_parser.parse(rj_kp)
    let yh = ["h1", "h2", "h3", "h4", "h5", "h6", "h7"].forEach(rn2 => {
        const rj_xb = "#".repeat(Number(rn2.match(/\d/)[0])) + " "
        root.getElementsByTagName(rn2).forEach(rn1 => rn1.set_content(rj_xb + rn1.innerText))

    });
    return root.structuredText
}

function yhrj_rfrf_lh_wrvr(yhrj) {
    return yhrj_xjvx_ld_wrvr(yhrj, wrvr_kp)
}