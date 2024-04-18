// zogl tu rjm
const rjqtOpr = require("../oprs/rjqtOpr.js")
const fs = require('fs')
const encoding = require('encoding')
const path = require('path')
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require("../zjzj_outputText.js")
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
    console.assert(/Hello[\s\S]*hello/i.test(outputs_1.outputText), 'tu rjm tsjq mh rjqt hqtz pc ms.')

    let outputs_2 = await rjqtOpr({
        user_params: { _: ['tu', 'rjm', nikc_tu_rjm_test], lastParams: '' },
        outputs: {}
    }).catch(err => { throw err })
    console.assert(/Hello[\s\S]*hello[\s\S]*hello/i.test(outputs_2.outputText), 'tu rjm tsjq rjqt tum hqtz pc ms.')

    let outputs_3 = await rjqtOpr({
        user_params: { _: ['tu', 'rjm', nikc_tu_rjm_test], lastParams: 'test_3' },
        outputs: {}
    }).catch(err => { throw err })
    console.assert(/Hello/i.test(outputs_3.outputText), 'tu rjm tsjq lastParams hqtz pc ms.')

    fs.writeFileSync(path.join(nikc_tu_rjm_test, 'test_4/test-gb2312'), encoding.convert('gb2312测试', 'gb2312', 'utf8'))
    let outputs_4 = await rjqtOpr({
        user_params: {
            _: ['tu', 'rjm', nikc_tu_rjm_test]
            , lastParams: 'test_4/test-gb2312'
            , encoding: 'gb2312'
        },
        outputs: {}
    }).catch(err => { throw err })
    console.assert(/gb2312测试/i.test(outputs_4.outputText), 'tu rjm tsjq na ye encoding hqtz pc ms.')


    zjzj_outputText(outputs_1, { zkrs: 'rjm-outputs_1' })
    zjzj_outputText(outputs_2, { zkrs: 'rjm-outputs_2' })
    zjzj_outputText(outputs_3, { zkrs: 'rjm-outputs_3' })
    zjzj_outputText(outputs_4, { zkrs: 'rjm-outputs_4' })
}