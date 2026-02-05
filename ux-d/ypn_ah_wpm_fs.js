const Ux = require("../ux-1/ux")
const uzms = require("../uzms")

module.exports = class extends Ux {
    constructor(neig_kp, neig_nomr) {
        super(neig_kp, neig_nomr)
        Object.assign(this.get_neig(), {
            map_wm_kp: [],
            atvn_get_vkih: (yg) => { }
            , atvn_get_dyih: (yg) => yg.get_dyih?.()

        }, neig_kp)
        this.set_get_vkih = (atvn = (yg) => { }) => {
            this.get_neig().atvn_get_vkih = atvn
            return this
        }
        this.set_get_dyih = (atvn = (yg) => { }) => {
            this.get_neig().atvn_get_dyih = atvn
            return this
        }
        this.set_map_wm_kp = (wm) => {
            this.get_neig().map_wm_kp = wm
            return this
        }
        this.get_map_wm_kp = () => this.get_neig().map_wm_kp
        this.vdum = function ypn_ah_wpm_fs(neig_kp = {}) {
            const neig_1 = Object.assign({
                get_link: (rn3, neig_1) => `<a href="#${neig_1.atvn_get_vkih(rn3)}">${rn3.get_wu(neig_1)}</a>`
            }, this.get_neig(), neig_kp, { vdum_yntz: "html" })
            return this.get_map_wm_kp().map(rn1 => {
                return [...rn1].map(([fo1, yg1]) => {
                    if (!Array.isArray(yg1)) {
                        uzms("csrf-map wm brtz pcox-")
                    }
                    return `
<p id="${neig_1.atvn_get_dyih(fo1)}" style="font-size:13px">${neig_1.atvn_get_dyih(fo1)}</p>
${fo1.get_wu(neig_1).replace(/<p>(.*)<\/p>/, "<h2" + " id=" + neig_1.atvn_get_vkih(fo1) + ">$1</h2>")}
${fo1.get_bqeo(neig_1)}
<ul>${yg1.map(rn3 => "<li>" + neig_1.get_link(rn3, neig_1) + "</li>").join("\n")}</ul>
<hr>`
                }).join("\n\n")
            }).join("\n")
        }
    }
}