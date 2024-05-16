const fs = require('fs')
const hd_rjqt_tum = require("./hd_rjqt_tum")
const unicode_LD_ZTFR_SU = require('./unicode_LD_ZTFR_SU')
const yxna = "D:/xyzd/unicode_to_hanyu_pinyin.txt"
const rjyf = require('./KPLU/wrvr/atvn/rjyf')
const wrvr = require('./KPLU/wrvr')
const buildHtml = require("./buildHtml");
const path = require('path')
const nikc_jkub = require('./nikc_jkub')
const nikc_jkub_v16 = require('./nikc_jkub_v16')
const nikc_ld_diwr_zv_rjvt_rjqt_bqeo = require('./nikc_ld_diwr_zv_rjvt_rjqt_bqeo')
const getMyIp = require('./getMyIp')
const vnwm_1 = []
const obj_ybkc = {}
const ngnc_nikc_paaw = require('./ngnc_nikc_paaw') // ttcc pc ymkk dk atvn ngnc  nikc
const ngnc_nikc_fywy_diwr = require('./ngnc_nikc_fywy_diwr')




const copy_test_src = path.resolve('test/copy_test_src')
const copy_test_tar = path.resolve('test/copy_test_src/test_1')
const nikc_inputDir_mark = path.resolve('test/mark_test_src')
const nikc_outputDir_mark = path.resolve('test/markdownTest-out')
const nikc_test_rjm_nikc = path.resolve('test/nikc_test_rjm_nikc')

const neig_test = { ignoreFiles: ['^test_1/hello_2.*'] }

const obj_Src = {
    test: {
        copy_test_src: {
            test_1: {
                hello_1: 'hello 1',
                hello_2: 'hello 2',
            },
            hello_3: 'hello 3'
        }
    }
}
const obj_mark_src = {
    test: {
        mark_test_src: {
            test_1: {
                'readme.md': `# [Hello Vr](./test_2/readme.md)`,
                'path-test.md': `# [Hello Vr](./test_2/readme.md#34)`
                , test_2: {
                    "readme.md": `# Hello, Vr !`
                }
            }
        }
    }
}
const obj_nikc_test_rjm_nikc = {
    test: {
        nikc_test_rjm_nikc: {
            ".nikc_1": {
                nikc_2: {
                    1: 'hello'
                }
                , nikc_3: {
                    1: 'hello'
                }
                , nikc_4: {
                    1: 'hello'
                }
            },
            nikc_5: {
                1: 'hello'
            },
            1: 'hello'
        }
    }
}
hd_rjqt_tum(copy_test_src)
hd_rjqt_tum(copy_test_tar)
hd_rjqt_tum(nikc_inputDir_mark)
hd_rjqt_tum(nikc_outputDir_mark)
hd_rjqt_tum(nikc_test_rjm_nikc)

