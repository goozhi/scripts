const path = require('path')
const fs = require('fs')
const rjqtOpr = require("../oprs/rjqtOpr-ce.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require('../zjzj_outputText.js')
const nikc_tu_func_test = path.resolve('test/tu_func_test')
hd_rjqt_tum(nikc_tu_func_test)
const diwr_test_nikc = {
    test: {
        tu_func_test: {
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
            _: ['tu', 'func']
            , lastParams: `
            (rj)=>{
                return 'cd qoqi.'
            }
-fdmj-
            ${path.join(nikc_tu_func_test, 'test_4/test1.md')}
            ${path.join(nikc_tu_func_test, 'test_4/test2.md')}
            `
        },
        outputs: {}
    }).catch(err => { throw err })
    const rj_1 = fs.readFileSync(path.join(nikc_tu_func_test, 'test_4/test1.md')).toString()
        + fs.readFileSync(path.join(nikc_tu_func_test, 'test_4/test2.md')).toString()

    if (!/cd qoqi\.cd qoqi/.test(rj_1)) {
        console.error(`csrf-err: tu func msox 2`)
    }
    if(!fs.existsSync(path.join(nikc_tu_func_test, 'test_4/test1.md.bak'))){
        console.error('csrf-err: tu func zhqh ud hmpc bmee yb rjqt')
    }

    let outputs_2 = await rjqtOpr({
        user_params: {
            _: ['tu', 'func']
            , lastParams: `
            (rj)=>{
                if(/cd qoqi/.test(rj)){
                    return false
                }
                return 'cd qoqi 2'
            }
-fdmj-
            ${path.join(nikc_tu_func_test, 'test_4/test1.md')}
            ${path.join(nikc_tu_func_test, 'test_4/test2.md')}
            ${path.join(nikc_tu_func_test, 'test_5/test_6/test2.md')}
            `
        },
        outputs: {}
    }).catch(err => { throw err })
    const rj_2 = fs.readFileSync(path.join(nikc_tu_func_test, 'test_4/test1.md')).toString()
        + fs.readFileSync(path.join(nikc_tu_func_test, 'test_4/test2.md')).toString()
        + fs.readFileSync(path.join(nikc_tu_func_test, 'test_5/test_6/test2.md')).toString()
    if (!/cd qoqi\.cd qoqi\.cd qoqi 2/.test(rj_2)) {
        console.error(`csrf-err: tu func msox 1`)
    }

    zjzj_outputText(outputs_1, { zkrs: "func-outputs_1" })
    zjzj_outputText(outputs_2, { zkrs: "func-outputs_2" })
}
