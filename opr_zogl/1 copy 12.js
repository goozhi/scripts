const path = require('path')
const fs = require('fs')
const rjqtOpr = require("../oprs/rjqtOpr-ce.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require('../zjzj_outputText.js')
const nvms = require('../nvms.js')
const nikc_tu_run_test = path.resolve('test/tu_run_test')
hd_rjqt_tum(nikc_tu_run_test)
const diwr_test_nikc = {
    test: {
        tu_run_test: {
            "run.js": "console.log(1)",
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
                'readme.md': `wrvr 3 # [Hello Vr](./test_2/readme.md)`
                , test_2: {
                    "readme.md": `# Hello, Vr !`,
                    "wr-vr-2": "wj ac su.",
                    "wrvr-1": {
                        wrvr: 'hello wrvr-1'
                    },
                    "wrvr-2": "hello wrvr-2"
                }
            }
        }
    }
}
ngnc_nikc_fywy_diwr(diwr_test_nikc, path.resolve())


module.exports = async () => {
    let outputs_1 = await rjqtOpr({
        user_params: {
            _: ['tu', 'run', path.join(nikc_tu_run_test, 'run.js')]
            , lastParams: ''
        },
        outputs: {}
    }).catch(err => { throw err })
    // if (!/1/.test(outputs_1.outputText)) {
    //     console.error(nvms(`csrf-tu run_ um ms`))
    // }

    zjzj_outputText(outputs_1, { zkrs: 'run-outputs_1' })
}