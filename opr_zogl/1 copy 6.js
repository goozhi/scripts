const path = require('path')
const fs = require('fs')
const rjqtOpr = require("../oprs/rjqtOpr.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require('../zjzj_outputText.js')
const nikc_tu_filter_test = path.resolve('test/tu_filter_test')
hd_rjqt_tum(nikc_tu_filter_test)
const diwr_test_nikc = {
    test: {
        tu_filter_test: {
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

        }
    }
}
ngnc_nikc_fywy_diwr(diwr_test_nikc, path.resolve())


module.exports = async () => {
    let outputs_1 = await rjqtOpr({
        user_params: {
            _: ['tu', 'filter', path.join(nikc_tu_filter_test)]
            , lastParams: '-bqeo'
            , wfqq: true
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!/test\.txt-bqeo/.test(outputs_1.outputText)) {
        console.error(`csrf-err: outputs_1 filter msox`)
    }

    let outputs_2 = await rjqtOpr({
        user_params: {
            _: ['tu', 'filter', path.join(nikc_tu_filter_test)]
            , r: ['-\\wqeo']
            , lastParams: ``
            , wfqq: true
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!/txt-bqeo/.test(outputs_2.outputText)) {
        console.error(`csrf-err: outputs_2 filter msox`)
    }
    let outputs_3 = await rjqtOpr({
        user_params: {
            _: ['tu', 'filter', path.join(nikc_tu_filter_test)]
            , r: ['test6-\\wqeo']
            , wfqq: true
            , lastParams: ``
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!/test6/.test(outputs_3.outputText)) {
        console.error(`csrf-err: outputs_3 filter msox`)
    }
    let outputs_4 = await rjqtOpr({
        user_params: {
            _: ['tu', 'filter', path.join(nikc_tu_filter_test)]
            , wfqq: true
            , r: ['-bqeo']
            , lastParams: `test6`
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!/test6/.test(outputs_4.outputText)) {
        console.error(`csrf-err: outputs_4 filter msox`)
    }
    zjzj_outputText(outputs_1, { zkrs: "filter-outputs_1" })
    zjzj_outputText(outputs_2, { zkrs: "filter-outputs_2" })
    zjzj_outputText(outputs_3, { zkrs: "filter-outputs_3" })
    zjzj_outputText(outputs_4, { zkrs: "filter-outputs_4" })
}
