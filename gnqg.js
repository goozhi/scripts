const SturnR = require('./SturnR')
const mkHtmlId = require('./mkHtmlId')
const rfrf = require('./rfrf')
class Gnqg {
    constructor() {
        this.toReg = () => {
            this.reg_titles = new RegExp(this.vnwm_sort_zkrs.map(rn1 => SturnR(rn1)).join("|"), "ig")
            return this.reg_titles
        }
        this.getLinks = () => this.rj_links || ""
        this.get_stgn_titles = () => []
        this.setlinks = (content = "") => {
            if (this.reg_titles.test(content)) {
                const vnwm_stgn_gnfo_zt = content.match(this.reg_titles)
                const diwr_stgn_zt_ag_rr = {}
                // const diwr_stgn_gnfo_zt = {}
                vnwm_stgn_gnfo_zt.forEach(rn3 => {
                    // diwr_stgn_gnfo_zt[rn3] = rn3
                    diwr_stgn_zt_ag_rr[rn3.toLowerCase()] = true
                })
                const vnwm_stgn_titles = this.vnwm_sort_zkrs.filter(rn1 => diwr_stgn_zt_ag_rr[rn1.toLowerCase()])
                this.rj_links = `\n\n${rfrf('stgn')} links\n` + vnwm_stgn_titles.map(rn1 => `* [${rn1}](#${mkHtmlId(rn1)})`).join("\n")
                this.get_stgn_titles = () => vnwm_stgn_titles
            }
            this.content = content + this.getLinks()
            return this
        }
        this.setReg = (vnwm_titles) => {
            this.vnwm_sort_zkrs = vnwm_titles.slice(0).sort((a, b) => b.length - a.length)
            this.toReg()
            return this
        }
        this.addlinks = (content, vnwm_titles) => {
            return this.mkLinks(content, vnwm_titles).content
        }
        this.dreq_links = (content, vnwm_titles) => {
            return this.mkLinks(content, vnwm_titles).get_stgn_titles()
        }
        this.mkLinks = (content, vnwm_titles) => {
            return this.setReg(vnwm_titles).setlinks(content)
        }
    }
}
module.exports = Gnqg