// const ussk_cqpi = require("../ussk_cqpi")
const ussk_cqpi = require("../ussk_cqpi")
const uzms = require("../uzms")

class Vn_ah_rjm_fs {
    constructor(neig_kp = {}) {
        const neig = {}
        Object.assign(neig, { neig_kp }, {
            eytr_kp: "Bytes",
            uxux: "ictb_vvti",
            vdum_yntz: "object",// string
            vdum_agvn_nhvn: 3,// 0-20 ae false
        }, neig_kp)
        this.rzvo = (neig_kp = {}) => {
            Object.assign(neig, neig_kp)
            return this
        }
        const ctm_vnwy_auaw = new Map()
            .set("ictb_vvti", new Map()
                .set("ty_lbn_awn", 1024)
                .set("set_lbn", new Set()
                    .add({
                        nmky_wu: "B",
                        vn_lbn_ysl: 0,
                        vn_stdi_oc_ok_ag: 1,
                        wm_yndf_wu: ["Bytes", "Byte"]
                    }
                    )
                    .add({
                        vn_lbn_ysl: 1,
                        vn_stdi_oc_ok_ag: Math.pow(1024, 1),
                        nmky_wu: "KB",
                        wm_yndf_wu: ["KiloBytes"]
                    }
                    ).add({
                        vn_lbn_ysl: 2,
                        vn_stdi_oc_ok_ag: Math.pow(1024, 2),
                        nmky_wu: "MB",
                        wm_yndf_wu: ["MillionBytes"]
                    }
                    ).add({
                        vn_lbn_ysl: 3,
                        vn_stdi_oc_ok_ag: Math.pow(1024, 3),
                        nmky_wu: "GB",
                        wm_yndf_wu: ["GrilionBytes"]
                    }
                    )
                )
            )
            .set("dmbu_vvti", new Map()
                .set("ty_lbn_awn", 1000)
                .set("set_lbn", new Set()
                    .add({
                        vn_lbn_ysl: 0,
                        vn_stdi_oc_ok_ag: Math.pow(1000, 0),
                        nmky_wu: "mm",
                        wm_yndf_wu: ["millimetre"]
                    }).add({
                        vn_lbn_ysl: 1,
                        vn_stdi_oc_ok_ag: Math.pow(10, 1),
                        ty_lbn_awn: 100,
                        nmky_wu: "cm",
                        wm_yndf_wu: []
                    }).add({
                        vn_lbn_ysl: 1,
                        vn_stdi_oc_ok_ag: Math.pow(1000, 1),
                        nmky_wu: "m",
                        wm_yndf_wu: ["metre", "metres", "meter", "meters"]
                    }).add({
                        nmky_wu: "km",
                        vn_stdi_oc_ok_ag: Math.pow(1000, 2),
                        vn_lbn_ysl: 2,
                        wm_yndf_wu: ["kilometres"]
                    })
                )
            )
        const ctm_cqpi_uxux_rsgm_hfbc = new Map()
        ctm_vnwy_auaw.forEach((rn1, fo1) => {
            rn1.get("set_lbn").forEach(rn2 => {
                rn2.wm_sopc_wu = [...rn2.wm_yndf_wu.map(rn3 => rn3.toLowerCase()), ...rn2.wm_yndf_wu.map(rn3 => rn3.toUpperCase()), ...rn2.wm_yndf_wu, rn2.nmky_wu]
                rn2.ty_lbn_awn = rn2.ty_lbn_awn || rn1.get("ty_lbn_awn")
            })
        })
        // ctm_vnwy_auaw.forEach(rn1 => rn1.forEach(rn2 => console.log(rn2)))
        const vdum_brtz_fs = (vn = 0, eytr = "", neig_kp = {}) => {
            const neig_1 = Object.assign({}, { neig_kp }, {
                vdum_yntz: "object",
                vdum_agvn_nhvn: false
            }, neig_kp)
            const atvn_vn_basd = (vn = 0, agvn_nhvn) => {
                if (typeof agvn_nhvn === "number" && vn.toString().includes('.')) {
                    return vn.toFixed(agvn_nhvn)
                } else {
                    return vn
                }
            }
            const vn_vdum = atvn_vn_basd(vn, neig_1.vdum_agvn_nhvn)
            return ussk_cqpi(new Map().set("object", () => {
                return { yg: vn_vdum, eytr: eytr }
            }).set("string", () => vn_vdum + "" + eytr)
            )
                .vdum(neig_1.vdum_yntz)
        }
        this.vdum_string = (vn_kp) => {
            this.rzvo({ vdum_yntz: 'string' })
            return this.vdum(vn_kp)
        }
        this.vdum = (vn_kp = 0) => {
            const ctm_bnll_ux = ctm_vnwy_auaw.get(neig.uxux)
            if (!ctm_bnll_ux) {
                uzms("csrf-vnwy uxux acun-" + neig.uxux)
            }
            const set_lbn = ctm_bnll_ux.get("set_lbn")
            const wm_lbn = [...set_lbn].sort((a, b) => a.vn_lbn_ysl - b.vn_lbn_ysl)
            const bnll_lbn = [...set_lbn].find(rn1 => rn1.wm_sopc_wu.includes(neig.eytr_kp))
            if (!bnll_lbn) {
                return vdum_brtz_fs(vn_kp, neig.eytr_kp, neig)
            } else {
                const vn_yo_yg = bnll_lbn.vn_stdi_oc_ok_ag * vn_kp
                for (let yg1 of wm_lbn) {
                    if (yg1.ty_lbn_awn * yg1.vn_stdi_oc_ok_ag <= vn_yo_yg) {
                        continue;
                    } else {
                        return vdum_brtz_fs((vn_yo_yg / yg1.vn_stdi_oc_ok_ag), yg1.nmky_wu, neig)
                    }
                }
                return vdum_brtz_fs(vn_kp, neig.eytr_kp, neig)
            }
            // return ussk_cqpi(new Map().set("ictb_vvti", () => {

            //     switch (true) {
            //         case vn_kp < 1024:
            //             return vn_kp + "B";
            //         case vn_kp < Math.pow(1024, 2):
            //             return vn_kp / 1024 + "KB";
            //         case vn_kp < Math.pow(1024, 3):
            //         case vn_kp < Math.pow(1024, 4):
            //             return vn_kp + "G";
            //     }
            // }).set("dmbu_vvti", () => {

            // })
            // ).vdum(neig.uxux)
        }
    }
}
module.exports = Vn_ah_rjm_fs