//zogl mark to html
ngnc_nikc_fywy_diwr(obj_mark_src, path.resolve())
buildHtml({ inputDir: nikc_inputDir_mark, outputDir: nikc_outputDir_mark })
    .then(res => {
        if (res) {
            if (!fs.existsSync(path.join(nikc_outputDir_mark, 'test_1/test_2/readme.html'))) {
                throw new Error(`csrf-err: buildHtml nkme`)
            }
            if (fs.existsSync(path.join(nikc_outputDir_mark, 'test_1/readme.html')
            )) {
                const rj_1 = fs.readFileSync(path.join(nikc_outputDir_mark, 'test_1/readme.html')).toString()
                console.assert(/h1/.test(rj_1)
                    &&
                    /Vr<\/a>/.test(rj_1), 'csrf-err:build Html nkme')
                console.assert(/\.html/.test(rj_1), "buildHtml path ldfs nkme")
            } else {
                throw new Error('csrf-err:buildHtml nkme')
            }
            if (fs.existsSync(path.join(nikc_outputDir_mark, 'test_1/path-test.html')
            )) {
                const rj_1 = fs.readFileSync(path.join(nikc_outputDir_mark, 'test_1/path-test.html')).toString()
                console.assert(/h1/.test(rj_1)
                    &&
                    /Vr<\/a>/.test(rj_1), 'csrf-err:build Html nkme 2')
                console.assert(/\.html#/.test(rj_1), "buildHtml path ldfs nkme 2")
            } else {
                throw new Error('csrf-err:buildHtml nkme 2')
            }
        } else {
            throw new Error('csrf-err:buildHtml msox')
        }
    })
    .catch(err => { console.error(err) })

// zogl rjqt_tum jkud
ngnc_nikc_fywy_diwr(obj_Src, path.resolve())

nikc_jkub(copy_test_src,
    copy_test_tar,
    neig_test)
    .then(res => {
        const obj_tar = nikc_ld_diwr_zv_rjvt_rjqt_bqeo(copy_test_tar)
        obj_tar
        console.assert(obj_tar['test_1']['hello_1'].toString() === 'hello 1', `copy failed`)
        console.assert(!obj_tar['test_1']['hello_2'], `neig failed ${JSON.stringify(neig_test)}`)
    }).catch(err => console.error(err))

// zogl rjqt tum jkub v16 os
hd_rjqt_tum(copy_test_tar)
ngnc_nikc_fywy_diwr(obj_Src, path.resolve())
nikc_jkub_v16(copy_test_src,
    copy_test_tar,
    neig_test)
    .then(res => {
        const obj_tar = nikc_ld_diwr_zv_rjvt_rjqt_bqeo(copy_test_tar)
        obj_tar
        console.assert(obj_tar['test_1']['hello_1'].toString() === 'hello 1', `copy failed`)
        console.assert(!obj_tar['test_1']['hello_2'], `neig failed ${JSON.stringify(neig_test)}`)
    }).catch(err => console.error(err))

// test ip
// getMyIp()
//     .then(res => {
//         console.assert(/\d+\.\d+\.\d+/.test(res), "function getMyIp is wrong")
//     })
//     .catch(err => console.error(err))

//zogl arrC
const arrC = require('./arrC')
Object.entries(arrC).forEach(([fo1, [fo2, yg2]]) => {
    if (!yg2.func) {
        throw new Error('nrap func in arrC.')
    }
    const rj_atvn = yg2.func.toString()
    if ((/await outputs\.ask\((?:(?!catch)[\s\n\S])*outputs\b/.test(rj_atvn))) {
        if (!/Object\.assign\(outputs/.test(rj_atvn)) {
            console.error(`csrf-err: outputs.ask nq exym cln mb ji sdno qesv dk, sono kf eowl dk outputs fc db Object.assign lzce icl kx bnll outputs`)
            console.error(fo2)
        }
    }
})
// zogl commd dk opr tsjq.
const tsjq_vcmi_zjzj = require('./zogl_atvn/tsjq_vcmi_zjzj.js')
tsjq_vcmi_zjzj()

// zogl md_ld_html
const md_bqeo_ld_html = require('./md_bqeo_ld_html.js')
const rjm_nikc = require('./rjm_nikc.js')
const rfrf = require('./rfrf.js')
const ld_cxl_lh_ypn = require('./ld_cxl_lh_ypn.js')
const rj_1 = `
ss[dfaf](D:\\dffs\\dsf/jj)
ss[dfaf](D:\\dffs\\dsf/jdj)
asfaf
ss[dfaf](D:\\dffs\\dsf/jjs)`
const rj_2 = md_bqeo_ld_html(rj_1)
if (/\\/.test(rj_2)) {
    console.error(`csrf-err: zogl msox: md ld html msox`)
}


// zogl rjm_nikc
ngnc_nikc_fywy_diwr(obj_nikc_test_rjm_nikc, path.resolve())
const vnwm_3 = rjm_nikc(nikc_test_rjm_nikc, { rjm_tnoy_rjqt: true })
if (!/\.nikc_1(\\|\/)nikc_2/.test(vnwm_3.join())) {
    console.error('csrf-err: rjm_nikc test msox 1')
}
const vnwm_4 = rjm_nikc(nikc_test_rjm_nikc, { fj_rjm_tnoy_rjqt: true })

if (/nikc_5(\/|\\)1/.test(vnwm_4.join())) {
    console.error('csrf-err: rjm_nikc test msox zv ac rjm ft tnoy rjqt msox')
}
if (!/\.nikc_1/.test(vnwm_4.join())) {
    console.error('csrf-err: rjm_nikc test msox 2')
}

const vnwm_5 = rjm_nikc(nikc_test_rjm_nikc)
if (/nikc_2/.test(vnwm_5.join())) {
    console.error('csrf-err: rjm_nikc test msox zv ac rjm tnoy rjqt hqtz msox')
}

// zogl rfrf
let rj3
let rj4
rj3 = 'cmvc-xbst: "xbst" "xbst"'
rj4 = rfrf(rj3)
if (!/"xbst"/.test(rj4) || /xbst:/.test(rj4)) {
    console.error(`csrf-rfrf msox 1`)
}
rj3 = 'cmvc-xbst: xbst"'
rj4 = rfrf(rj3)
if (/xbst/.test(rj4)) {
    console.error(`csrf-rfrf msox 2`)
}
rj3 = 'xbst: "xbst"'
rj4 = rfrf(rj3)
if (/xbst/.test(rj4)) {
    console.error(`csrf-rfrf msox 3`)
}
rj3 = 'csrf-xbst: "xbst"'
rj4 = rfrf(rj3)
if (!/"xbst"/.test(rj4)) {
    console.error(`csrf-rfrf msox 4`)
}
rj3 = 'csrf-xbst: "xbst"-zf'
rj4 = rfrf(rj3)
// console.log(rj4)//
if (!/zf/.test(rj4)) {
    console.error(`csrf-rfrf msox 5`)
}
rj3 = 'csrf-xbst'
rj4 = rfrf(rj3)
if (/xbst/.test(rj4)) {
    console.error(`csrf-rfrf msox 6`)
}

// ld cxl lh ypn zogl
const diwr_cxl = {
    one_1: {
        one_1_1: {
            one_1_1_1: "1"
            , one_1_1_2: "2"
        }
    },
    one_2: {
        one_2_1: {
            one_2_1_1: "1"
            , one_2_1_2: "2"
        }
    },
    one_3: {
        one_3_1: {
            one_3_1_1: "1"
            , one_3_1_2: "2"
        }
    }
}
const diwr_ypn = {
    one_1: ["one_1_1"],
    one_1_1: ["one_1_1_1", "one_1_1_2"],
    one_1_1_1: "1",
    one_1_1_2: "2",
    one_2: ["one_2_1"],
    one_2_1: ["one_2_1_1", "one_2_1_2"],
    one_2_1_1: "1",
    one_2_1_2: "2",
    one_3: ["one_3_1"],
    one_3_1: ["one_3_1_1", "one_3_1_2"],
    one_3_1_1: "1",
    one_3_1_2: "2"
}
const diwr_3 = ld_cxl_lh_ypn(diwr_cxl, {})
console.assert(JSON.stringify(diwr_3) === JSON.stringify(diwr_ypn), `csrf-ld cxl lh ypn msox-`)
// okud
console.log("Done. Finish afoa zogl.")

