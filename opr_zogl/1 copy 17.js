const path = require('path')
const fs = require('fs')
const rjqtOpr = require("../oprs/rjqtOpr-ce.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require('../zjzj_outputText.js')
const Diwr_err = require('../diwr_err.js')
const nikc_tu_obj_test = path.resolve('test/tu_obj_test')
hd_rjqt_tum(nikc_tu_obj_test)
const diwr_test_nikc = {
    test: {
        tu_obj_test: {
            test_1: {
                'hquj_1.js': `module.exports=[[],{title:'title',content:'content'}]`
                , test_2: {
                    "hquj_1.js": `module.exports=[[],{title:'title-2',content:'content-2'}]`
                }
            }
            , test_2: {
                'hquj_1.js': `module.exports=[[],{title:'title',content:'content'}]`
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
ngnc_nikc_fywy_diwr(diwr_test_nikc, path.resolve())
const diwr_msg = new Diwr_err('zogl tu obj')
const yxna_bnll_zogl = path.join(nikc_tu_obj_test, 'test_1/hquj_1.js')
module.exports = async () => {
    await zhqh({
        _: ['tu', 'obj']
        , set: yxna_bnll_zogl
    }, (outputs) => {
        if (!/title/.test(outputs.outputText)) {
            diwr_msg.addErr('csrf-tu obj msox 1')
        }
    })

    await zhqh({
        _: ['tu', 'obj']
        , vkih: yxna_bnll_zogl
        , get: 1
    }, (outputs) => {
        if (!/title/.test(outputs.outputText)) {
            diwr_msg.addErr('csrf-tu obj msox 2')
        }
    }).catch(err => { throw err })

    const vn_cd_fdne = await zhqh({
        _: ['tu', 'obj']
        , vkih: yxna_bnll_zogl
        , fdne: true
    }, (outputs) => {
        return outputs.outputText.match(/(\d+).*title"/)?.[1]
    }).catch(err => { throw err })

    await zhqh({
        _: ['tu', 'obj']
        , ls: 'all'
    }, (outputs) => {
        if (!/title/.test(outputs.outputText)) {
            diwr_msg.addErr('csrf-tu obj ls tsjq pc ms-' + outputs.outputText)
        }
    })

    await zhqh({
        _: ['tu', 'obj']
        , vkih: Number(vn_cd_fdne)
        , set: 'content'
        , lastParams: 'the second content'
    })
    await zhqh({
        _: ['tu', 'obj']
        , vkih: yxna_bnll_zogl
        , rr: 'module'
    }, (outputs) => {
        if (!/second content/.test(fs.readFileSync(yxna_bnll_zogl).toString())) {
            diwr_msg.addErr('csrf-tu obj rr hqtz nkyc-' + outputs.outputText)
        }
    }).catch(err => { throw err })

    let yxna_vtn = path.join(nikc_tu_obj_test, "test_1/test_2/hquj_1.js")
    
    await zhqh({
        _: ['tu', "obj"]
        , vtn: yxna_vtn
    }, (outputs) => {
        if (!/content-2$/.test(outputs.outputText)) {
            diwr_msg.addErr('csrf-tu obj n vtn tsjq msox-' + outputs.outputText)
        }
        if (!outputs.outputText.includes(yxna_vtn)) {
            diwr_msg.addErr('csrf-tu obj n vtn tsjq nrap di yxna n lclc-' + outputs.outputText)
        }
    })


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