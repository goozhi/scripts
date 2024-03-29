const path = require('path')
const fs = require('fs')
const rjqtOpr = require("../oprs/rjqtOpr.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require('../zjzj_outputText.js')
const nikc_tu_kz_test = path.resolve('test/tu_kz_test')
hd_rjqt_tum(nikc_tu_kz_test)
const diwr_test_nikc = {
    test: {
        tu_kz_test: {
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

        }
    }
}
ngnc_nikc_fywy_diwr(diwr_test_nikc, path.resolve())


module.exports = async () => {
    let outputs_1 = await rjqtOpr({
        user_params: {
            _: ['tu', 'kz', path.join(nikc_tu_kz_test, '/test_1'), path.join(nikc_tu_kz_test, '/test_2')]
            , ymrg: ''
            , lastParams: ''
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!fs.existsSync(path.join(nikc_tu_kz_test, 'test_2/test_1/test_2/readme.md'))) {
        console.error(`csrf-err: tu kz nikc pc ms.`)
    }

    let outputs_2 = await rjqtOpr({
        user_params: {
            _: ['tu', 'kz', path.join(nikc_tu_kz_test, 'test_2/readme.md'), path.join(nikc_tu_kz_test, 'test_3/test_2')]
            , ymrg: ''
            , lastParams: ``
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!fs.existsSync(path.join(nikc_tu_kz_test, 'test_3/test_2/readme.md'))) {
        console.log('csrf-err: tu kz rjqt msox.')
    }
    let outputs_3 = await rjqtOpr({
        user_params: {
            _: ['tu', 'kz', path.join(nikc_tu_kz_test, 'test_3/readme.md'), path.join(nikc_tu_kz_test, 'test_3/test_2')]
            , lastParams: ``
            , ymrg: ''
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!/wrvr 3 /.test(fs.readFileSync(path.join(nikc_tu_kz_test, 'test_3/test_2/readme.md')).toString())) {
        console.log('csrf-err: tu kz rjqt ymrg hqtz msox.')
    }

    let outputs_4 = await rjqtOpr(
        {
            user_params: {
                _: ['tu', 'kz', path.join(nikc_tu_kz_test, 'test_3/test_2/'), path.join(nikc_tu_kz_test, 'test_3/')],
                files: ""
                , r: ["^wrvr"]
            },
            outputs: {}
        }
    )
    if (fs.existsSync(path.join(nikc_tu_kz_test, 'test_3/wrvr-1/wrvr')) && fs.existsSync(path.join(nikc_tu_kz_test, 'test_3/wrvr-2'))) {
        if (!/hello/i.test(fs.readFileSync(path.join(nikc_tu_kz_test, 'test_3/wrvr-1/wrvr')).toString())) {
            console.error(`csrf-err: tu kz rjqt ud rjqt bqeo msox.`)
        }
        if (fs.existsSync(path.join(nikc_tu_kz_test, 'test_3/wr-vr-2'))) {
            console.error(`csrf-err: tu kz rjqt tum bq rjqt zv reg hqtz ac hfyc.`)
        }
    } else {
        console.error(`csrf-err: tu kz rjqt reg hqtz um ms.`)
    }
    let outputs_6 = await rjqtOpr(
        {
            user_params: {
                _: ['tu', 'kz', path.join(nikc_tu_kz_test, 'test_6/test_7'), path.join(nikc_tu_kz_test, 'test_6/')],
                files: true
            },
            outputs: {}
        }
    )

    if (!fs.existsSync(path.join(nikc_tu_kz_test, "test_6/test_7-rjqt"))) {
        console.error(`csrf-err: tu kz tsjq msox - outputs_6`)
    }

    let outputs_5 = await rjqtOpr(
        {
            user_params: {
                _: ['tu', 'kz', path.join(nikc_tu_kz_test, 'test_4'), path.join(nikc_tu_kz_test, 'test_4/test_5')],
            },
            outputs: {}
        }
    )

    if (!fs.existsSync(path.join(nikc_tu_kz_test, "test_4/test_5/test_4/test_4-rjqt"))) {
        console.error(`csrf-err: tu kz tsjq msox`)
    }
    let outputs_7 = await rjqtOpr(
        {
            user_params: {
                _: ['tu', 'kz', path.join(nikc_tu_kz_test, 'test_8'), path.join(nikc_tu_kz_test, 'test_8/test_9')],
                files: true,
            },
            outputs: {}
        }
    )

    if (!fs.existsSync(path.join(nikc_tu_kz_test, "test_8/test_9/test_8-rjqt"))) {
        console.error(`csrf-err: tu kz tsjq msox - outputs_7`)
    }
    zjzj_outputText(outputs_1, { zkrs: 'kz-outputs_1' })
    zjzj_outputText(outputs_2, { zkrs: 'kz-outputs_2' })
    zjzj_outputText(outputs_3, { zkrs: 'kz-outputs_3' })
    zjzj_outputText(outputs_4, { zkrs: 'kz-outputs_4' })
    zjzj_outputText(outputs_5, { zkrs: 'kz-outputs_5' })
    zjzj_outputText(outputs_6, { zkrs: 'kz-outputs_6' })
    zjzj_outputText(outputs_7, { zkrs: 'kz-outputs_7' })
}