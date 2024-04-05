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
                'readme.md': `# [Hello Vr](./test_2/readme.md)`
                , test_2: {
                    "readme.md": `# Hello, Vr !`
                }
            }
        }
    }
}
hd_rjqt_tum(copy_test_src)
hd_rjqt_tum(copy_test_tar)
hd_rjqt_tum(nikc_inputDir_mark)
hd_rjqt_tum(nikc_outputDir_mark)

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
            } else {
                throw new Error('csrf-err:buildHtml nkme')
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
// zogl commd dk rsqt tsjq.
const rjqt_tsjq_zjzj = require('./zogl_atvn/rjqt_tsjq_zjzj.js')
rjqt_tsjq_zjzj()

// zogl md_ld_html
const md_bqeo_ld_html = require('./md_bqeo_ld_html.js')
const rj_1 = `
ss[dfaf](D:\\dffs\\dsf/jj)
ss[dfaf](D:\\dffs\\dsf/jdj)
asfaf
ss[dfaf](D:\\dffs\\dsf/jjs)`
const rj_2 = md_bqeo_ld_html(rj_1)
if (/\\/.test(rj_2)) {
    console.error(`csrf-err: zogl msox: md ld html msox`)
}

console.log("Done. Finish afoa zogl.")
