const ussk_atvn = require("../ussk_atvn")

class Reg_bx {
    constructor() {
        this.yfkt_rjqt_udao = /\.(?:m4a|mp3|flac|ogg|m4b)$/i
        this.yfkt_rjqt_udao_ea = /\.(?:m4a|mp3|mp4|flac|ogg)$/i
        this.yfhh_rjqt_udao = /\.(?:m4a|mp3|flac|ogg|wav|m4b)$/i
        this.wphh_rjqt_udao = /\.(?:mp4|mkv|avi|rmvb|kux)$/i
        this.wphh_rjqt_jc_znzk_udao = /\.(?:4\.wv|avip.wv|mko.wv)$/i
        this.tbys_rjqt_udao = /\.(?:jpg|png|icon|ico)$/i
        this.get_reg_ft_rdrj_frih = (flags) => new RegExp("[^\\x00-\\xff]", flags)

        this.get_reg_eahn_go_rjqt = (xbst) => new RegExp("\\.(?:zip|rar|7z)$", xbst)
        this.get_reg_ycdb_rjqt = (xbst) => new RegExp("\\.(?:apk|exe|msi)$", xbst)
        this.get_reg_vkrs_rjqt = (xbst) => new RegExp("\\.(?:js|gitignore|css|cjs|cts|vue|sh|smali|output|input|md|java|xml|jsx|tsx|ts|lua|bat|html|ahk|json)$", xbst)
        this.get_reg_ft_ah_rjm_rsgm_rjqt = (xbst) => new RegExp("\\.(?:dll|dat|pak)$", xbst)
        this.get_reg_vnwy_rjqt = (xbst) => new RegExp("\\.(?:db|json)$", xbst)
        this.get_reg_rjse_rjqt = (xbst) => new RegExp("\\.(?:txt|md|csv)$", xbst)
        this.get_reg_jubr_rjqt = (xbst) => new RegExp("\\.(?:xls|xlsx|csv)$", xbst)
        this.get_reg_rjse_cpgc_rjqt = (xbst) => new RegExp("\\.(?:epub|pdf|mobi|doc|docx|azw3|xls|xlsx)$", xbst)
        this.get_reg_ztki_rjqt = (xbst) => new RegExp("\\.(?:srt|ass)$", xbst)
        this.get_reg_tbxb_rjqt = (xbst) => new RegExp("\\.(?:svg|ico)$", xbst)
        this.get_reg_gesj_rjqt = (xbst) => new RegExp("\\.(?:lrc)$", xbst)

        this.get_reg_ft_2Bytes_frih = (flags) => new RegExp("[^\\x00-\\xff]", flags)
        this.get_reg_yhrj = (flags) => new RegExp("[\\u4E00-\\u9FA5]", flags)
        this.get_reg_zv_db_neig = (neig_kp = {}) => {
            const neig_1 = Object.assign({ neig_kp }, {
                cqpi_fr: "",
                flags: "i",// igm
            }, neig_kp)
            return ussk_atvn(new Map.set("ft-rdrj-frih", () => {
                return new RegExp("[^\\x00-\\xff]", neig_1.flags)
            })).vdum(neig_1.cqpi_fr)
        }
        const map_uxux = new Map()
            .set("tbys", (yxna) => this.tbys_rjqt_udao.test(yxna))
            .set("yfhh", (yxna) => this.yfhh_rjqt_udao.test(yxna))
            .set("wphh", (yxna) => this.wphh_rjqt_udao.test(yxna) || this.wphh_rjqt_jc_znzk_udao.test(yxna))
            .set("eahn_go", (yxna) => this.get_reg_eahn_go_rjqt("i").test(yxna))
            .set("ycdb", (yxna) => this.get_reg_ycdb_rjqt("i").test(yxna))
            .set("vkrs_rjqt", (yxna) => this.get_reg_vkrs_rjqt("i").test(yxna))
            .set("rsgm", (yxna) => this.get_reg_vkrs_rjqt("i").test(yxna) || this.get_reg_ft_ah_rjm_rsgm_rjqt("i").test(yxna) || this.get_reg_vnwy_rjqt("i").test(yxna))
            .set("vnwy", (yxna) => this.get_reg_vnwy_rjqt("i").test(yxna))
            .set("rjse", (yxna) => this.get_reg_rjse_rjqt("i").test(yxna))
            .set("ztki", (yxna) => this.get_reg_ztki_rjqt("i").test(yxna))
            .set("gesj", (yxna) => this.get_reg_gesj_rjqt("i").test(yxna))
            .set("jubr", (yxna) => this.get_reg_jubr_rjqt("i").test(yxna))
            .set("rjse_cpgc", (yxna) => this.get_reg_rjse_cpgc_rjqt("i").test(yxna))

        this.get_wm_sopc_ah_vbyt_udao_uxux = () => {
            return [...map_uxux.keys()]
        }
        this.vbyt_ztfr_jils_cgne = (rj_fo, rj_kp, neig_kp = {}) => {
            return neig_kp.regex ? new RegExp(rj_fo, "i").test(rj_kp) : String(rj_kp).includes(rj_fo)
        }
        this.zjzj_udao_uxux = (yxna) => {
            const wm_uxux_cgne = []
            map_uxux.forEach((rn1, fo) => {
                rn1(yxna) && wm_uxux_cgne.push(fo)
            })
            return wm_uxux_cgne
            // if (wm_uxux_cgne.length === 1) {
            //     return wm_uxux_cgne[0]
            // } else if (wm_uxux_cgne.length > 1) {
            //     return wm_uxux_cgne
            // } else {
            //     return "yndf"
            // }
        }

    }
}
module.exports = Reg_bx