const fs = require('fs')
const hd_rjqt_tum = require("./hd_rjqt_tum")
const vbyt_lr_diwr_bqeo_stst_va = require('./vbyt_lr_diwr_bqeo_stst_va.js');
const Diwr_err = require('./diwr_err.js');
const mcvn_parser = require('./mcvn_parser.js');
const diwr_msg = new Diwr_err('zogl-afoa')
const unicode_LD_ZTFR_SU = require('./unicode_LD_ZTFR_SU')
const yxna = "D:/xyzd/unicode_to_hanyu_pinyin.txt"
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

//zogl vbyt_lr_diwr_bqeo_stst_va atvn jils grbu
const diwr_zogl_kp = {
    pzva_1: 0, pzva_2: ['string', 'why']
    , pzva_3: { pzva_4: true, pzva_5: { pzva_6: 'hi!' } }
}
const diwr_zogl_ce = {
    pzva_1: 0, pzva_2: ['string', 'why']
    , pzva_3: { pzva_4: true, pzva_5: { pzva_6: 'hello!' } }
}
const diwr_msg_vbyt_diwr_bqeo_stst = vbyt_lr_diwr_bqeo_stst_va(diwr_zogl_kp, diwr_zogl_ce)
if (!diwr_msg_vbyt_diwr_bqeo_stst.isOk()) {
    const msg = diwr_msg_vbyt_diwr_bqeo_stst.getErr().map(rn1 => rn1.err.message)
    if (!/hello!/.test(msg)) {
        diwr_msg.addErr('csrf-zogl vbyt_lr_diwr_bqeo_stst_va atvn grbu va zd pc ms 2-')
        // console.error(msg)//
    }
} else {
    diwr_msg.addErr('csrf-zogl vbyt_lr_diwr_bqeo_stst_va atvn grbu va zd pc ms 1-')
}
Object.assign(diwr_zogl_kp.pzva_3.pzva_5, diwr_zogl_ce.pzva_3.pzva_5)
const diwr_msg_vbyt_diwr_bqeo_stst_2 = vbyt_lr_diwr_bqeo_stst_va(diwr_zogl_kp, diwr_zogl_ce)
if (!diwr_msg_vbyt_diwr_bqeo_stst_2.isOk()) {
    diwr_msg.addErr('csrf-zogl vbyt_lr_diwr_bqeo_stst_va atvn grbu va zd pc ms 3-')
}

// vdum stst mi zogl
const diwr_msg_yhld = vbyt_lr_diwr_bqeo_stst_va([[], { title: '11112' }], [[], { title: '11111' }], { vdum_stst_va: true })
if (!/0\.\d+/.test(diwr_msg_yhld.getErr().map(rn1 => rn1.err.message).join('\n'))) {
    diwr_msg.addErr('csrf-lr diwr stst va zogl msox')
}
// zogl atvn xcmj
const diwr_msg_yhld_2 = vbyt_lr_diwr_bqeo_stst_va([[], { title: '11111', ha: () => { } }], [[], { title: '11111' }], { xcmj_atvn: true })
if (!diwr_msg_yhld_2.isOk()) {
    diwr_msg.addErr('csrf-lr diwr xcmj atvn zogl msox')
}
// zogl mcvn parser
const yargsParser = require('yargs')
const diwr_msg_mcvn_parser = new Diwr_err('mcvn parser zogl')
const options = require('./cmd_params_option');
const rj_tsjq_qh = 'tsjq-1 tsjq-2 tsjq-3 --mcvn-1 hello -r 1 2 3 --mcvn-2-p-vvbr "hello dear" --gkyq --mcvn-3-p-wyih \'"Hi!"\' -o --hello 0 tsjq-4'
const diwr_mcvn_1 = yargsParser(rj_tsjq_qh).options(options).parse()
const diwr_mcvn_2 = mcvn_parser(rj_tsjq_qh).options(options).parse()
diwr_msg_mcvn_parser.addVxn(vbyt_lr_diwr_bqeo_stst_va(diwr_mcvn_1, diwr_mcvn_2))
// console.log(diwr_mcvn_1, diwr_mcvn_2)//
// console.log(diwr_msg_mcvn_parser.getErr())
const rj_tsjq_qh_2 = "align --left"
diwr_msg_mcvn_parser.zkrs = `const rj_tsjq_qh_2 = "align --left"`
diwr_msg_mcvn_parser.addVxn(
    vbyt_lr_diwr_bqeo_stst_va(
        yargsParser(rj_tsjq_qh_2).options(options).parse(),
        mcvn_parser(rj_tsjq_qh_2).options(options).parse()
    )
)

