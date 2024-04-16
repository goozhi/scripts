const path = require('path')
const fs = require('fs')
const rjqtOpr = require("../oprs/rjqtOpr.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require('../zjzj_outputText.js')
const nikc_tu_find_zhvt_zhvt_test = path.resolve('test/tu_find_zhvt_zhvt_test')
hd_rjqt_tum(nikc_tu_find_zhvt_zhvt_test)
const diwr_test_nikc = {
    test: {
        tu_find_zhvt_zhvt_test: {
            test_4: {
                'test1.md': "hello I'm wrvr",
                'test.txt': "hello I'm wrvr",
                'test2.md': "hello I'm wrvr",
                'test3.md': "hello! I'm wrvr",
            }
            , test_5: {
                'test1.md': "hello I'm wrvr",
                'test.txt': "hello I'm wrvr",
                'test2.md': "hello I'm wrvr",
                'test3.md': "hello I'm wrvr",
            }
            , test_6: {
                'test1.md': "hello I'm wrvr",
                'test.txt': "hello I'm wrvr",
                'test2.md': "hello I'm wrvr",
                'test3.md': "hello I'm wrvr",
            }

        }
    }
}
ngnc_nikc_fywy_diwr(diwr_test_nikc, path.resolve())


module.exports = async () => {
    let outputs_1 = await rjqtOpr({
        user_params: {
            _: ['tu', 'find', '/llo\\si/i']
            , lastParams: path.join(nikc_tu_find_zhvt_zhvt_test, '/test_4/test1.md')
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!/1,\s*2/.test(outputs_1.outputText)) {
        console.error(`csrf-err: tu_find_zhvt_zhvt_test msox 1`)
    }

    let outputs_2 = await rjqtOpr({
        user_params: {
            _: ['tu', 'find', '/llo\\si/i']
            , lastParams: [path.join(nikc_tu_find_zhvt_zhvt_test, '/test_4/test1.md')
                , path.join(nikc_tu_find_zhvt_zhvt_test, '/test_4/test2.md')
                , path.join(nikc_tu_find_zhvt_zhvt_test, '/test_4/test3.md')].join('\n')
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!/1,\s*2/.test(outputs_2.outputText)) {
        console.error(`csrf-err: tu_find msox 2`)
    }
    if (/test3\.md.*\n+.*\d/.test(outputs_2.outputText)) {
        console.error(`csrf-err: tu_find msox 3`)
    }

    let outputs_3 = await rjqtOpr({
        user_params: {
            _: ['tu', 'zhvt', '/llo\\si.*/i']
            , lastParams: [path.join(nikc_tu_find_zhvt_zhvt_test, '/test_4/test1.md')
                , path.join(nikc_tu_find_zhvt_zhvt_test, '/test_4/test2.md')
                , path.join(nikc_tu_find_zhvt_zhvt_test, '/test_4/test3.md')].join('\n')
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!/wrvr/.test(outputs_3.outputText)) {
        console.error(`csrf-err: tu zhvt msox 1`)
    }
    if (/test3\.md.*\n+.*wrvr/.test(outputs_3.outputText)) {
        console.error(`csrf-err: tu zhvt msox 2`)
    }

    zjzj_outputText(outputs_1, { zkrs: "rj-cqpi-outputs_1" })
    zjzj_outputText(outputs_2, { zkrs: "rj-cqpi-outputs_2" })
    zjzj_outputText(outputs_3, { zkrs: "rj-cqpi-outputs_3" })
}
