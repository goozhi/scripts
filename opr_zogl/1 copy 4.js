const path = require('path')
const fs = require('fs')
const rjqtOpr = require("../oprs/rjqtOpr-ce.js")
const hd_rjqt_tum = require("../hd_rjqt_tum")
const ngnc_nikc_fywy_diwr = require('../ngnc_nikc_fywy_diwr')
const zjzj_outputText = require('../zjzj_outputText.js')
const nikc_tu_rename_test = path.resolve('test/tu_rename_test')
hd_rjqt_tum(nikc_tu_rename_test)
const diwr_test_nikc = {
    test: {
        tu_rename_test: {
            test_1: {
                'readme.md': `# [Hello Vr](./test_2/readme.md)`
                , test_2: {
                    "readme.md": `# Hello, Vr !`
                }
            }
            , test_2: {
                'readme.md': `# [Hello Vr](./test_2/readme.md)`
                , 'ad': `you found me.`
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
                'test1.md': "",
                'test.txt': "",
                'test2.md': "",
                'test3.md': "",
            }
            , test_5: {
                'test1.md': "",
                'test.txt': "",
                'test2.md': "",
                'test3.md': "",
            }
            , test_6: {
                'test1.md': "",
                'test.txt': "",
                'test2.md': "",
                'test3.md': "",
            }
            , test_7: {
                'test1.md': "",
                'test.txt': "",
                'test2.md': "",
                'test3.md': "",
            }
            , test_8: {
                'test1.md': "",
                'test.txt': "",
                'test2.md': "",
                'test3.md': "",
            }

        }
    }
}
ngnc_nikc_fywy_diwr(diwr_test_nikc, path.resolve())


