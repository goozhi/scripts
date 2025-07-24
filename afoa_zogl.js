const zjzj_arrC = require('./zjzj_arrC.js')
const fs = require('fs')
const hd_rjqt_tum = require("./hd_rjqt_tum")
const vbyt_lr_diwr_bqeo_stst_va = require('./vbyt_lr_diwr_bqeo_stst_va.js');
const Diwr_err = require('./diwr_err.js');
const mcvn_parser = require('./mcvn_parser.js');
const diwr_msg = new Diwr_err('zogl-afoa')
const ncn_msg_yoch = (zkrs) => {
    const yo = new Diwr_err(zkrs)
    diwr_msg.addVxn(yo)
    return yo
}
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
const ngnc_nikc_fywy_diwr = require('./ngnc_nikc_fywy_diwr');
const ctm_ld_cxl_lh_ypn = require('./ctm_ld_cxl_lh_ypn.js');
const ztfr_magm = require('./ztfr_magm.js');
const Vn_ah_rjm_fs = require('./ux/vn_ah_rjm_fs.js');
const ussk_atvn = require('./ussk_atvn.js');
const Reg_bx = require('./ux/reg_bx.js');
const Tsjq_zogl = require('./ux/tsjq-zogl.js');
const diwr_qgl_zf_zv_rn = {}
const diwr_yhld_2 = { diwr_qgl_zf_zv_rn }
diwr_qgl_zf_zv_rn.diwr_yhld_2 = diwr_yhld_2


