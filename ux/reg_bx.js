const ussk_atvn = require("../ussk_atvn")

class Reg_bx {
    constructor() {
        this.yfkt_rjqt_udao = /\.(?:m4a|mp3|flac|ogg|m4b)$/i
        this.yfkt_rjqt_udao_ea = /\.(?:m4a|mp3|mp4|flac|ogg)$/i
        this.yfhh_rjqt_udao = /\.(?:m4a|mp3|flac|ogg|wav|m4b)$/i
        this.wphh_rjqt_udao = /\.(?:mp4|mkv)$/i
        this.tbys_rjqt_udao = /\.(?:jpg|png|icon)$/i
        this.get_ft_rdrj_frih = (flags) => new RegExp("[^\\x00-\\xff]", flags)
        this.get_ft_2Bytes_frih = (flags) => new RegExp("[^\\x00-\\xff]", flags)
        this.get_yhrj = (flags) => new RegExp("[\\u4E00-\\u9FA5]", flags)
        this.get_reg = (neig_kp = {}) => {
            const neig_1 = Object.assign({ neig_kp }, {
                cqpi_fr: "",
                flags: "i",// igm
            }, neig_kp)
            return ussk_atvn(new Map.set("ft-rdrj-frih", () => {
                return new RegExp("[^\\x00-\\xff]", neig_1.flags)
            })).vdum(neig_1.cqpi_fr)
        }

    }
}
module.exports = Reg_bx