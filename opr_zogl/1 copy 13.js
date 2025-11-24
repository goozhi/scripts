const path = require('path')
const fs = require('fs')
const rjqtOpr = require("../oprs/rjqtOpr-ce.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require('../zjzj_outputText.js')
const nikc_tu_size_test = path.resolve('test/tu_size_test')
hd_rjqt_tum(nikc_tu_size_test)
const diwr_test_nikc = {
    test: {
        tu_size_test: {
            test_1: {
                'readme.md': `# [Hello Vr](./test_2/readme.md)`
                , test_2: {
                    "readme.md": `# Hello, Vr !`
                }
            }
            , test_2: {
                'readme.md': `# [Hello Vr](./test_2/readme.md)`
                , '1.wrvr': `you found me.`
                , test_2: {
                    "readme.md": `# Hello, Vr !`
                }
            }
            , test_3: {
                'readme.md': `# [Hello Vr](./test_2/readme.md)`
                , test_2: {
                    "readme.md": `# Hello, Vr !`
                }
            }

        }
    }
}
ngnc_nikc_fywy_diwr(diwr_test_nikc, path.resolve())


module.exports = async () => {
    let outputs_1 = await rjqtOpr({
        user_params: {
            _: ['tu', 'cxmi', 'size']
            , lastParams: [path.join(nikc_tu_size_test, 'test_1/readme.md'), path.join(nikc_tu_size_test, 'test_2/readme.md')].join('\n')
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!/\d\d[\s\S]+\d\d/.test(outputs_1.outputText)) {
        console.error('csrf-tu size msox 1')
    }

    let outputs_2 = await rjqtOpr({
        user_params: {
            _: ['tu', 'cxmi', 'size']
            , lastParams: path.join(nikc_tu_size_test)
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!/[3-9]\d/.test(outputs_2.outputText)) {
        console.error('csrf-tu size msox 2')
    }
    zjzj_outputText(outputs_1, { zkrs: 'rr-outputs_1' })
    zjzj_outputText(outputs_2, { zkrs: 'rr-outputs_2' })

}