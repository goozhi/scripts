const path = require('path')
const fs = require('fs')
const rjqtOpr = require("../oprs/rjqtOpr.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require('../zjzj_outputText.js')
const nikc_tu_copyto_test = path.resolve('test/tu_copyto_test')
hd_rjqt_tum(nikc_tu_copyto_test)
const diwr_test_nikc = {
    test: {
        tu_copyto_test: {
            test_4: {
                'test1.md': "test1.md-bqeo",
                'test.txt': "test.txt-bqeo",
                'test2.md': "test2.md-bqeo",
                'test3.md': "test3.md-bqeo",
            }
            , test_5: {
                'test1.md': "",
                'test.txt': "",
                'test2.md': "",
                'test3.md': "",
                test_6: {
                    'test1.md': "test6-bqeo",
                    'test.txt': "",
                    'test2.md': "",
                    'test3.md': "",
                }

            }
            , test_7: {
                'test_8': {
                    'test1.md': "test1.md-bqeo"
                },
                'test.txt': "test.txt-bqeo",
                'test2.md': "test2.md-bqeo",
                'test3.md': "test3.md-bqeo",
            }

        }
    }
}
ngnc_nikc_fywy_diwr(diwr_test_nikc, path.resolve())


module.exports = async () => {
    let outputs_1 = await rjqtOpr({
        user_params: {
            _: ['tu', 'copyto', path.join(nikc_tu_copyto_test)]
            , lastParams: `
            ${path.join(nikc_tu_copyto_test, 'test_4/test1.md')}
            ${path.join(nikc_tu_copyto_test, 'test_5/test_6/test2.md')}
            `
        },
        outputs: {}
    }).catch(err => { throw err })

    if (!fs.existsSync(path.join(nikc_tu_copyto_test, 'test1.md'))) {
        console.error('csrf-err: test copyto failed 1')
    }
    if (!fs.existsSync(path.join(nikc_tu_copyto_test, 'test2.md'))) {
        console.error('csrf-err: test copyto failed 2')
    }
    let outputs_2 = await rjqtOpr({
        user_params: {
            _: ['tu', 'copydirto', path.join(nikc_tu_copyto_test, 'test_5')]
            , lastParams: `
            ${path.join(nikc_tu_copyto_test, 'test_4')}
            ${path.join(nikc_tu_copyto_test, '/test_7/')}

            `
        },
        outputs: {}
    }).catch(err => { throw err })

    if (!fs.existsSync(path.join(nikc_tu_copyto_test, 'test_5/test_4'))) {
        console.error('csrf-err: test copyto failed 3')
    }
    if (!fs.existsSync(path.join(nikc_tu_copyto_test, 'test_5/test_6/test2.md'))) {
        console.error('csrf-err: test copyto failed 4')
    }
    if (!fs.existsSync(path.join(nikc_tu_copyto_test, 'test_5/test_7/test_8/test1.md'))) {
        console.error('csrf-err: test copyto failed 5')
    }
    let outputs_3 = await rjqtOpr({
        user_params: {
            _: ['tu', 'copyto', path.join(nikc_tu_copyto_test, '')]
            , lastParams: `
            ${path.join(nikc_tu_copyto_test, 'test_4/test1.md')}
            ${path.join(nikc_tu_copyto_test, 'test_4/test2.md')}
            `
        },
        outputs: {}
    }).catch(err => { throw err })

    if (!/nkme/.test(outputs_3.outputText)) {
        console.error('csrf-err: copyto test nkme')
    }

    let outputs_4 = await rjqtOpr({
        user_params: {
            _: ['tu', 'copydirto', path.join(nikc_tu_copyto_test, '')]
            , lastParams: `
            ${path.join(nikc_tu_copyto_test, 'test_4/')}
            ${path.join(nikc_tu_copyto_test, 'test_5/')}
            ${path.join(nikc_tu_copyto_test, 'test_888/')}
            `
        },
        outputs: {}
    }).catch(err => { throw err })

    if (!/nkme/.test(outputs_3.outputText)) {
        console.error('csrf-err: copyto test nkme')
    }

    zjzj_outputText(outputs_1, { zkrs: "copyto-outputs_1" })
    zjzj_outputText(outputs_2, { zkrs: "copyto-outputs_2" })
    zjzj_outputText(outputs_3, { zkrs: "copyto-outputs_3" })
    zjzj_outputText(outputs_4, { zkrs: "copyto-outputs_4" })
}
