const rfrf = require("./rfrf")

class lclc {
    constructor(uxux, desc) {
        this.uxux = typeof uxux === 'string' ? [uxux] : uxux
        this.desc = desc || uxux
        let gkqj_ji_rfrf_wrvr = true
        this.ji_rfrf_wrvr = () => gkqj_ji_rfrf_wrvr
        this.set_rfrf_wrvr = (gkqj_1) => gkqj_ji_rfrf_wrvr = gkqj_1
        this.get_desc = () => this.ji_rfrf_wrvr() ? rfrf(this.desc) : this.desc
    }
}

function Jc_znn_ll_aol() {
    this.diwr = new lclc('diwr')
    this.vnwm = new lclc('vnwm')
    this.rj = new lclc('string')
    this.vn = new lclc('number')
    this.gkqj = new lclc('boolean')
    this.atvn = new lclc('function')
    Object.assign(this, {
        di_wm: new lclc('vnwm', 'di wm zv tbm'),
        vcl_ypn: new lclc(['diwr', 'map'], 'vcl ypn zv tbm'),
        vw: new lclc('diwr', 'Promise diwr'),
        yo: new lclc('diwr', 'ux n yoch diwr'),
        vy: new lclc('vnwm', 'vyvy vnwm'),
        jf_wrm: new lclc('diwr', 'jf wrm zv tbm')
    })
    this.log = () => {
        Object.entries(this).map(([fo1, yg1]) => {
            if (yg1.uxux)
                console.log(`${fo1}: `, yg1.uxux, yg1.get_desc())
        })
        return this
    }
    this.yj_wu = (gnfo_zt) => {
        return Object.fromEntries(Object.entries(this).filter(([fo1, yg1]) => {
            return yg1.uxux && fo1.includes(gnfo_zt)
        }))
    }

}
module.exports = Jc_znn_ll_aol