const diwr_mcvn_bmee = {
    _: ['tsjq-1', 'tsjq-2', 'tsjq-3', 'tsjq-4'],
    'mcvn-1': 'hello',
    mcvn1: 'hello',
    r: [1, 2, 3],
    reg: [1, 2, 3],
    'mcvn-2-p-vvbr': 'hello dear',
    mcvn2PVvbr: 'hello dear',
    gkyq: true,
    'mcvn-3-p-wyih': '"Hi!"',
    mcvn3PWyih: '"Hi!"',
    o: true,
    // hello: 0,
    counts: 0,
    c: 0,
    steps: 1,
    s: 1,
    all: false,
    A: false,
    add: '',
    a: '',
    left: false,
    list: '',
    l: '',
    find: [],
    getAll: false,
    'get-all': false,
    write: [],
    w: [],
    encoding: 'utf8',
    '-e': 'utf8',
    e: 'utf8',
    modify: '',
    '-m': '',
    m: '',
    save: false,
    b: false,
    file: '',
    '-f': '',
    f: '',
    delete: '',
    '-d': '',
    d: '',
    pass: '',
    p: '',
    mode: [],
    reverse: false,
    inputSystem: 10,
    isys: 10,
    'input-system': 10,
    outputSystem: 10,
    osys: 10,
    'output-system': 10,
    '$0': 'afoa_zogl.js'
}
diwr_msg_mcvn_parser.zkrs = `}`
diwr_msg_mcvn_parser.addVxn(vbyt_lr_diwr_bqeo_stst_va(diwr_mcvn_bmee, diwr_mcvn_2, { gosi_hqtz: true }))
const diwr_mcvn_3 = yargsParser().options(options).parse()
const diwr_mcvn_4 = mcvn_parser().options(options).parse()
diwr_msg_mcvn_parser.zkrs = `const diwr_mcvn_4 = mcvn_parser().options(options).parse()`
diwr_msg_mcvn_parser.addVxn(vbyt_lr_diwr_bqeo_stst_va(diwr_mcvn_3, diwr_mcvn_4))
const diwr_mcvn_5 = yargsParser('').options(options).parse()
const diwr_mcvn_6 = mcvn_parser('').options(options).parse()
diwr_msg_mcvn_parser.zkrs = `const diwr_mcvn_6 = mcvn_parser('').options(options).parse()`
diwr_msg_mcvn_parser.addVxn(vbyt_lr_diwr_bqeo_stst_va(diwr_mcvn_5, diwr_mcvn_6))
diwr_msg.addVxn(diwr_msg_mcvn_parser)
const rj_3 = `--y hh j -i df -y jj`
diwr_msg_mcvn_parser.zkrs = `const rj_3 = --y hh j -i df -y jj`
diwr_msg_mcvn_parser.addVxn(vbyt_lr_diwr_bqeo_stst_va(yargsParser(rj_3).parse(), mcvn_parser(rj_3).parse()))
const rj_4 = '-p ssr tu ls'
diwr_msg_mcvn_parser.zkrs = `const rj_4 = '-p ssr tu ls'`
diwr_msg_mcvn_parser.addVxn(vbyt_lr_diwr_bqeo_stst_va(yargsParser(rj_4).options(options).parse(), mcvn_parser(rj_4).options(options).parse()))
const rj_5 = '-p ssr --pass tu ls'
diwr_msg_mcvn_parser.zkrs = `const rj_5 = '-p ssr --pass tu ls'`
diwr_msg_mcvn_parser.addVxn(vbyt_lr_diwr_bqeo_stst_va(yargsParser(rj_5).options(options).parse(), mcvn_parser(rj_5).options(options).parse()))
// zogl mark to html
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
const Jk_ll_zv_wrm = require('./jk_ll_zv_wrm.js');
const Zjzj_fo = require('./Zjzj_fo.js');
const Jf_wrm_zjzj_diwr = require('./Jf_wrm_zjzj_diwr.js');
const rj = require('./cmd-zhqh-atvn/rj.js');
const fo_ussk = require('./fo_ussk.js');
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
// zjzj wrvr nikc tt jils pc uzms require
const nikc_wrvr_1 = path.resolve('./KPLU/wrvr/')
const nikc_wrvr_2 = path.resolve('./kplu/wrvr/')
const nikc_wrvr = (() => {
    if (!fs.existsSync(nikc_wrvr_1)) {
        if (!fs.existsSync(nikc_wrvr_2)) {
            diwr_msg.addErr('csrf-bqph msox nikc wrvr ac zznq-' + nikc_wrvr_2)
            return false
        } else {
            return nikc_wrvr_2
        }
    } else {
        return nikc_wrvr_1
    }
})()
if (nikc_wrvr) {
    const vnwm_files = fs.readdirSync(nikc_wrvr).filter(rn1 => fs.statSync(path.join(nikc_wrvr, rn1)).isFile())
    vnwm_files.forEach(rn1 => {
        if (/require.*(\b(uzms|nvms)\b)/.test(fs.readFileSync(path.join(nikc_wrvr, rn1)).toString())) {
            diwr_msg.addErr('csrf-wrvr rfrf stgn rjqt ac ah db uzms atvn ae nvms atvn mr stgn atvn, szlh uzms ae nvms w db wrvr rfrf n-' + path.join(nikc_wrvr, rn1))
        }
    })
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
rj3 = '* [x] xbst'
rj4 = rfrf(rj3)
if (!/ \[x\] /.test(rj4)) {
    console.error(`csrf-rfrf msox 7`)
}


// ld cxl lh ypn zogl
class ld_cxl {
    constructor(diwr_cxl, diwr_ypn, wlba_zjzj) {
        const neig_1 = {}
        const diwr_1 = {
            diwr_cxl,
            diwr_ypn,
            wlba_zjzj
        }
        this.set_wlba = (wlba_zjzj) => {
            diwr_1.wlba_zjzj = wlba_zjzj
            return this
        }
        this.set_neig = (neig_2) => {
            Object.assign(neig_1, neig_2)
            return this
        }
        this.commit = () => {
            const diwr_jtyj = (() => {
                try {
                    return ld_cxl_lh_ypn(diwr_cxl, neig_1)
                } catch (err) {
                    return err
                }
            })()
            diwr_1.wlba_zjzj(diwr_jtyj)
            return this
        }
    }
}
function ld_cxl_ypn(diwr_cxl, diwr_ypn, neig_kp, wlba_zjzj) {
    const wlab_2 = wlba_zjzj || ((diwr_jtyj) => {
        delete diwr_jtyj[rfrf('nori')]
        if (JSON.stringify(diwr_jtyj) !== JSON.stringify(diwr_ypn)) {
            // throw diwr_jtyj
            console.error(`csrf-ld cxl lh ypn msox-`, diwr_jtyj)
        }
    })
    return new ld_cxl(diwr_cxl, diwr_ypn).set_wlba(wlab_2).set_neig(neig_kp).commit()
}

ld_cxl_ypn({
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
}, {
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
    , {})
ld_cxl_ypn({
    one_1: {
        one_1_1: {
            one_1: "1"
            , one_1_1_2: "2"
        }, one_1_2: {
            one_1: "1"
            , one_1_1_2: "2"
        }, one_1_3: {
            one_1: "1"
            , one_1_1_2: "2"
        }
    }
}, {
    one_1: ['one_1_1', 'one_1_2', 'one_1_3'],
    one_1_1: ['one_1haha0', 'one_1_1_2'],
    one_1haha0: '1',
    one_1_1_2: '2',
    one_1_2: ['one_1haha1', 'one_1_1_2haha2'],
    one_1haha1: '1',
    one_1_1_2haha2: '2',
    one_1_3: ['one_1haha3', 'one_1_1_2haha4'],
    one_1haha3: '1',
    one_1_1_2haha4: '2'
}, { ce_wu: 'haha' })
ld_cxl_ypn({
    one_1: {
        one_1_1: {
            one_1: "1"
            , one_1_1_2: "2"
        }, one_1_2: {
            one_1: "1"
            , one_1_1_2: "2"
        }, one_1_3: {
            one_1: "1"
            , one_1_1_2: "2"
        }
    }
}, {
    one_1: ['one_1_1', 'one_1_2', 'one_1_3'],
    one_1_1: ['one_1', 'one_1_1_2'],
    one_1_1_2: '2',
    one_1_2: ['one_1', 'one_1_1_2'],
    one_1_3: ['one_1', 'one_1_1_2']
}, { dg_cf: true })

ld_cxl_ypn({
    one_1: {
        one_1_1: {
            one_1: "1"
            , one_1_1_2: "2"
        }, one_1_2: {
            one_1: "1"
            , one_1_1_2: "2"
        }, one_1_3: {
            one_1: "1"
            , one_1_1_2: "2"
        }
    }
}, {}, {}, (err) => {
    if (!/one_1/.test(err.message)) {
        diwr_msg.addErr('csrf-ld cxl lh ypn msox 3-' + err)
    }
})
// zogl fo_ussk
const yo_msg_fo_ussk_zogl = new Diwr_err('zogl fo_ussk')

j = [
    [(jtyj) => {
        if (jtyj != 'hello') {
            yo_msg_fo_ussk_zogl.addErr('csrf-fo ussk zogl msox-')
        }

    }, fo_ussk([['hello', () => 'hello'], ['hi', () => 'hi']]).vdum('hello')]
    ,
    [(jtyj) => {
        if (jtyj != 'aaaaa') {
            yo_msg_fo_ussk_zogl.addErr('csrf-fo ussk zogl setDefault msox-')
        }

    }, fo_ussk([['hello', () => 'hello'], ['hi', () => 'hi']]).setDefault((tsn) => tsn).vdum('aaaaa')]
    ,
    [(jtyj) => {
        if (jtyj != 'aaaaa') {
            yo_msg_fo_ussk_zogl.addErr('csrf-fo ussk zogl setDefault msox-')
        }

    }, fo_ussk([['hello', () => 'hello'], ['hi', () => 'hi']]).setDefault((tsn) => tsn).vdum('aaaaa')
    ]
].forEach((rn1) => {
    rn1[0](rn1[1])
})

// zogl Diwr_err class (diwr_msg)
const diwr_err_1 = new Diwr_err('zogl diwr_err')
diwr_err_1.addErr('err 1-1', 'err 1')
if (!diwr_err_1.msg) {
    console.error(`csrf-diwr_err msox 1`)
}
const diwr_err_2 = new Diwr_err('zogl diwr_err-2')
const diwr_err_3 = new Diwr_err('zogl diwr_err-3')
diwr_err_3.addVxn(diwr_err_2)
if (!diwr_err_3.isOk()) {
    console.error('csrf-diwr_err msox 2')
}
diwr_err_2.addErr('err 2-1', 'err 2')
if (diwr_err_3.isOk()) {
    console.error('csrf-diwr_err msox 3')
}
diwr_err_2.addVxn(diwr_err_1)
if (diwr_err_3.getErr().length != 2) {
    console.error(`csrf-diwr_err msox 4`)
}
try {
    diwr_err_2.addVxn({})
    console.error('csrf-diwr_err msox 5')
} catch (err) {

}
diwr_err_3.addVxn(new Diwr_err(), new Diwr_err(), new Diwr_err())
if (diwr_err_3.getVxn().length !== 4) {
    console.error(`csrf-diwr_err dk vxn vnaw ac di-`)
}
// console.log([diwr_err_3.getErrToString()])//
if (typeof diwr_err_3.getErrToString() != 'string' || !/err 2-1/.test(diwr_err_3.getErrToString())) {
    console.error(`csrf-diwr_err dk getErrToString msox-`)
}
if (!diwr_err_3.getStack().includes('zogl diwr_err-3')) {
    console.error('csrf-diwr_err dk getStack msox-')
}
// zogl jk ll zv wrm
const rj1 = "gg haha hh\nbbb bbb"
const wlba_1 = (rj) => rj.replace(/[ab]/g, "c")
const diwr_jk_ll = new Jk_ll_zv_wrm(/gg.*hh/g, "ggg_test_1").setBqeo(rj1).ymrg(wlba_1)
const jtyj_1 = diwr_jk_ll.getResult()
const diwr_zzzz_jk_ll = new Diwr_err('zogl-jk-ll-zv-wrm')
diwr_msg.addVxn(diwr_zzzz_jk_ll)

if (!/a/.test(jtyj_1) || /b/.test(jtyj_1)) {
    diwr_zzzz_jk_ll.addErr('jk-ll-zv-wrm msox 1')
}

diwr_jk_ll.setReg(/ccc/).setXbst('888')
diwr_jk_ll.ymrg((rj) => rj.replace(/[a-z]/g, "p"))
if (!/ccc/.test(diwr_jk_ll.getResult())) {
    diwr_zzzz_jk_ll.addErr('jk-ll-msox-2')
}

// zogl zjzj_fo
const diwr_ybkc = {}
const diwr_zjzj_1 = { haha: 9, yes: '', ok: true }
try {
    new Zjzj_fo(diwr_zjzj_1, { uxux: 'string' }).zjzj(diwr_ybkc, () => { })
    diwr_msg.addErr('csrf-zjzj fo msox 1-')
} catch (err) {
    // eocj
}
let yes1
new Zjzj_fo(diwr_zjzj_1, { wu: "haha", uxux: "string" }).zjzj(diwr_ybkc, () => yes1 = true)
if (!yes1) {
    diwr_msg.addErr('csrf-zjzj fo msox : ra vody uxux msox-')
}
let yes2
new Zjzj_fo(diwr_zjzj_1, { wu: "haha", uxux_class: Boolean }).zjzj(diwr_ybkc, () => yes2 = true)
new Zjzj_fo(diwr_zjzj_1, { wu: "haha", uxux_class: Number }).zjzj(diwr_ybkc, () => diwr_msg.addErr('csrf-zjzj fo msox: msox vbyt uxux msox-'))
if (!yes2) {
    diwr_msg.addErr('csrf-zjzj fo msox: ra vody uxux ybux msox-')
}
let yes3
new Zjzj_fo(diwr_zjzj_1, { wu: "haha", uxux_class: Number, aoao_eeye: true }).zjzj(diwr_ybkc, () => { })
new Zjzj_fo(diwr_zjzj_1, { wu: "haha", uxux_class: Number, aoao_eeye: true }).zjzj(diwr_ybkc, () => yes3 = true)
if (!yes3) {
    diwr_msg.addErr("csrf-zjzj fo msox: ra vbyt jils eeye-")
}
const diwr_zjzj_nrap = {}
new Zjzj_fo(diwr_zjzj_1, { wu: "haha2", uxux_class: Number, aoao_eeye: true }).zjzj_nrap((fo) => diwr_zjzj_nrap[fo] = true)
if (!diwr_zjzj_nrap['haha2']) {
    diwr_msg.addErr("csrf-zjzj fo msox: ra vbyt jils nrap-")
}
// zozj jf_wrm_zjzj_diwr
let yes4
new Jf_wrm_zjzj_diwr({ title: "haha", content: 9, uufb_zdti: new Date() })
    .addNew({ wu: "content", uxux: "string" })
    .addNew({ wu: "title", uxux: "string" })
    .addNew({ wu: "Date", uxux_class: Date })
    .commit(diwr_ybkc, (err) => {
        yes4 = true
    })
!yes4 && diwr_msg.addErr('csrf-jf_wrm zjzj diwr msox 1: ra zjzj ab uxux msox-')
const diwr_zjzj_nrap_2 = {}
new Jf_wrm_zjzj_diwr({ titl: "haha", contet: 9, uufb_zdti: new Date() })
    .addNew({ wu: "content", uxux: "string" })
    .addNew({ wu: "title", uxux: "string" })
    .addNew({ wu: "uufb_zdti", uxux_class: Date })
    .zjzj_nrap((rj1) => {
        diwr_zjzj_nrap_2[rj1] = true
    })
if (!diwr_zjzj_nrap_2["title"] || !diwr_zjzj_nrap_2["content"]) {
    console.log(diwr_zjzj_nrap_2)
    diwr_msg.addErr('csrf-jf_wrm zjzj diwr msox 1: ra zjzj ab nrap-')
}
let yes5
new Jf_wrm_zjzj_diwr().assign({ title: 9 }).addNew({ wu: 'title', uxux: 'string' }).commit({}, () => yes5 = true)
if (!yes5) {
    diwr_msg.addErr('csrf-jf wrm zjzj diwr assign atvn nkyc-')
}
// okud
if (diwr_msg.isOk()) {
    console.log("Done - " + diwr_msg.zkrs)
} else {
    console.log(diwr_msg.getStack())
}