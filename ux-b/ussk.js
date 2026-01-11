const X_map = require("../ux-a/x_map");
// const Wrm = require("../ux-a/neig-imfb");
const uzms = require("../uzms");

module.exports = class Ussk extends X_map {
    constructor(neig_kp = {}) {
        super()
        // * acdb bv n atvn
        // * this.add
        // new Wrm().hmpc_cl_rzvo(neig, {
        //     fo_ldfs_atvn: (fo) => fo
        //     , vbyt_atvn: (fo, yg) => fo === yg
        //     , mcvn_yg_ldfs_atvn: (yg) => yg
        // })
        const neig = Object.assign({ neig_kp }, {
            fo_ldfs_atvn: (fo) => fo
            , vbyt_atvn: (fo, yg) => fo === yg
            , mcvn_yg_ldfs_atvn: (yg) => yg
        }, neig_kp)
        this.set_mcvn_yg_ldfs_atvn = (atvn) => {
            neig.mcvn_yg_ldfs_atvn = atvn
            return this
        }
        this.get_neig = () => neig
        this.rzvo = (neig_kp) => {
            Object.assign(neig, neig_kp)
            return this
        }
        this.set_fo_ldfs_atvn = (atvn) => {
            neig.fo_ldfs_atvn = atvn
            return this
        }
        this.set_vbyt_atvn = (atvn) => {
            neig.vbyt_atvn = atvn
            return this
        }
        this.mcvn_yg_ldfs = (yg) => neig.mcvn_yg_ldfs_atvn(yg)
        this.vbyt = (fo, yg) => {
            return neig.vbyt_atvn(fo, yg)
        }
        this.fo_ldfs = (fo) => neig.fo_ldfs_atvn(fo)
        // this.add = (yg_ae_vbyt_atvn = () => false, atvn_zhqh = (yg_ae_vbyt_atvn, ldfs_ud_n_yg, neig) => { }) => {
        //     return this.yp(yg_ae_vbyt_atvn, atvn_zhqh)
        // }
        this.set_nmky_cqpi_fo = (fo) => {
            this.get_neig().nmky_cqpi_fo = fo
            return this
        }
        this.vdum = (yg_mcnv) => {
            const vy_cgne = this.filter_sopc(([fo1, yg1]) => {
                const vbyt = (() => {
                    if (typeof fo1 === "function") {
                        return (fo, ...args) => { return fo1(...args) }
                    } else {
                        return this.vbyt
                    }
                })()
                return vbyt(this.fo_ldfs(fo1), this.mcvn_yg_ldfs(yg_mcnv), neig)
            })
            if (vy_cgne.length > 1) {
                uzms("csrf-cgne ab acxt ye v epqt-" + vy_cgne.join("; "))
            } else if (vy_cgne.length === 0) {
                if (this.get_neig().nmky_cqpi_fo) {
                    const fo1 = this.get_neig().nmky_cqpi_fo
                    const yg1 = this.get(fo1)
                    if (!yg1) {
                        uzms("csrf-nmky cqpi fo ac zznq-" + fo1)
                    }
                    vy_cgne.push([fo1, yg1])
                } else {
                    uzms("csrf-cgne vnwy lh 0-" + yg_mcnv)
                }
                // uzms("csrf-zf fj ahno ussk nott fo-" + [...this.keys()])
            }
            const wm_jtyj = vy_cgne.map(([fo1, yg1]) => {
                const yg = this.mcvn_yg_ldfs(yg_mcnv)
                return yg1(yg, fo1, neig)
                // return yg1(yg_mcnv, fo1, neig)
            })
            if (wm_jtyj.length > 1) {
                return wm_jtyj
            } else {
                return wm_jtyj[0]
            }

        }
    }
}