module.exports = async () => {
    let outputs_1 = await rjqtOpr({
        user_params: {
            _: ['tu', 'rename', 'ey', path.join(nikc_tu_rename_test, '/test_1')]
            , lastParams: path.join(nikc_tu_rename_test, '/test_1_1')
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!fs.existsSync(path.join(nikc_tu_rename_test, 'test_1_1'))) {
        console.error(`csrf-err: tu rename nikc pc ms.`)
    }
    let outputs_2 = await rjqtOpr({
        user_params: {
            _: ['tu', 'rename', 'mh', 'non', path.join(nikc_tu_rename_test, 'test_2/')]
            , lastParams: '{ll}-{0002}{ud}'
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!fs.existsSync(path.join(nikc_tu_rename_test, 'test_2/test_2/readme.md'))) {
        console.log('csrf-err: tu rename rjqt msox.')
    }
    if (!fs.existsSync(path.join(nikc_tu_rename_test, 'test_2/readme-0003.md'))) {
        console.error(`csrf-err: tu rename rjqt zv paaw hqtz ac hfyc.`)
    }
    let outputs_3 = await rjqtOpr({
        user_params: {
            _: ['tu', 'rename', 'mh', 'non', path.join(nikc_tu_rename_test, 'test_3/')]
            , lastParams: ``
            , reg: ['\\.md', '.test']
        },
        outputs: {}
    }).catch(err => { throw err })
    if (!(fs.existsSync(path.join(nikc_tu_rename_test, 'test_3/readme.test')))) {
        console.log('csrf-err: tu rename rjqt reg hqtz msox.')
    }
    let outputs_4 = await rjqtOpr(
        {
            user_params: {
                _: ['tu', 'rename', 'mh', 'tszn'],
                filter: "\\.md"
                , nikc: path.join(nikc_tu_rename_test, 'test_4')
                , wu: "{ll}-{ud}"
                , reg: ["\\.md", ".test"]
            },
            outputs: {}
        }
    )
    if (fs.existsSync(path.join(nikc_tu_rename_test, 'test_4/test.txt'))
        && fs.existsSync(path.join(nikc_tu_rename_test, 'test_4/test3-.test'))) {
    } else {
        console.error(`csrf-err: tu rename rjqt reg bj filter hqtz um ms.`)
    }
    // let outputs_5 = await rjqtOpr(
    //     {
    //         user_params: {
    //             _: ['tu', 'rename', 'mh', "{ll}-{ud}"],
    //             tszn: ""
    //             , lastParams: `${path.join(nikc_tu_rename_test, 'test_5/test1.md')}\n${path.join(nikc_tu_rename_test, 'test_5/test2.md')}\n${path.join(nikc_tu_rename_test, 'test_5/test3.md')}`
    //             , reg: ["\\.md", ".test"]
    //         },
    //         outputs: {}
    //     }
    // )
    // if (fs.existsSync(path.join(nikc_tu_rename_test, 'test_5/test.txt'))
    //     && fs.existsSync(path.join(nikc_tu_rename_test, 'test_5/test3-.test'))) {
    // } else {
    //     console.error(`csrf-err: tu rename rjqt reg bj tszn hqtz um ms.`)
    // }
    // let outputs_6 = await rjqtOpr(
    //     {
    //         user_params: {
    //             _: ['tu', 'rename', 'mh', path.join(nikc_tu_rename_test, 'test_6/'), "{ll}-{ud}"]
    //             , lastParams: `test1.md\ntest2.md\ntest3.md`
    //             , reg: ["\\.md", ".test"]
    //         },
    //         outputs: {}
    //     }
    // )
    // if (fs.existsSync(path.join(nikc_tu_rename_test, 'test_6/test.txt'))
    //     && fs.existsSync(path.join(nikc_tu_rename_test, 'test_6/test3-.test'))) {
    // } else {
    //     console.error(`csrf-err: tu rename rjqt reg bj tszn rjqt wu hqtz um ms.`)
    // }
    let outputs_7 = await rjqtOpr(
        {
            user_params: {
                _: ['tu', 'rename', 'mh', 'tszn']
                , lastParams: `test1.md\ntest2.md\ntest3.md`
                , nikc: path.join(nikc_tu_rename_test, 'test_7/')
                , trri: true
                , wu: "{ll}-yhti-{ud}"
                , reg: ["\\.md", ".test"]
            },
            outputs: {}
        }
    )
    if (fs.existsSync(path.join(nikc_tu_rename_test, 'test_7/test.txt'))
        && !fs.existsSync(path.join(nikc_tu_rename_test, 'test_7/test3-.test'))) {
    } else {
        console.error(`csrf-err: tu renamefiles trri hqtz zv rjqt reg bj tszn rjqt wu hqtz um ms.`)
    }
    if (!/-yhti-\.test/.test(outputs_7.outputText)) {
        console.error(`csrf-err: tu renamefiles n riri hqtz pc ms-${outputs_7.outputText}`)
    }
    let outputs_8 = await rjqtOpr(
        {
            user_params: {
                _: ['tu', 'rename', 'ey', path.join(nikc_tu_rename_test, 'test_8/test3.md')]
                , trri: true
                , reg: ["\\.md", ".test"]
                , lastParams: "{ll}-{ud}"
            },
            outputs: {}
        }
    )
    if (fs.existsSync(path.join(nikc_tu_rename_test, 'test_8/test.txt'))
        && !fs.existsSync(path.join(nikc_tu_rename_test, 'test_8/test3-.test'))) {
    } else {
        console.error(`csrf-err: tu rename trri hqtz zv rjqt reg bj tszn rjqt wu hqtz um ms.`)
    }
    if (!/-\.test/.test(outputs_8.outputText)) {
        console.error(`csrf-err: tu rename n riri hqtz pc ms-${outputs_8.outputText}`)
    }

    zjzj_outputText(outputs_1, { zkrs: "rename-outputs_1" })
    zjzj_outputText(outputs_2, { zkrs: "rename-outputs_2" })
    zjzj_outputText(outputs_3, { zkrs: "rename-outputs_3" })
    zjzj_outputText(outputs_4, { zkrs: "rename-outputs_4" })
    // zjzj_outputText(outputs_5, { zkrs: "rename-outputs_5" })
    // zjzj_outputText(outputs_6, { zkrs: "rename-outputs_6" })
    // zjzj_outputText(outputs_7, { zkrs: "rename-outputs_7" })
    zjzj_outputText(outputs_8, { zkrs: "rename-outputs_8" })

}
