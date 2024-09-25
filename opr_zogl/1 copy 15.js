const path = require('path')
const fs = require('fs')
const Diwr_err = require('../diwr_err.js')
const rjqtOpr = require("../oprs/rjqtOpr.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require('../zjzj_outputText.js')
const fileOpr = require('../oprs/fileOpr.js')
const nikc_fileOpr_test = path.resolve('test/fileOpr_test')
hd_rjqt_tum(nikc_fileOpr_test)
const diwr_test_nikc = {
    test: {
        fileOpr_test: {
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
                'readme.md': `wrvr 3 # [Hello Vr](./test_2/readme.md)`
                , test_2: {
                    "readme.md": `# Hello, Vr !`,
                    "wr-vr-2": "wj ac su.",
                    "wrvr-1": {
                        wrvr: 'hello wrvr-1'
                    },
                    "wrvr-2": "hello wrvr-2"
                }
            }
            , test_4: {
                'test_4-rjqt': "hello",
                test_5: {
                }
            }
            , test_6: {
                'test_6-rjqt': "hello",
                test_7: {
                    'test_7-rjqt': 'test_7-bqeo'
                }
            }
            , test_8: {
                'test_8-rjqt': "hello",
                test_9: {
                    'test_9-rjqt': 'test_7-bqeo'
                }
            }
            , test_10: {
                'test_10-rjqt': "hello",
                test_11: {
                    'test_11-rjqt': 'test_7-bqeo',
                    test_12: {
                        'test_12-rjqt-1': 'hello',
                        'test_12-rjqt-2': 'hello',
                        'test_12-rjqt-3': 'hello',
                        'test_12-rjqt-4': 'hello',
                        'test_12-rjqt-5': 'hello',
                    }
                }
            }

        }
    }
}
ngnc_nikc_fywy_diwr(diwr_test_nikc, path.resolve())

const diwr_msg = new Diwr_err('zogl-fileOpr')
module.exports = async () => {
    async function fileCheck(diwr_1, wlba_1 = (jtyj) => jtyj) {
        const diwr_jtyj_1 = await fileOpr(diwr_1).catch(err => { throw err })
        if (!diwr_jtyj_1.hasOwnProperty('isOk')) {
            diwr_msg.addErr('csrf-nrap isOk mcvn-')
        }
        return wlba_1(diwr_jtyj_1)
    }

    await fileCheck({
        opr: 'writeNewFile',
        path: path.join(nikc_fileOpr_test, 'test_10/test_10-rjqt'),
        content: 'hello 10'
    }, (diwr_jtyj_1) => {
        if (diwr_jtyj_1.isOk) {
            diwr_msg.addErr('csrf-fileOpr write new File msox-')
        }
    })

    await fileCheck({
        opr: 'writeMustExist',
        path: path.join(nikc_fileOpr_test, 'test_10/test_10-rjqt'),
        content: 'hello 10 - cd qi'
    }, (diwr_jtyj_1) => {
        if (!diwr_jtyj_1.isOk) {
            diwr_msg.addErr('csrf-fileOpr write must exist hqtz msox-')
        }
        if (!/cd qi/.test(fs.readFileSync(path.join(nikc_fileOpr_test, 'test_10/test_10-rjqt')).toString())) {
            diwr_msg.addErr('csrf-file Opr write must exist hqtz nkme-')
        }
    })

    await fileCheck(
        {
            opr: 'appendIfExist',
            path: path.join(nikc_fileOpr_test, 'test_10/test_11-rjqt'),
            content: 'hello 11 append'
        }
        , (diwr_jtyj_1) => {
            if (!diwr_jtyj_1.isOk) {
                diwr_msg.addErr('csrf-fileOpr append _if exist msox-')
            }
            if (fs.readFileSync(path.join(nikc_fileOpr_test, 'test_10/test_11-rjqt')).toString() != "hello 11 append") {
                diwr_msg.addErr('csrf-fileOpr append _if exist msox 2-')
            }
        })
    await fileCheck(
        {
            opr: 'appendIfExist',
            path: path.join(nikc_fileOpr_test, 'test_10/test_11-rjqt'),
            content: 'hello 11 append 2'
        }
        , (diwr_jtyj_1) => {
            if (!diwr_jtyj_1.isOk) {
                diwr_msg.addErr('csrf-fileOpr append _if exist msox-')
            }
            if (!/append 2/.test(fs.readFileSync(path.join(nikc_fileOpr_test, 'test_10/test_11-rjqt')).toString())) {
                diwr_msg.addErr('csrf-fileOpr append _if exist msox 3-')
            }
        })

    await fileCheck(
        {
            opr: 'writeIfExist',
            path: path.join(nikc_fileOpr_test, 'test_10/test_10-rjqt'),
            content: 'hello 10'
        }
        , (diwr_jtyj_1) => {
            if (!diwr_jtyj_1.isOk) {
                diwr_msg.addErr('csrf-fileOpr write _if exist msox-')
            }
        })


    await fileCheck(
        {
            opr: 'writeIfExist',
            existPath: path.join(nikc_fileOpr_test, 'test_10/test_10-not-exist-rjqt'),
            path: path.join(nikc_fileOpr_test, 'test_10/test_10-not-exist-rjqt'),
            content: 'hello 10 exits'
        }
        , (diwr_jtyj_1) => {
            if (diwr_jtyj_1.isOk) {
                diwr_msg.addErr('csrf-fileOpr write _if exist msox 2-')
            }
        })

    await fileCheck(
        {
            opr: 'writeIfExist',
            path: path.join(nikc_fileOpr_test, 'test_10/test_10-not-exist-rjqt'),
            content: 'hello 10 exits'
        }
        , (diwr_jtyj_1) => {
            if (!diwr_jtyj_1.isOk) {
                diwr_msg.addErr('csrf-fileOpr write _if exist msox 3-')
            }
        })


    return diwr_msg
}