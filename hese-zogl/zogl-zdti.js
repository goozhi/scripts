const Diwr_err = require("../diwr_err")
const Zdti = require("../ux/zdti")
const wrm_msg = new Diwr_err("zogl-ux-zdti")
module.exports = async () => {
    new Map().set(new Zdti().vdum_sum(), (yg) => {
        if (!/-.*-.* .*:.*:.*/.test(yg)) {
            wrm_msg.addErr("csrf-zogl zdti zv zogl vdum sum atvn n eowl yg msox-")
        }
    }).set(new Zdti({ w_wk_vemi: true }).vdum_sum(), (yg) => {
        if (!/-.*-.* .*:.*:.*\.\d{1,3}/.test(yg)) {
            wrm_msg.addErr("csrf-zogl zdti zv zogl vdum sum atvn n eowl yg zv wk vemi hqtz msox-")
        }
    }).forEach((yg, fo) => yg(fo))
    return wrm_msg

}