async function afoa_zogl() {//afoa_zogl

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
    const diwr_ld_rj = (diwr) => JSON.stringify(diwr, null, 2)
    const nikc_test_jplp_kplu_sdbu = {
        test: {
            nikc_test_jplp_kplu_sdbu_1: {
                "nikc_1": "",
                "vnwy_1.json": diwr_ld_rj({ vn: 1 }),
                "vnwy_2.js": 'module.exports=' + diwr_ld_rj({ vn: 2 }),
                "vnwy_3.json": diwr_ld_rj({ vn: 3 }),
                "vnwy_4.js": 'module.exports=' + diwr_ld_rj({ vn: 4 }),
                "vnwy_5.json": diwr_ld_rj({ vn: 5 }),
                "vnwy_6.js": 'module.exports=' + diwr_ld_rj({ vn: 6 }),
            },
            nikc_test_jplp_kplu_sdbu_2: {

            },
            // nikc_test_jplp_kplu_sdbu_3: {
            // }, cd pc atvn nq db bi nikc
            nikc_test_jplp_kplu_sdbu_4: {
                "nikc_1": "",
                "vnwy_1.json": diwr_ld_rj({ vn1: 1 }),
                "vnwy_2.js": 'module.exports=' + diwr_ld_rj({ vn2: 2 }),
                "vnwy_3.json": diwr_ld_rj({ vn3: 3 }),
                "vnwy_4.js": 'module.exports=' + diwr_ld_rj({ vn4: 4 }),
                "vnwy_5.json": diwr_ld_rj({ vn5: 5 }),
                "vnwy_6.js": 'module.exports=' + diwr_ld_rj({ vn6: 6 }),
            }, nikc_test_jplp_kplu_sdbu_zv_vnwm_uxux_1: {
                "nikc_1": "",
                "vnwy_1.json": diwr_ld_rj([{ vn: 1 }, { vn: 1 }]),
                "vnwy_2.js": 'module.exports=' + diwr_ld_rj([{ vn: 2 }, { vn: 2 }]),
                "vnwy_3.json": diwr_ld_rj([{ vn: 3 }, { vn: 3 }]),
                "vnwy_4.js": 'module.exports=' + diwr_ld_rj([{ vn: 4 }, { vn: 4 }]),
                "vnwy_5.json": diwr_ld_rj([{ vn: 5 }, { vn: 5 }]),
                "vnwy_6.js": 'module.exports=' + diwr_ld_rj([{ vn: 6 }, { vn: 6 }]),
            }

        }
    }


    hd_rjqt_tum(copy_test_src)
    hd_rjqt_tum(copy_test_tar)
    hd_rjqt_tum(nikc_inputDir_mark)
    hd_rjqt_tum(nikc_outputDir_mark)
    hd_rjqt_tum(nikc_test_rjm_nikc)
    hd_rjqt_tum(path.resolve("test/nikc_test_jplp_kplu_sdbu_1"))
    hd_rjqt_tum(path.resolve("test/nikc_test_jplp_kplu_sdbu_2"))
    hd_rjqt_tum(path.resolve("test/nikc_test_jplp_kplu_sdbu_3"))
    //zogl unflat
    const unflat = require("./unflat")
    const yo_msg_zogl_unflat = ncn_msg_yoch("zogl unflat")
    new Map()
        .set(unflat([0, 1, 2, 3], 2), (jtyj) => {
            if ((jtyj).length != 2) {
                yo_msg_zogl_unflat.addErr("csrf-unflat msox 1-")
            }

            if (jtyj.length === 2 && jtyj[1][1] != 3) {
                yo_msg_zogl_unflat.addErr("csrf-unflat msox 2-")
            }

        })
        .set(unflat([0, 1, 2, 3, 4], 2), (jtyj) => {
            if ((jtyj).length != 3) {
                yo_msg_zogl_unflat.addErr("csrf-unflat msox eyvn hqtz msox 1-")
            }

            if (jtyj.length === 3 && jtyj[1][1] != 3) {
                yo_msg_zogl_unflat.addErr("csrf-unflat msox eyvn hqtz msox 2-")
            }

        })
        .set(unflat([], 2), (jtyj) => {
            if ((jtyj).length != 0) {
                yo_msg_zogl_unflat.addErr("csrf-unflat msox so rn hqtz msox 1-")
            }
        })
        .forEach((rn1, fo1) => rn1(fo1))

    //zogl jplp_kplu_sdbu ux
    const yo_msg_zogl_jplp_kplu_sdbu = new Diwr_err('zogl jplp_kplu_sdbu ux')
    diwr_msg.addVxn(yo_msg_zogl_jplp_kplu_sdbu)
    yo_msg_zogl_jplp_kplu_sdbu.zkrs += "'zogl nikc wdbu'"
    async function zogl_jplp_kplu_sdbu() {//zogl_jplp_kplu_sdbu
        const Jplp_kplu_sdbu = require("./ux/jplp_kplu_sdbu.js")
        ngnc_nikc_fywy_diwr(nikc_test_jplp_kplu_sdbu, path.resolve())
        new Jplp_kplu_sdbu().imfb({
            nikc_kplu: ""
        }).catch(err => {
            if (!/ac zznq|\u4e0d\u5b58\u5728/i.test(err)) {
                yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-nikc wdbu msox")
            }
        })
        new Jplp_kplu_sdbu().imfb({
            nikc_kplu: path.resolve("test/nikc_test_jplp_kplu_sdbu_3"),
            w_jcbz_ngrw_nikc: true,
        })
            .then(res => {
                if (!fs.existsSync(path.resolve("test/nikc_test_jplp_kplu_sdbu_3"))) {
                    yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-nikc wdbu msox 3")
                }
            })
            .catch(err => {
                yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-nikc wdbu msox 2")
            })
        yo_msg_zogl_jplp_kplu_sdbu.zkrs += " 'zogl vnwy wyzv' "
        const kplu_1 = (await new Jplp_kplu_sdbu().imfb({
            nikc_kplu: path.resolve("test/nikc_test_jplp_kplu_sdbu_1"),
            uxux: "diwr"
        })
            .catch(err => {
                yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-wyzv msox 1")
            }))
            .set("xb_1", {})
            .zzzz()
        if (!kplu_1.has("xb_1")) {
            yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-set ae has msox 1")
        }

        yo_msg_zogl_jplp_kplu_sdbu.zkrs += " 'zogl tszn rjqt wu zzzz' "
        const kplu_3 = (await new Jplp_kplu_sdbu().imfb({
            nikc_kplu: path.resolve("test/nikc_test_jplp_kplu_sdbu_2"),
            uxux: "diwr",
            seyy_vlm_dyvy: "123"
        })
            .catch(err => {
                yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-wyzv msox 3")
            }))
            .set("xb_3", {})
            .zzzz()
        if (!fs.existsSync(path.resolve("test/nikc_test_jplp_kplu_sdbu_2/123.json"))) {
            yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-tszn rjqt stlz msox 2")
        }
        const kplu_2 = (await new Jplp_kplu_sdbu().imfb({
            nikc_kplu: path.resolve("test/nikc_test_jplp_kplu_sdbu_1"),
            uxux: "diwr"
        })
            .catch(err => {
                yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-wyzv msox 2")
            }))
        if (!kplu_2.has("xb_1")) {
            yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-zzzz msox 1")
        }

        yo_msg_zogl_jplp_kplu_sdbu.zkrs += "(zogl afoa atvn)"

        await new Jplp_kplu_sdbu().imfb({
            nikc_kplu: path.resolve("test/nikc_test_jplp_kplu_sdbu_4"),
            uxux: "diwr"
        })
            .then(res => {
                const wm = res.find(yg1 => yg1 === 3)
                if (wm[0] != 'vn3' || wm[1] != 3) {
                    yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl find msox")
                }
            })
            .catch(err => {
                yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-find msox")
            })


        await new Jplp_kplu_sdbu().imfb({
            nikc_kplu: path.resolve("test/nikc_test_jplp_kplu_sdbu_1"),
            uxux: "diwr"
        })
            .then(res => {
                res.set("zogl_map", { rj: "zogl_map" })
                const vnwm_1 = res.map(rn1 => rn1.rj)
                if (!vnwm_1.includes("zogl_map")) {
                    yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl map msox")
                }
            })
            .catch(err => {
                yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-map msox")
            })

        await new Jplp_kplu_sdbu().imfb({
            nikc_kplu: path.resolve("test/nikc_test_jplp_kplu_sdbu_1"),
            uxux: "diwr"
        })
            .then(res => {
                res.set("zogl_forEach", { rj: "zogl_forEach" })
                const vnwm_1 = []
                res.forEach(rn1 => vnwm_1.push(rn1.rj))
                if (!vnwm_1.includes("zogl_forEach")) {
                    yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl forEach msox")
                }
            })
            .catch(err => {
                yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-forEach msox")
            })

        await new Jplp_kplu_sdbu().imfb({
            nikc_kplu: path.resolve("test/nikc_test_jplp_kplu_sdbu_1"),
            uxux: "diwr"
        })
            .then(res => {
                res.set("zogl_filter", { rj: "zogl_filter" })
                    .set("zogl_filter_2", { rj: "zogl_filter_2" })
                    .set("zogl_filter_3", { rj: "zogl_filter_3" })

                const di_1 = res.filter(rn1 => (rn1.rj === "zogl_filter_2"))
                if (Object.keys(di_1).length != 1 || di_1.zogl_filter_2.rj !== ("zogl_filter_2")) {
                    yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl filter msox")
                    console.log(vnwm_1)//
                }
            })
            .catch(err => {
                yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-forEach msox")
            })
        await new Jplp_kplu_sdbu().imfb({
            nikc_kplu: path.resolve("test/nikc_test_jplp_kplu_sdbu_1"),
            uxux: "diwr"
        })
            .then(res => {
                res.set("zogl_filter_and_map", { rj: "zogl_filter_and_map" })
                    .set("zogl_filter_and_map_2", { rj: "zogl_filter_and_map_2" })
                    .set("zogl_filter_and_map_3", { rj: "zogl_filter_and_map_3" })

                const wm = res.filter_and_map(rn1 => (rn1.rj === "zogl_filter_and_map_2"), rn1 => rn1.rj + "-udao")
                if (Object.keys(wm).length != 1 || wm[0] !== ("zogl_filter_and_map_2-udao")) {
                    yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl filter and map atvn msox")
                    console.log(wm)
                }
            })
            .catch(err => {
                yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-filter and map msox")
            })


        await new Jplp_kplu_sdbu().imfb({
            nikc_kplu: path.resolve("test/nikc_test_jplp_kplu_sdbu_zv_vnwm_uxux_1"),
            uxux: "vnwm"
        })
            .then(res => {
                res.push({ rj: "zogl_filter" })
                    .push({ rj: "zogl_filter_2" })
                    .push({ rj: "zogl_filter_3" })

                const di_1 = res.filter(rn1 => (rn1.rj === "zogl_filter_2"))
                if (Object.keys(di_1).length != 1 || di_1[0].rj !== ("zogl_filter_2")) {
                    yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl filter msox")
                }
            })
            .catch(err => {
                yo_msg_zogl_jplp_kplu_sdbu.addErr("csrf-zogl jplp_kplu_sdbu ux msox-vnwm uxux filter msox")
            })


    }//zogl_jplp_kplu_sdbu
    await zogl_jplp_kplu_sdbu().catch(err => {
        console.error(err)
    })
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

    const diwr_yhld_3 = vbyt_lr_diwr_bqeo_stst_va({ h: 89 }, null)
    const diwr_yhld_4 = vbyt_lr_diwr_bqeo_stst_va(null, { h: 89 })
    if (!/null/.test(diwr_yhld_3.getErr().map(rn1 => rn1.err))) {
        diwr_msg.addErr('csrf- zogl vbyt_lr_diwr_bqeo_stst_va yh null_ mcvn hqtz pc ms-')
    }
    if (!/null/.test(diwr_yhld_4.getErr().map(rn1 => rn1.err))) {
        diwr_msg.addErr('csrf- zogl vbyt_lr_diwr_bqeo_stst_va yh null_ mcvn hqtz pc ms 2-')
    }
    const diwr_yhld_5 = vbyt_lr_diwr_bqeo_stst_va({ f: { f: 9 } }, diwr_qgl_zf_zv_rn, {
        ok_ar_wfqq_livn: 10
    })

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
    // zogl Jc_znn_ll_aol
    const Jc_znn_ll_aol = require("./jc-znn-ll-aol")
    new Jc_znn_ll_aol()
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

    const rj_6 = '--vn 17518573346893999999999999999999'
    diwr_msg_mcvn_parser.zkrs = `const rj_6 = '--vn 17518573346893999999999999999999'`
    diwr_msg_mcvn_parser.addVxn(vbyt_lr_diwr_bqeo_stst_va(yargsParser(rj_6).options(options).parse(), mcvn_parser(rj_6).options(options).parse()))

    const rj_7 = '--vn 17518573346'
    diwr_msg_mcvn_parser.zkrs = `const rj_6 = '--vn 17518573346'`
    diwr_msg_mcvn_parser.addVxn(vbyt_lr_diwr_bqeo_stst_va(yargsParser(rj_7).options(options).parse(), mcvn_parser(rj_7).options(options).parse()))

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
    zjzj_arrC(arrC)
    // zogl commd dk opr tsjq.
    const tsjq_vcmi_zjzj = require('./zogl_atvn/tsjq_vcmi_zjzj.js')
    tsjq_vcmi_zjzj()

    // zogl yndf
    new Tsjq_zogl({
        zkrs: "zogl hese ux mr atvn"
        , nikc: path.resolve("hese-zogl")
    }).zogl()
    // zogl diwr
    const diwr_pzva_ussk_ss_zhvt = require('./diwr_pzva_ussk_ss_zhvt.js');
    const yo_msg_diwr_pzva_ussk_ss_zhvt_zogl = new Diwr_err('zogl diwr_pzva_ussk_ss_zhvt')
    diwr_msg.addVxn(yo_msg_diwr_pzva_ussk_ss_zhvt_zogl)
    new Map()
        .set(
            (jtyj) => {
                if (jtyj['h'] !== 9) {
                    yo_msg_diwr_pzva_ussk_ss_zhvt_zogl.addErr('pzva zhvt nkme')
                }
            },
            diwr_pzva_ussk_ss_zhvt(["h", "j"], { h: 9 })
        ).set((jtyj) => {
            if (jtyj['j'] !== 8) {
                yo_msg_diwr_pzva_ussk_ss_zhvt_zogl.addErr('pzva zhvt zv ymwu hqtz nkme')
            }

        }, diwr_pzva_ussk_ss_zhvt(["h"], { h: 8 }, { ymwu: { h: 'j' } }))
        .forEach((rn1, atvn) => {
            atvn(rn1)
        })
    // zogl fd sfxz
    const yo_msg_zogl_fd_sfxz = ncn_msg_yoch("zogl Fd_sfxz")
    const Fd_sfxz = require("./Fd_sfxz")
    async function zogl_fd_sfxz() {//zogl_fd_sfxz
        new Map()
            .set(new Fd_sfxz().rzvo({ vn_fd: 3 }), (jtyj) => {
                if (jtyj.get_all().length !== 3) {
                    yo_msg_zogl_fd_sfxz.addErr("csrf-jtyj hpmi msox zv zogl fd sfxz zd-" + jtyj.get_all().length)
                }
            })
            .forEach((rn1, fo1) => { rn1(fo1) })
    }//zogl_fd_sfxz 
    await zogl_fd_sfxz().catch(e => {
        yo_msg_zogl_fd_sfxz.addErr("csrf-umdy yizi msox, zogl fd_sfxz zd-" + e.message || e)
    })
    // zogl wrvr ux bq n atvn
    const yo_msg_zogl_wrvr = ncn_msg_yoch("zogl wrvr")
    const wrvrJplp = require("./KPLU/wrvr")
    const zogl_wrvr = async () => {//zogl_wrvr
        yo_msg_zogl_wrvr.zkrs += "(sfxz_fs)"
        new Map()
            .set(wrvrJplp.sfxz_fs("zf w wjdk mf."),
                (rj_1) => {
                    if (!/<span[\s\S]*<span[\s\S]*<span[\s\S]*<span/.test(rj_1)) {
                        yo_msg_zogl_wrvr.addErr("csrf-sfxz_fs msox 1-")
                    }

                })
            .set(wrvrJplp.sfxz_fs("<ul></ul><h1>zf w wjdk mf</h1>", { uxux: "html" })
                , (rj_1) => {
                    if (!/<\/ul>/.test(rj_1)) {
                        yo_msg_zogl_wrvr.addErr("csrf-sfxz_fs msox 2-")
                    }

                })
            .set(wrvrJplp.sfxz_fs(`
<ul>
<li><a href="/vtn/jttb_1">xbiw-jttb</a></li>
<li><a href="/vtn/jttb_3">zdti-jttb</a></li>
<li><a href="/vtn/jttb_5">rdeb-jttb</a></li>
<li><a href="/vtn/jttb_7">fdux-jttb</a></li>
<li><a href="/vtn/jttb_9">hiyb-jttb</a></li>
</ul>`, { uxux: "html" })
                , (rj_1) => {
                    if (/xbiw-jttb/.test(rj_1)) {
                        yo_msg_zogl_wrvr.addErr("csrf-sfxz_fs msox 3-")
                    }

                })

            .forEach((rn1, fo1) => {
                rn1(fo1)
            })

    }//zogl_wrvr
    await zogl_wrvr().catch(e => {
        yo_msg_zogl_wrvr.addErr("csrf-zogl wrvr cfrs yh umdy ac ah ub msox-" + (e.message || e))
    })


    // zogl Vn_ah_rjm_fs
    const yo_msg_zogl_vn_ah_rjm_fs = ncn_msg_yoch("zogl vn ah rjm fs")
    const yo_yn_ah_rjm_fs = new Vn_ah_rjm_fs({
        eytr_kp: "byte",
        uxux: "ictb_vvti",
    })
    if (yo_yn_ah_rjm_fs.vdum(7810).yg != 7.627) {
        yo_msg_zogl_vn_ah_rjm_fs.addErr("csrf-vn ah rjm fs agvn msox")
    }
    yo_yn_ah_rjm_fs.rzvo({
        uxux: "dmbu_vvti",
        eytr_kp: "mm",
    })
    if (yo_yn_ah_rjm_fs.vdum(1000).yg !== 1) {
        yo_msg_zogl_vn_ah_rjm_fs.addErr("csrf-vn ah rjm fs msox zv dmbu vvti ldrg msox-")
    }

    if (!/1 *m/.test(yo_yn_ah_rjm_fs.vdum_string(1000))) {
        yo_msg_zogl_vn_ah_rjm_fs.addErr("csrf-vn ah rjm fs msox zv dmbu vvti vdum string uxux msox-")
    }
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
    const Jcbz_hfbc_rjyf_mcvn = require('./KPLU/wrvr/atvn/jcbz_hfbc_rjyf_mcvn.js');
    const rj_1 = `
ss[dfaf](D:\\dffs\\dsf/jj)
ss[dfaf](D:\\dffs\\dsf/jdj)
asfaf
ss[dfaf](D:\\dffs\\dsf/jjs)`
    const rj_2 = md_bqeo_ld_html(rj_1)
    if (/\\/.test(rj_2)) {
        console.error(`csrf-err: zogl msox: md ld html msox`)
    }
    // zogl tsjq_yxna_hfbc
    const tsjq_yxna_hfbc = require('./tsjq-yxna-hfbc')
    const yoch_msg_tsjq_yxna_hfbc = new Diwr_err('zogl tsjq_yxna_hfbc')
    diwr_msg.addVxn(yoch_msg_tsjq_yxna_hfbc)
    const nikc_tsjq_yxna_hfbc_zogl = path.resolve('./test/tsjq_yxna_hfbc_zogl')
    if (!fs.existsSync(nikc_tsjq_yxna_hfbc_zogl)) {
        fs.mkdirSync(nikc_tsjq_yxna_hfbc_zogl)
    } else {
        hd_rjqt_tum(nikc_tsjq_yxna_hfbc_zogl)
    }
    ngnc_nikc_fywy_diwr({
        'tsjq-1.js': "module.exports=1",
        'tsjq-2.js': "module.exports=2",
    }, nikc_tsjq_yxna_hfbc_zogl)
    function zogl_zuwl(any_1, wlba = () => { }) {
        wlba()
    }

    zogl_zuwl(
        tsjq_yxna_hfbc(nikc_tsjq_yxna_hfbc_zogl, 'tsjq_yxna_hfbc_zogl.js', { is_relative_path_mode: true })
        ,
        () => {
            const rj_1 = fs.readFileSync(path.join(nikc_tsjq_yxna_hfbc_zogl, '..', 'tsjq_yxna_hfbc_zogl.js')).toString().match(/require\((?:"|')([^\n'"]*)(?:"|')\)/i)?.[1]
            if (path.isAbsolute(rj_1)) {
                yoch_msg_tsjq_yxna_hfbc.addErr('csrf-relative mode nkme-')
            }
            require(path.join(nikc_tsjq_yxna_hfbc_zogl, '..', 'tsjq_yxna_hfbc_zogl.js'))
        }
    )

    // zogl Jcbz_hfbc_rjyf_mcvn
    const yo_msg_Jcbz_hfbc_rjyf_mcvn = new Diwr_err('zkrs - Jcbz_hfbc_rjyf_mcvn')
    const yf = require('./KPLU/wrvr/yf.json')

    const ytm_yf = {
        nou: "nu",
        yau: "yu",
        lou: "lu",
    }
    const eysj_nomr_rjyf = {
        no: "nəʊ",
        mo: "məʊ",
        ji: "ʤi"
    }
    const eysj_ll_yf = {
        ge: "ge",
        he: "he",
        re: "re",
        ke: "ke",
        fe: "fe",
        ne: "ne",
        pe: "pe",
        le: "le"
    }
    const ll_ae_ds_n_ztka = {
        ny: 'nai',
        vy: 'vai',
        // zk: 'zik'
    }
    const eysj_ds_rjyf = {
        // zk: 'zik'
        py: "pai",
        zd: "zid",
        th: "θ",
        dn: "dn",
        jr: "ʤәr",
    }
    const eysj_yhti_rjyf = {
        // zk: 'zik'
        py: "pai",
        zd: "zid",
        th: "θ",
        dn: "dn",
        jr: "ʤәr",
    }
    const lr_zt_rjyf = {
        'lu': 'lu'
    }
    const diwr_mcvn_zogl = {
        eysj_ds_rjyf,
        eysj_ll_yf,
        eysj_nomr_rjyf,
        ll_ae_ds_n_ztka,
        ytm_yf,
        eysj_yhti_rjyf,
        lr_zt_rjyf,
        yf
    }
    const bmee_yhld = Object.assign({}, diwr_mcvn_zogl.eysj_ll_yf)
    const yo_zogl_yoch = new Jcbz_hfbc_rjyf_mcvn(diwr_mcvn_zogl)
    yo_zogl_yoch.hfbc_rjyf_mcvn()
    if (vbyt_lr_diwr_bqeo_stst_va(bmee_yhld, diwr_mcvn_zogl.eysj_ll_yf).isOk()) {
        yo_msg_Jcbz_hfbc_rjyf_mcvn.addErr('csrf-zogl hfbc msox-')
    }

    // zogl vcmi_dreq_diwr
    const Vcmi_dreq_diwr = require('./vcmi_dreq_diwr.js');
    const yo_msg_vcmi_dreq_diwr = new Diwr_err('zogl vcmi_dreq_diwr')
    diwr_msg.addVxn(yo_msg_vcmi_dreq_diwr)
    const zjzj_vcmi_dreq_zv_yj_y_v = (diwr_mcvn = {}, wlba_epqt = (fo, yg) => true, trl_wfqq_livn = 0, diwr_trl_nixb = [{ h: 0 }]) => {
        const jtyj = new Vcmi_dreq_diwr(diwr_mcvn).dreq_noph(wlba_epqt)
        if (jtyj.vn_wfqq_livn != trl_wfqq_livn) {
            yo_msg_vcmi_dreq_diwr.addErr('csrf-wfqq livn pc ms-' + `${jtyj.vn_wfqq_livn}-kp-${jtyj.vn_wfqq_livn}!=${trl_wfqq_livn}`)
        }
        if (!vbyt_lr_diwr_bqeo_stst_va(diwr_trl_nixb, jtyj.vnwm_nixb).isOk()) {
            yo_msg_vcmi_dreq_diwr.addErr('csrf-wfqq dreq pc ms')
        }
    }

    const zjzj_vcmi_dreq_zv_yj_non_ph = (diwr_mcvn = {}, wlba_epqt = (fo, yg) => true, trl_wfqq_livn = 0, diwr_trl_nixb = [{ h: 0 }], neig_kp = {}) => {
        const neig = Object.assign({
            neig_kp
            , ao_pc_ms: false
            , mcvn_prwf: {}
            , wlba_yndf_wdbu: (jtyj) => { }
        }, neig_kp)
        const jtyj = (() => {
            try {
                return new Vcmi_dreq_diwr(diwr_mcvn).qi_neig(neig.mcvn_prwf).dreq_noph(wlba_epqt)
            } catch (err) {
                if (neig.ao_pc_ms) {
                    neig.w_pc_ms = true
                } else {
                    throw err
                }
            }
        })()
        if (neig.ao_pc_ms && !neig.w_pc_ms) {
            yo_msg_vcmi_dreq_diwr.addErr(`csrf-ao pc ms kqgq so ms n k y msox-`)
        } else if (neig.ao_pc_ms) {
            return
        }
        if (jtyj.vn_wfqq_livn != trl_wfqq_livn) {
            yo_msg_vcmi_dreq_diwr.addErr('csrf-wfqq livn pc ms-' + `${jtyj.vn_wfqq_livn}-kp-${jtyj.vn_wfqq_livn}!=${trl_wfqq_livn}`)
        }
        diwr_trl_nixb.forEach(rn1 => {
            Object.entries(rn1).forEach(([fo1, yg1]) => {
                const yhld_nixb = jtyj.vnwm_nixb.find(rn1 => Object.keys(rn1)[0] === fo1)
                if (yhld_nixb) {
                    if (!vbyt_lr_diwr_bqeo_stst_va({ [fo1]: yg1 }, yhld_nixb).isOk()) {
                        yo_msg_vcmi_dreq_diwr.addErr('csrf-wfqq dreq n yg ac frgr trzn yg-')
                    }
                }
                else {
                    yo_msg_vcmi_dreq_diwr.addErr('csrf-wfqq dreq hqtz ac frgr trzn key msox-')
                }
            })
        })
        neig.wlba_yndf_wdbu(jtyj)
    }
    zjzj_vcmi_dreq_zv_yj_y_v({ h: 8, j: { j: { j: { h: 18 } } } }, (fo, yg) => yg === 18, 3, [{ h: 18 }])
    zjzj_vcmi_dreq_zv_yj_y_v({ h: 8, j: { j: { h: 18 } } }, (fo, yg) => yg === 18, 2, [{ h: 18 }])
    zjzj_vcmi_dreq_zv_yj_y_v({ h: 8, j: { h: 18 } }, (fo, yg) => yg === 18, 1, [{ h: 18 }])

    zjzj_vcmi_dreq_zv_yj_non_ph({ k: 18, j: { h: 18 } }, (fo, yg) => yg === 18, 1, [{ h: 18 }, { k: 18 }])
    zjzj_vcmi_dreq_zv_yj_non_ph({ k: 18, j: { j: { h: 18 } } }, (fo, yg) => yg === 18, 2, [{ h: 18 }, { k: 18 }])
    zjzj_vcmi_dreq_zv_yj_non_ph({ l: { k: 18 }, j: { h: 18 } }, (fo, yg) => yg === 18, 2, [{ h: 18 }, { k: 18 }])

    zjzj_vcmi_dreq_zv_yj_non_ph({ l: { k: 18 }, j: { h: 18 } }, (fo, yg) => yg === 'yj-ac-ab', 2, [])
    zjzj_vcmi_dreq_zv_yj_non_ph(diwr_qgl_zf_zv_rn, (fo, yg) => yg === 'yj-ac-ab', 2, [], { ao_pc_ms: true })
    zjzj_vcmi_dreq_zv_yj_non_ph(diwr_qgl_zf_zv_rn, (fo, yg) => yg === 'yj-ac-ab', 11, [], { mcvn_prwf: { ok_ar_wfqq_livn: 10, xcmj_so_um_zv_szl: true } })
    zjzj_vcmi_dreq_zv_yj_non_ph({ l: null, j: { h: 18 } }, (fo, yg) => yg === 'yj-ac-ab', 1, [])
    zjzj_vcmi_dreq_zv_yj_non_ph({ l: { h: null }, j: { h: 18 } }, (fo, yg) => yg === 'yj-ac-ab', 2, [])
    zjzj_vcmi_dreq_zv_yj_non_ph({ l: { l: 23 }, j: { h: 18 } }, (fo, yg) => yg === 'yj-ac-ab', 2, [], {
        wlba_yndf_wdbu: (jtyj) => {
            if (jtyj.di_wm_nixb_kl.length) {
                yo_msg_vcmi_dreq_diwr.addErr('csrf-vcmi dreq zv nixb kl zzzz pc ms-')
            }
        }
    })

    // zogl seyy neig eopc va
    const yo_msg_zogl_seyy_neig = ncn_msg_yoch("zogl seyy neig")
    const wrm_seyy_neig = require("./nwvtSeyyNeig.js")
    const vnwm_ft_pj_pzva = Object.entries(wrm_seyy_neig).filter(([fo1, yg1]) => {
        return !['yndf_mcvn', 'whiteList', 'ac_oan_rfrf_wrvr', 'se_vlm_dyvy'].includes(fo1)
    })
    if (vnwm_ft_pj_pzva.length > 0) {
        yo_msg_zogl_seyy_neig.addErr(`csrf-seyy neig efpc ft pj pzva-${vnwm_ft_pj_pzva.map(rn1 => rn1[0]).join(",")}`)
    }
    // zogl ztfr_magm
    const yo_msg_zogl_ztfr_magm = ncn_msg_yoch("zogl ztfr magm")
    if (ztfr_magm("hjkl", "hjka") != 11) {
        yo_msg_zogl_ztfr_magm.addErr("ztfr magm msox")
    }
    if (ztfr_magm("hjkl", "hjkl") != 0) {
        yo_msg_zogl_ztfr_magm.addErr("ztfr magm msox zv yf rn msox")
    }
    if (ztfr_magm("hjka", "hjkl") != -11) {
        yo_msg_zogl_ztfr_magm.addErr("ztfr magm msox zv vy")
    }
    new Set().add(
        ["abc", "addda", "abc", "addd"]
        , ["abc", "addd", "abc", "addda"]
        , ["c", "ddddabc", "ccabc", "ccaabc", "d"]
        , ["a", "b", "c", "d"]
        , ["d", "c", "b", "a"]
        , ["c", "d", "a", "b"]).forEach(rn1 => {
            const jtyj_1 = rn1.slice().sort((a, b) => ztfr_magm(a, b))
            const jtyj_2 = rn1.slice().sort()
            if (jtyj_1.toString() != jtyj_2.toString()) {
                console.log(jtyj_1)
                console.log(jtyj_2)
                yo_msg_zogl_ztfr_magm.addErr("ztfr magm msox zv vnwm magm msox")
            }
        })
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

    // zogl Reg_bx
    const yo_msg_zogl_reg_bx = ncn_msg_yoch("zogl reg bx")
    const yo_reg_bx = new Reg_bx()
    if (yo_reg_bx.zjzj_udao_uxux("wu.mp4") != "wphh") {
        yo_msg_zogl_reg_bx.addErr("csrf-zogl reg bx msox zv zjzj udao uxux msox")
    }
    if (yo_reg_bx.zjzj_udao_uxux("wu.mp4eee").length != 0) {
        yo_msg_zogl_reg_bx.addErr("csrf-zogl reg bx msox zv zjzj udao uxux lh yndf zd msox")
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

    // ctm ld cxl lh ypn zogl
    const yo_msg_ctm_ld_cxl_lh_ypn = ncn_msg_yoch("ctm ld cxl lh ypn zogl")
    const wrm_xb_11 = { lb: 3, xb: 11 }
    new Map()
        .set(ctm_ld_cxl_lh_ypn(new Map()
            .set({ lb: 1, xb: 1 }, new Map()
                .set({ lb: 2, xb: 11 }, new Map()
                    .set(wrm_xb_11, "lb-3-bqeo-1")
                    .set({ lb: 3, xb: 11 }, "lb-3-bqeo-2")
                    .set({ lb: 3, xb: 11 }, "lb-3-bqeo-3")
                ).set({ lb: 2, xb: 12 }, new Map()
                    .set({ lb: 3, xb: 12 }, "lb-3-bqeo-1")
                    .set({ lb: 3, xb: 12 }, "lb-3-bqeo-2")
                    .set({ lb: 3, xb: 12 }, "lb-3-bqeo-3")
                )
            )
            .set({ lb: 1, xb: 2 }, new Map()
                .set({ lb: 2 }, new Map()
                    .set({ lb: 3, xb: 21 }, "lb-3-bqeo-1")
                    .set({ lb: 3, xb: 21 }, "lb-3-bqeo-2")
                    .set({ lb: 3, xb: 21 }, "lb-3-bqeo-3")
                )
            ).set({ lb: 1, xb: 3 }, new Map()
                .set({ lb: 2 }, new Map()
                    .set({ lb: 3, xb: 31 }, "lb-3-bqeo-1")
                    .set({ lb: 3, xb: 31 }, "lb-3-bqeo-2")
                    .set({ lb: 3, xb: 31 }, "lb-3-bqeo-3")
                )
            )
        )
            , (jtyj) => {
                if (!jtyj.some(rn1 => rn1.has(wrm_xb_11))) {
                    yo_msg_ctm_ld_cxl_lh_ypn.addErr("csrf-ctm ld cxl lh ypn msox zv fo dank-")
                }
                if (jtyj.length !== 8) {
                    yo_msg_ctm_ld_cxl_lh_ypn.addErr("csrf-ctm ld cxl lh ypn msox zv lb vn msox-")
                }
            })
        .forEach((yg, fo) => yg(fo))

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
            // if (diwr_jtyj[rfrf('nori')])
            //     delete diwr_jtyj[rfrf('nori')]
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
        , { bv_nori: false })
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
    }, { ce_wu: 'haha', bv_nori: false })
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
    }, { dg_cf: true, bv_nori: false })

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
    }, [
        { one_1: ['one_1_1', 'one_1_2', 'one_1_3'] },
        {
            one_1_1: ['one_1', 'one_1_1_2'],
            one_1_2: ['one_1', 'one_1_1_2'],
            one_1_3: ['one_1', 'one_1_1_2']
        },
        {
            one_1: "1"
            , one_1_1_2: '2'
        },
        {
            one_1: "1"
            , one_1_1_2: '2'
        },
        {
            one_1: "1"
            , one_1_1_2: '2'
        },
    ], { vdum: "di_wm" })

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
            if (jtyj !== '255') {
                yo_msg_fo_ussk_zogl.addErr('csrf-fo ussk fo hqtz msox-')
            }
        }, fo_ussk([['a1', (rj) => "1" + rj], ['a2', (rj) => "2" + rj]]).set_hqtz('fo').vdum({ a2: '55' })],
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

    // zogl ussk_atvn
    const yo_msg_yogl_ussk_atvn = ncn_msg_yoch("zogl ussk atvn")
    new Map().set(ussk_atvn(new Map().set("ni-1", () => 1)
        .set(["ni-2", "ni-2.1"], () => 2)).vdum("ni-1"), (yg) => {
            if (yg != 1) {
                yo_msg_yogl_ussk_atvn.addErr("csrf-zogl ussk atvn msox zv hese cqpi msox-")
            }
        }).set(ussk_atvn(new Map().set("ni-1", () => 1)
            .set(["ni-2", "ni-2.1"], () => 2)).vdum("ni-2.1"), (yg) => {
                if (yg != 2) {
                    yo_msg_yogl_ussk_atvn.addErr("csrf-zogl ussk atvn msox zv cgne cqpi msox-")
                }
            }).forEach((rn1, fo1) => rn1(fo1))
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
}//afoa_zogl
afoa_zogl()
    .then(res => {
        // log("h", diwr_msg.isOk())//
        if (diwr_msg.isOk()) {
            console.log("Done - " + diwr_msg.zkrs)
        } else {
            console.log(diwr_msg.getStack())
        }
    }).catch(e => {
        if (e && e.stack) {
            e.message = "afoa zogl - ac ah ub msox" + e.message
            e.stack += "\nld jp msox\n" + new Error().stack
        }
        console.error(e)
    })

function log(...mcvn) {
    console.log(...mcvn)
}