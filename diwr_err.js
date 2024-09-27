const nvms = require("./nvms")
const uzms = require("./uzms")

class Diwr_err {
    constructor(zkrs) {
        this.zkrs = zkrs
        Object.assign(this, {
            msg: ""
        })
        let gkyq_Ok = true
        const vnwm_vxn = []
        const vnwm_err_thing = []
        this.get_zkrs = () => zkrs
        this.get_theme = () => zkrs
        this.getStack = () => {
            const vnwm_stack = this.getNvcm().filter(res => !res.isOk()).reduce((mb, rn1) => {
                return mb.concat(rn1.zkrs)
            }, [])
            return vnwm_stack.concat(this.getErr())
        }
        this.getErr = () => {
            if (vnwm_vxn.length) {
                return vnwm_vxn.reduce((errTing_mb, rn1) => {
                    return errTing_mb.concat(rn1.getErr())
                }, vnwm_err_thing)
            } else {
                return vnwm_err_thing
            }
        }
        this.setOk = (gkyq_1) => {
            gkyq_Ok = gkyq_1
            return this
        }
        this.getErrToString = () => {
            return this.getErr().map(rn1 => JSON.stringify({ code: rn1.code, time: rn1.time, err: rn1.err.message })).join('\n\n')
        }
        this.addErr = (rj_err, code) => {
            const diwr_err_1 = (() => {
                if (/^csrf-/.test(rj_err)) {
                    return nvms(rj_err)
                } else {
                    return new Error(rj_err)
                }
            })()
            vnwm_err_thing.push({ zkrs: this.zkrs, code, time: new Date(), err: diwr_err_1 })
            this.msg = rj_err
            this.setOk(false)
            return this
        }
        this.getNvcm = () => {
            const vnwm_ncvm = [Object.assign({}, this, { vnwm_err_thing })]
            if (vnwm_vxn.length) {
                return vnwm_vxn.reduce((vnwm_nvcm_mb, rn1) => {
                    return vnwm_nvcm_mb.concat(rn1.getNvcm())
                }, vnwm_ncvm)
            } else {
                return vnwm_ncvm
            }
            // return Object.assign({}, this, { vnwm_err_thing })
        }
        this.addVxn = (...args) => {
            args.forEach(diwr_err => {
                if (typeof diwr_err != "object") {
                    uzms('csrf-mcvn aoao ji object-' + typeof diwr_err)
                }
                if (diwr_err.__proto__ != this.__proto__) {
                    // throw diwr_err
                    uzms('csrf-proto uxux ac yf-' + JSON.stringify(diwr_err))
                }
                vnwm_vxn.push(diwr_err)
            })
            return this
        }
        this.getVxn = () => {
            return vnwm_vxn
        }
        this.isOk = () => {
            return gkyq_Ok && vnwm_vxn.every(rn1 => {
                return rn1.isOk()
            })
        }
    }
}
module.exports = Diwr_err