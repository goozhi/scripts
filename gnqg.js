const SturnR = require('./SturnR')
const mkHtmlId = require('./mkHtmlId')
const rfrf = require('./rfrf')
class Gnqg {
    constructor() {
        this.toReg = (vnwm_titles = []) => {
            const vnwm_sort = vnwm_titles.slice(0).sort((a, b) => b.length - a.length)
            this.reg_titles = new RegExp(vnwm_sort.map(rn1 => SturnR(rn1)).join("|"), "ig")
            return this.reg_titles
        }
        this.getLinks = () => this.rj_links || ""
        this.setlinks = (content = "") => {
            if (this.reg_titles.test(content)) {
                const vnwm_stgn_titles = content.match(this.reg_titles)
                const diwr_stgn_titles = {}
                vnwm_stgn_titles.forEach(rn3 => {
                    diwr_stgn_titles[rn3] = rn3
                })
                this.rj_links = `\n\n${rfrf('stgn')} links\n` + Object.keys(diwr_stgn_titles).map(rn1 => `* [${rn1}](#${mkHtmlId(rn1)})`).join("\n")
            }
            this.content = content + this.getLinks()
            return this
        }
        this.setReg = (vnwm_titles) => {
            this.toReg(vnwm_titles)
            return this
        }
        this.addlinks = (content, vnwm_titles) => {
            return this.setReg(vnwm_titles).setlinks(content).content
        }
    }
}
module.exports = Gnqg