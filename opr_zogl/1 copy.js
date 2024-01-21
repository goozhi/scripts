// zogl tu rjm
const rjqtOpr = require("../oprs/rjqtOpr.js")
const path = require('path')
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const nikc_tu_rjm_test = path.resolve('test/tu_rjm_test')
hd_rjqt_tum(nikc_tu_rjm_test)
const diwr_test_nikc = {
    test: {
        tu_rjm_test: {
            test_1: 'hello'
            , test_2: 'hello'
            , test_3: 'hello'
            , test_4: {
                test_5: 'hello-5'
            }
        }
    }
}
ngnc_nikc_fywy_diwr(diwr_test_nikc, path.resolve())

module.exports = async () => {
    let outputs_1 = await rjqtOpr({
        user_params: { _: ['tu', 'rjm', path.join(nikc_tu_rjm_test, 'test_3'), path.join(nikc_tu_rjm_test, 'test_2')], lastParams: '' },
        outputs: {}
    }).catch(err => { throw err })
    console.assert(/Hello[\s\S]*hello/i.test(outputs_1.outputText), 'tu rjm tsjq pc ms.')

    let outputs_2 = await rjqtOpr({
        user_params: { _: ['tu', 'rjm', nikc_tu_rjm_test], lastParams: '' },
        outputs: {}
    }).catch(err => { throw err })
    console.assert(/Hello[\s\S]*hello[\s\S]*hello/i.test(outputs_2.outputText), 'tu rjm tsjq pc ms.')

    let outputs_3 = await rjqtOpr({
        user_params: { _: ['tu', 'rjm', nikc_tu_rjm_test], lastParams: '' },
        outputs: {}
    }).catch(err => { throw err })
    console.assert(/Hello[\s\S]*hello[\s\S]*hello/i.test(outputs_2.outputText), 'tu rjm tsjq pc ms.')

}