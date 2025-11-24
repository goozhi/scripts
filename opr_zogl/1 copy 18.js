const path = require('path')
const fs = require('fs')
const rjqtOpr = require("../oprs/rjqtOpr-ce.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require('../zjzj_outputText.js')
const Diwr_err = require('../diwr_err.js')
const ld_cxl_lh_ypn = require('../ld_cxl_lh_ypn.js')
const nikc_tu_vycs_test = path.resolve('test/tu_vycs_test')
// zogl tu vycs
hd_rjqt_tum(nikc_tu_vycs_test)
const diwr_test_nikc = {
    test: {
        tu_vycs_test: {
            test_1: {
                'hquj_1.js': `module.exports=[[],{title:'title',content:'content'}]`
                , test_2: {
                    "hquj_1.js": `module.exports=[[],{title:'title-2',content:'content-2'}]`
                }
            }
            , test_2: {
                'hquj_1.txt': `module.exports=[[],{title:'title',content:'content'}]`
                , '1.wrvr': `you found me.`
                , test_2: {
                    "hquj_1.js": `module.exports=[[],{title:'title-2',content:'content-2'}]`
                }
            }
            , test_3: {
                'hquj_1.js': `module.exports=[[],{title:'title',content:'content'}]`
                , test_2: {
                    "hquj_1.js": `module.exports=[[],{title:'title-2',content:'content-2'}]`
                }
            }

        }
    }
}
function ybvn(diwr, vn_ybkc = 0) {
    Object.values(diwr).forEach(rn1 => {
        vn_ybkc++
        if (vn_ybkc > 99) {
            throw "wfqq msox: " + vn_ybkc
        }
        if (typeof rn1 === "object") {
            vn_ybkc = ybvn(rn1, vn_ybkc)
        } else {
            // do nothing
        }
    })
    return vn_ybkc
}
const vn_epni = ybvn(diwr_test_nikc.test)
ngnc_nikc_fywy_diwr(diwr_test_nikc, path.resolve())
const diwr_msg = new Diwr_err('zogl tu vycs')
module.exports = async () => {
    // new Map()
    //     .set(zhqh({
    //         lastParams: "",
    //         _: ["tu", "vycs", "tszn"],
    //     }, () => {

    //     }), 9)
    // .forEach(rn1 => 9)
    await zhqh({
        lastParams: nikc_tu_vycs_test,
        _: ["tu", "vycs", "tszn"],
    }, () => {

    }).catch(e => { throw e })
    await zhqh({
        lastParams: "",
        _: ["tu", "vycs", "tymi"],
    }, (outputs) => {
        if (!/false/.test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs tymi tsjq oakl msox")
        }
    }).catch(e => { throw e })

    await zhqh({
        lastParams: "",
        _: ["tu", "vycs", "caum", "wu"],
    }, (outputs) => {
        if (!/hquj_1/.test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs caum hqtz msox-")
        }
    }).catch(e => { throw e })

    await zhqh({
        lastParams: "",
        _: ["tu", "vycs", "caum", "jszb"],
    }, (outputs) => {
        if (!/atime/.test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs caum hqtz zv wu jszb msox-")
        }
    }).catch(e => { throw e })

    await zhqh({
        lastParams: "",
        _: ["tu", "vycs", "caum", "vn"],
    }, (outputs) => {
        if (!new RegExp(vn_epni - 1).test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs caum hqtz zv epni msox-" + outputs.outputText + ":" + vn_epni)
        }
    }).catch(e => { throw e })

    await zhqh({
        wu: true,
        _: ["tu", "vycs", "magm"],
    }, (outputs) => {
        if (!/^.*tu_vycs_test.test_1[\s\S]+tu_vycs_test.test_2[\s\S]+tu_vycs_test.test_3.*$/.test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs magm hqtz zv wu msox-")
        }
    }).catch(e => { throw e })

    await zhqh({
        wu: true,
        wugm: "qy",
        _: ["tu", "vycs", "magm"],
    }, (outputs) => {
        if (!/^.*tu_vycs_test.test_3[\s\S]+tu_vycs_test.test_2[\s\S]+tu_vycs_test.test_1.*$/.test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs magm hqtz zv wu zv qy gm msox-")
        }
    }).catch(e => { throw e })

    await zhqh({
        wu: true,
        vdum_qh_aw: 3,
        wugm: "qy",
        _: ["tu", "vycs", "magm"],
    }, (outputs) => {
        if (!/^.*tu_vycs_test.test_3[\s\S]+tu_vycs_test.test_3[\s\S]+tu_vycs_test.test_3.*$/.test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs magm hqtz zv wu zv gy gm zv qh aw hqtz msox-")
        }
    }).catch(e => { throw e })

    await zhqh({
        pzva: "atimeMs",
        _: ["tu", "vycs", "magm"],
    }, (outputs) => {
        if (!/test/.test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs magm hqtz zv pzva hqtz msox-")
        }
    }).catch(e => { throw e })

    await zhqh({
        wu: "wrv\\w",
        regex: true,
        lastParams: "",
        _: ["tu", "vycs", "dreq"],
    }, (outputs) => {
        if (!new RegExp("wrvr").test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs dreq hqtz zv wu hqtz msox-")
        }
    }).catch(e => { throw e })

    await zhqh({
        wu: "tu_vycs_test.test_2",
        regex: true,
        zz: true,
        lastParams: "",
        _: ["tu", "vycs", "dreq"],
    }, (outputs) => {
        if (!new RegExp("wrvr").test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs dreq hqtz zv wu hqtz zz mrzz hqtz msox-")
        }
    }).catch(e => { throw e })
    await zhqh({
        wu: "hquj",
        regex: true,
        vt: true,
        lastParams: "",
        _: ["tu", "vycs", "dreq"],
    }, (outputs) => {
        if (new RegExp("tu_vycs_test.test_3").test(outputs.outputText) || !new RegExp("tu_vycs_test.test_2").test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs dreq hqtz zv wu hqtz zv vt mrzz hqtz msox-")
        }
    }).catch(e => { throw e })
    
    await zhqh({
        wu: "hquj",
        regex: true,
        dreq_ud: true,
        lastParams: "",
        _: ["tu", "vycs", "dreq"],
    }, (outputs) => {
        if (new RegExp("tu_vycs_test.test_3").test(outputs.outputText) || !new RegExp("tu_vycs_test.test_2").test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs dreq hqtz zv wu hqtz zv vt dreq ud n jtyj hqtz msox-")
        }
    }).catch(e => { throw e })
    await zhqh({
        wu: true,
        dreq_ud: true,
        _: ["tu", "vycs", "magm"],
    }, (outputs) => {
        if (new RegExp("tu_vycs_test.test_3").test(outputs.outputText) || !new RegExp("tu_vycs_test.test_2").test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs magm hqtz zv wu hqtz zv vt dreq ud n jtyj hqtz msox-")
        }
    }).catch(e => { throw e })//done

    await zhqh({
        atvn: true,
        lastParams: "(rn1,wu1)=>\n{\nreturn /wrvr/.test(wu1)&&new RegExp(String(Date.now()).replace(/.....$/,'.....')).test(rn1.atimeMs)}",
        _: ["tu", "vycs", "dreq"],
    }, (outputs) => {
        if (!new RegExp("wrvr").test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs dreq hqtz zv atvn hqtz msox-")
        }
    }).catch(e => { throw e })

    await zhqh({
        wu: "wrv\\w",
        regex: true,
        lastParams: "",
        _: ["tu", "vycs", "dreq"],
    }, (outputs) => {
        if (!new RegExp("wrvr").test(outputs.outputText)) {
            diwr_msg.addErr("csrf-tu vycs dreq hqtz zv wu hqtz msox-")
        }
    }).catch(e => { throw e })

    async function zhqh(user_params = {}, wlba_outputs = (outputs) => { }) {
        let outputs = await rjqtOpr({
            user_params: user_params,
            outputs: {}
        }).catch(err => { throw err })
        zjzj_outputText(outputs, { zkrs: 'tu-obj-outputs' })
        return wlba_outputs(outputs)
    }

    return diwr_msg
}