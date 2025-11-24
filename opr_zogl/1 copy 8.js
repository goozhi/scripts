const path = require('path')
const fs = require('fs')
const rjqtOpr = require("../oprs/rjqtOpr-ce.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require('../zjzj_outputText.js')
const nikc_tu_pk_test = path.resolve('test/tu_pk_test')
hd_rjqt_tum(nikc_tu_pk_test)
const diwr_test_nikc = {
    test: {
        tu_pk_test: {
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
                    'test-9.md': "",
                    'tesT-10.md': "",
                }

            }

        }
    }
}
ngnc_nikc_fywy_diwr(diwr_test_nikc, path.resolve())


module.exports = async () => {
    let outputs_1 = await rjqtOpr({
        user_params: {
            _: ['tu', 'pk', path.join(nikc_tu_pk_test, "test_4")]
        },
        outputs: {}
    }).catch(err => { throw err })
    if (fs.existsSync(path.join(nikc_tu_pk_test, "test_4"))) {
        console.error(`csrf-err: outputs_1 cfep msox`)
    }

    let outputs_2 = await rjqtOpr({
        user_params: {
            _: ['tu', 'pk', path.join(nikc_tu_pk_test, "test_5/test1.md")
                , path.join(nikc_tu_pk_test, "test_5/test.txt")
                , path.join(nikc_tu_pk_test, "test_5/test2.md")
                , path.join(nikc_tu_pk_test, "test_5/test3.md")]
        },
        outputs: {}
    }).catch(err => { throw err })
    if (fs.existsSync(path.join(nikc_tu_pk_test, "test_5/test2.md")) || fs.existsSync(path.join(nikc_tu_pk_test, "test_5/test3.md"))) {
        console.error(`csrf-err: outputs_2 cfep msox`)
    }
    let outputs_3 = await rjqtOpr({
        user_params: {
            _: ['tu', 'pk']
            , lastParams: `${path.join(nikc_tu_pk_test)}\n${path.join(nikc_tu_pk_test, "test_5/test_6")}`
        },
        outputs: {}
    }).catch(err => { throw err })
    if (fs.existsSync(path.join(nikc_tu_pk_test))) {
        console.error(`csrf-err: outputs_3 cfep msox`)
    }
    let outputs_4 = await rjqtOpr({
        user_params: {
            _: ['tu', 'pk', path.join(nikc_tu_pk_test)]
            , lastParams: `${path.join(nikc_tu_pk_test)}`
        },
        outputs: {}
    }).catch(err => { throw err })
    if ((outputs_4.outputText).includes(path.join(nikc_tu_pk_test))) {
        console.error(`csrf-err: outputs_4 cfep msox`)
    }
    zjzj_outputText(outputs_1, { zkrs: "cfep-outputs_1" })
    zjzj_outputText(outputs_2, { zkrs: "cfep-outputs_2" })
    zjzj_outputText(outputs_3, { zkrs: "cfep-outputs_3" })
    zjzj_outputText(outputs_4, { zkrs: "cfep-outputs_4" })
}
