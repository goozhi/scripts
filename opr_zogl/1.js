// zogl tu ls
const path = require('path')
const rjqtOpr = require("../oprs/rjqtOpr.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const nikc_tu_ls_test = path.resolve('test/tu_ls_test')
hd_rjqt_tum(nikc_tu_ls_test)
const diwr_test_nikc = {
    test: {
        tu_ls_test: {
            test_1: {
                'readme.md': `# [Hello Vr](./test_2/readme.md)`
                , test_2: {
                    "readme.md": `# Hello, Vr !`
                }
            }
            , test_2: {
                'readme.md': `# [Hello Vr](./test_2/readme.md)`
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
        user_params: { _: ['tu', 'ls'], lastParams: '' },
        outputs: {}
    }).catch(err => { throw err })
    console.assert(/\/|\\/.test(outputs_1.outputText), 'tu ls tsjq pc ms: ' + outputs_1.outputText)

    let outputs_2 = await rjqtOpr({
        user_params: { _: ['tu', 'ls', nikc_tu_ls_test] },
        outputs: {}
    }).catch(err => { throw err })
    console.assert(/test_1\ntest_2\ntest_3/.test(outputs_2.outputText), 'tu ls [path] msox: ' + outputs_2.outputText)

}