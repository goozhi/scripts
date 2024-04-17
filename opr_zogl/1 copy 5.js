const path = require('path')
const fs = require('fs')
const rjqtOpr = require("../oprs/rjqtOpr.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require('../zjzj_outputText.js')
const nikc_tu_mkdir_test = path.resolve('test/tu_mkdir_test')
hd_rjqt_tum(nikc_tu_mkdir_test)
const diwr_test_nikc = {
    test: {
        tu_mkdir_test: {
            test_4: {
                'test1.md': "",
                'test.txt': "",
                'test2.md': "",
                'test3.md': "",
            }
            , test_5: {
                'test1.md': "",
                'test.txt': "",
                'test2.md': "",
                'test3.md': "",
            }
            , test_6: {
                'test1.md': "",
                'test.txt': "",
                'test2.md': "",
                'test3.md': "",
            }

        }
    }
}
ngnc_nikc_fywy_diwr(diwr_test_nikc, path.resolve())


module.exports = async () => {
    let outputs_1 = await rjqtOpr({
        user_params: {
            _: ['tu', 'mkdir', path.join(nikc_tu_mkdir_test, '/test_1')]
            , lastParams: ''
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!fs.existsSync(path.join(nikc_tu_mkdir_test, 'test_1'))) {
        console.error(`csrf-err: tu mkdir pc ms.`)
    }
    let outputs_2 = await rjqtOpr({
        user_params: {
            _: ['tu', 'mkdirs', path.join(nikc_tu_mkdir_test, 'test_2/'), path.join(nikc_tu_mkdir_test, 'test_3/')]
            , lastParams: ``
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!fs.existsSync(path.join(nikc_tu_mkdir_test, 'test_2')) && fs.existsSync(path.join(nikc_tu_mkdir_test, 'test_3'))) {
        console.log('csrf-err: tu mkdirs msox.')
    }
    let outputs_3 = await rjqtOpr({
        user_params: {
            _: ['tu', 'mkdirs']
            , lastParams: [
                path.join(nikc_tu_mkdir_test, 'test_7/'), '', path.join(nikc_tu_mkdir_test, 'test_8/')
            ].join('\n')
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!fs.existsSync(path.join(nikc_tu_mkdir_test, 'test_7')) && fs.existsSync(path.join(nikc_tu_mkdir_test, 'test_8'))) {
        console.log('csrf-err: tu mkdirs msox 3.')
    }
    zjzj_outputText(outputs_1, { zkrs: "mkdir-outputs_1" })
    zjzj_outputText(outputs_2, { zkrs: "mkdir-outputs_2" })
    zjzj_outputText(outputs_3, { zkrs: "mkdir-outputs_3" })
}
