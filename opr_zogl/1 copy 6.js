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

            },
            ".test_7": {
                '1': "1-bqeo"
            }
            , "test_8": {
                '1.zip': "1-bqeo"
                ,'1.mp4': "1-bqeo"
                ,'1.mp3': "1-bqeo"
                ,'1.jpg': "1-bqeo"
                ,'1.png': "1-bqeo"
                ,'1.mkv': "1-bqeo"
                ,'1.rar': "1-bqeo"
                ,'1.7z': "1-bqeo"
                ,'1.gz': "1-bqeo"
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
    let outputs_5 = await rjqtOpr({
        user_params: {
            _: ['tu', 'filter', path.join(nikc_tu_filter_test)]
            , wfqq: true
            , r: ['-bqeo']
        },
        outputs: {}
    }).catch(err => { throw err })
    if (/1-bqeo/.test(outputs_5.outputText)) {
        console.error(`csrf-err: outputs_5 filter msox`)
    }
    let outputs_6 = await rjqtOpr({
        user_params: {
            _: ['tu', 'filter', path.join(nikc_tu_filter_test)]
            , wfqq: true
            , 'fj-tnoy': true
            , r: ['-bqeo']
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!/1-bqeo/.test(outputs_6.outputText)) {
        console.error(`csrf-err: outputs_6 filter msox`)
    }
    let outputs_7 = await rjqtOpr({
        user_params: {
            _: ['tu', 'filter', path.join(nikc_tu_filter_test)]
            , wfqq: true
            , r: ['-bqeo']
        },
        outputs: {}
    }).catch(err => { throw err })
    if (/test_8/.test(outputs_7.outputText)) {
        console.error(`csrf-err: outputs_7 filter msox`)
    }
    zjzj_outputText(outputs_1, { zkrs: "filter-outputs_1" })
    zjzj_outputText(outputs_2, { zkrs: "filter-outputs_2" })
    zjzj_outputText(outputs_3, { zkrs: "filter-outputs_3" })
    zjzj_outputText(outputs_4, { zkrs: "filter-outputs_4" })
    zjzj_outputText(outputs_5, { zkrs: "filter-outputs_5" })
    zjzj_outputText(outputs_6, { zkrs: "filter-outputs_6" })
    zjzj_outputText(outputs_7, { zkrs: "filter-outputs_7" })
}
