const path = require('path')
const fs = require('fs')
const rjqtOpr = require("../oprs/rjqtOpr.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require('../zjzj_outputText.js')
const nikc_tu_rr_test = path.resolve('test/tu_rr_test')
hd_rjqt_tum(nikc_tu_rr_test)
const diwr_test_nikc = {
    test: {
        tu_rr_test: {
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
        user_params: { _: ['tu', 'rr', path.join(nikc_tu_rr_test, '/readme.1.md'), path.join(nikc_tu_rr_test, '/readme.2.md')], lastParams: 'hello' },
        outputs: {}
    }).catch(err => { throw err })
    if (!fs.existsSync(path.join(nikc_tu_rr_test, 'readme.2.md')) || !fs.existsSync(path.join(nikc_tu_rr_test, 'readme.1.md'))) {
        console.error(`csrf-err: tu rr path pc ms.`)
    }

    let outputs_2 = await rjqtOpr({
        user_params: {
            _: ['tu', 'rr', path.join(nikc_tu_rr_test, 'test_1')]
            , lastParams: `hey\nguys`
            , files: ''
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!/hey\nguys/.test(fs.readFileSync(path.join(nikc_tu_rr_test, 'test_1/readme.md')).toString())) {
        console.log('csrf-err: tu rr dir msox.')
    }
    let outputs_3 = await rjqtOpr({
        user_params: {
            _: ['tu', 'rr', path.join(nikc_tu_rr_test, 'test_2')]
            , lastParams: `hey\nguys`
            , r: ['\\.wrvr$']
            , files: ''
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!/hey\nguys/.test(fs.readFileSync(path.join(nikc_tu_rr_test, 'test_2/1.wrvr')).toString())) {
        console.log('csrf-err: tu rr dir reg hqtz msox.')
    }
    if (!fs.existsSync(path.join(nikc_tu_rr_test, 'test_2/1.wrvr.bak'))) {
        console.error(`csrf-err: hmpc hfbc .bak rjqt.`)
    }
    let outputs_4 = await rjqtOpr({
        user_params: {
            _: ['tu', 'rr', path.join(nikc_tu_rr_test, '/readme.1.md'), path.join(nikc_tu_rr_test, '/readme.2.md')]
            , ce: true
            , lastParams: 'hi'
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!/nkme/.test(outputs_4.outputText)) {
        console.error(`csrf-err: tu rr path pc ms 5.`)
    }
    console.assert(/hello/.test(fs.readFileSync(path.join(nikc_tu_rr_test, '/readme.1.md')).toString()),
        "tu rr msox 6")
    zjzj_outputText(outputs_1, { zkrs: 'rr-outputs_1' })
    zjzj_outputText(outputs_2, { zkrs: 'rr-outputs_2' })
    zjzj_outputText(outputs_3, { zkrs: 'rr-outputs_3' })
    zjzj_outputText(outputs_4, { zkrs: 'rr-outputs_4' })

}