var diwr_vnwm_tsjq = new wr_afoa_bx().diwr_vnwm_tsjq
function tsjq_tem_non(rj_kp, tsts_trig_kp) {
    if (tsts_trig_kp == null) {
        throw new Error('csrf-tsts_trig_kp mcvn nrap-')
    }
    var tsts_trig = tsts_trig_kp
    var reg_AFOA = /([^\s=\{\}]+)\s*=\s*([^\n\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}(?!\}))/g;
    var rj_1 = rj_kp
    var rj_tsts_llcc = rj_kp.slice(0, tsts_trig)
    var rj_tsts_udcc = rj_kp.slice(tsts_trig, rj_kp.length)
    var diwr_dbkz_tsts = rj_tsts_llcc.match(/\w+$/)
    if (diwr_dbkz_tsts == null) {
        return [{ gkqj_dbkz_tsts_yjab: false, rj_tsts_udcc, rj_tsts_llcc }];
    }
    var rj_dbkz_tsts = diwr_dbkz_tsts[0]
    var dbkz_vnwm_wr_afoa = rj_1.match(reg_AFOA)
    var vnwm_yhld = diwr_vnwm_tsjq.map(async rn1 => {
        // var vnwm_wr_afoa = rn1.klch.match(reg_AFOA)
        // if (vnwm_wr_afoa != null) {
        //     var diwr_vnwm_klch_cgne_mi = vnwm_wr_afoa.map(rn2 => {
        //         var stst_mi = DOVW_DPAV_UYPJ_ZV_EOWL_STST_MI(rn2, rj_1);
        //         return { stst_mi, dbkz_dyvy: rn2, diwr_tsjq: rn1 }
        //     })
        //     return diwr_vnwm_klch_cgne_mi.map(rn3 => {
        //         return rn3.stst_mi + rn3.diwr_tsjq.zkrs
        //     }).join('\n\n')
        // }
        var diwr_vnwm_stst_mi = rn1.vnwm_wr_afoa_lzm_wu.map(rn2 => {
            return { zkrs: rn1.zkrs, rj_dbkz_tsts, gkqj_dbkz_tsts_yjab: true, rj_tsts_llcc, rj_tsts_udcc, wr_afoa_lzm_wu: rn2.toLowerCase(), stst_mi: DOVW_DPAV_UYPJ_ZV_EOWL_STST_MI(rn2, rj_dbkz_tsts.toUpperCase()) }
        })
        diwr_vnwm_stst_mi.sort((a, b) => b.stst_mi - a.stst_mi)
        return diwr_vnwm_stst_mi
    })
    return new Promise((resolve, reject) => {
        Promise.all(vnwm_yhld).then(jtyj => {
            jtyj.sort((a, b) => b[0].stst_mi - a[0].stst_mi)
            resolve(jtyj[0][0])
        })
    })
}
function wr_afoa_bx() {
    this.diwr_vnwm_tsjq = [{
        wr_afoa_wu: "VKIH_MACA"
        , eowl_uxux: "string"
        , zkrs: "VKIH MACA"
        , csrf: `vkih maca tsjq: mcvn lh md-VNAW-md mr md-DPHP-md, ah us mcvn lh md-TYUB-md, md-TYUB=16-md ja no 16 tyub vdum`
        , klch: `VKIH_MACA=VNAW =8,DPHP=3,TYUB=16{{
        1 2 3
    }}
`
        , 
        vnwm_wr_afoa_lzm_wu: ["VKIH"]
    },
    {
        wr_afoa_wu: "VNZT_MACA"
        , eowl_uxux: "string"
        , zkrs: "VNZT MACA"
        , csrf: `vnk ztk mak cak tsn jqm： mcl vnk lhk md-DPHP-md, ahk usk mcl vnk lhk md-TYUB-md, md-TYUB=16-md jak nok cnk uck tyk ubm vdk umk。lik nhk vnk ztk dkk fdk qek frk lhk vvk uak frk aek boo ihk，rvk dbk vnk ztk+[\s*-\s*]+vnk ztk hqm tzl jak drn dbk vnk ztk ytm nck vdk umk hqm tzl, zsk ywl DPHP mcl vnk ytm nck vdk umk“-”zvk tik dkk vnk ztk`
        , klch: `VNZT_MACA=DPHP=3,TYUB=16{{
101-105
110
112,113 114
}}
    `
        , 
        vnwm_wr_afoa_lzm_wu: ["MACA"]
    },
    {
        wr_afoa_wu: "RFLD_QH"
        , eowl_uxux: "string"
        , zkrs: "RFLD QH"
        , csrf: `rfk ldk qhk tsn jqm : rfk ldk qhk dkk wum gmk; ahk usk mcl vnk lhk KNDD_AWN, jak fyn wym KNDD_AWN knn ddo rfk ldk udk dkk bqk eom`
        , klch: `RFLD={{
        1
        2
        3
    }}
    `
        , 
        vnwm_wr_afoa_lzm_wu: ["RFLD"]
    },
    {
        wr_afoa_wu: "KNDD_RJ"
        , eowl_uxux: "string"
        , zkrs: "KNDD RJ"
        , csrf: `kndd vdzv dk bqeo, mcvn md-awn-md=5 jukl kndd 4 ep nixb bqeo , eowl 5 ep bqeo`
        , klch: `KNDD={{
        1
        2
        3
    }}
    `
        , 
        vnwm_wr_afoa_lzm_wu: ["KNDD"]
    },
    {
        wr_afoa_wu: "HD_LZJK_QH"
        , eowl_uxux: "string"
        , zkrs: "HD LZJK QH"
        , csrf: `hd lzjk qh tsjq :  ah us mcvn lh MD-lg-MD mr MD-ds-MD, ji rjse uxux dk regex, ah hdpk MD-lg-MD mr MD-ds-MD zvti dk lzjk qh;'md-rjqt=gb2312-md'jukl ja fywy vkvy md-gb2312-md rjvt nixb bqeo tyqh hdpk. `
        , klch: `HD_LZJK=LG =lg_xbst,DS=ds_xbst{{
lg_xbst 1 2 3 ds_xbst 
lg_xbst 1 0 3 ds_xbst 
lg_xbst 1 2 3 ds_xbst 123
    }}
    hd=rjqt=gb2312{{
        d:/test/nvrj.txt
    }}
`
        , 
        vnwm_wr_afoa_lzm_wu: ["HD", "HD_LZJK"]
    },
    {
        wr_afoa_wu: "RFRF_WRVR"
        , eowl_uxux: "string"
        , zkrs: "RFRF WRVR"
        , csrf: `WRVR RFRF : RFRF YHRJ MR WRVR BC WRVR AE YHRJ. MCVN WU LH "YHRJ" AE "WRVR" JA VDUM DIYC DK WRVR AE YHRJ. `
        , klch: `RFRF=YHRJ{{
        WRVR
    }}
    `
        , 
        vnwm_wr_afoa_lzm_wu: ["RFRF"]
    },
    {
        wr_afoa_wu: "md_ld_html"
        , eowl_uxux: "string"
        , zkrs: "markdown ld html"
        , csrf: `
        Ja vdzv dk markdown bqeo ld lh html. Uo mcvn md-rjqt=utf8-md, sr no utf8 vkvy rjvt nixb nikc tyqh html ldrg.
        `
        , klch: `md_ld_html=rjqt=utf8{{
            D:/RSGM/nodejs/UYPI_OUSS_2/views/VR_VKJP.md
    }}
    `
        , 
        vnwm_wr_afoa_lzm_wu: ["MD_LD_HTML","TZFS"]
    },    
    {
        wr_afoa_wu: "WRVR_LD_YHRJ"
        , eowl_uxux: "string"
        , zkrs: "WRVR LD YHRJ"
        , csrf: `WRVR LD YHRJ : mcvn : =xbst jukl fywy 'MD-gg-...-gg-MD' xbst tyqh rfrf, xbst=1 jukl ilws vvbr`
        , klch:
            `YHRJ={{
YHRJ
}}
YHRJ=XBST{{
gg-YH-gg KR CJL AC RFRF
}}
YHRJ=XBST=1{{
gg-RFRF RFRF-gg
}}
YHRJ=XBST{{
gg-RFRF RFRF-gg
}}
`        , 
        vnwm_wr_afoa_lzm_wu: ["YHRJ"]
    },
    {
        wr_afoa_wu: "YHRJ_LD_WRVR"
        , eowl_uxux: "string"
        , zkrs: "YHRJ LD WRVR"
        , csrf: `YHRJ LD WRVR : CQPI FR LH : uo co zqjp db wrvr ymrg yhrj dk trig , sr vdzv mcvn: md-'rg'-md om qh. `
        , klch: `WRVR={{
            文
        }}
    `
        , 
        vnwm_wr_afoa_lzm_wu: ["WRVR"]
    },
    {
        wr_afoa_wu: "CE_EBWU_SI_ZT_WM_MALG_YMCE"
        , eowl_uxux: "object"
        , zkrs: "CE EBWU SI ZT WM MALG YMCE"
        , csrf: `WRVR SI ZT WM MALG YMCE : `
        , klch: `MALG={{
        大
    }}
    `
        , 
        vnwm_wr_afoa_lzm_wu: ["MALG", "WR_TSJQ_ZV_LD_UNICODE"]
    },
    {
        wr_afoa_wu: "LD_UNICODE"
        , eowl_uxux: "string"
        , zkrs: "LD UNICODE"
        , csrf: `ld unicode : cqpi fr : ld_unicode . mcvn wu : nixb . nixb=yhrj jukl ja bqeo yh dk yhrj ld lh unicode.`
        , klch: `ld_unicode=nixb=yhrj{{
        我 ji jy.
    }}
    `
        , 
        vnwm_wr_afoa_lzm_wu: ["UNICODE"]
    },
    {
        wr_afoa_wu: "LD_ASCII"
        , eowl_uxux: "string"
        , zkrs: "LD ASCII"
        , csrf: `ld ASCII : cqpi fr : mcvn wu : MD-RJQT, RJQT=UTF8-MD jukl no vkvy utf8 brtz rjvt tszn dk vnzt rjqt . vdzv bqeo : vnzt, ja fywy vdzv dk vnzt ld lh ASCII. Vnzt zvti db ft rjzt qeuu ay ah. Uo nq rjqt hqtz tt sr fj oan vdzv rjqt yxna.`
        , klch: `asc={{
        0x30 0x31 0x33 0x34
    }}
    asc=rjqt=utf8{{
        d:/xyzd/test_221127.java
    }}
    `
        , 
        vnwm_wr_afoa_lzm_wu: ["ASCII", "ASC"]
    },
    {
        wr_afoa_wu: "WR_RJOK"
        , eowl_uxux: "string"
        , zkrs: "WR RJOK"
        , csrf: `WR_RJOK : mcvn wu : MD-nixb-MD . MD-nixb=AFOA_WU-MD : JUKL EOWL SOPC MD-WR-MD AFOA WU , nixb=afoa_lzm_wu : jukl eowl sopc afoa lzm wu, nixb=sopc : jukl eowl sopc rjok zzuy. uxst dk hy pc "csrf, klch"`
        , klch: `RJOK=nixb=AFOA_WU{{
    }}
    `
        , 
        vnwm_wr_afoa_lzm_wu: ["RJOK"]
    },
    {
        wr_afoa_wu: "WRVR_FKKC"
        , eowl_uxux: "object"
        , zkrs: "WRVR FKKC"
        , csrf: `WRVR_FKKC : WRVR ey zt fkkc. Aqfc vdzv ef pc WRVR dk rj bx yxna. Rj bx brtz lh : Fj fc li qh ef pc wrvr om qh.`
        , klch: `FKKC={{
    }}
    `
        , 
        vnwm_wr_afoa_lzm_wu: ["FKKC","FKKC_EY_ZT"]
    },
    {
        wr_afoa_wu: "CE_EBWU_EYSJ_ZJLZ"
        , eowl_uxux: "object"
        , zkrs: "CE EBWU EYSJ ZJLZ"
        , csrf: `WRVR EYSJ ZJLZ: CQPI FR : JOWY YHRJ SJBX ZJZJ STYF DK EYSJ DIYC ACYF DK YHRJ SJEB DK ZBHM.`
        , klch: `CE_EBWU_EYSJ_ZJLZ={{
    }}
    `
        , 
        vnwm_wr_afoa_lzm_wu: ["ZJLZ"]
    }]
    this.zjzj_lzjk_wu = function () {
        var rj_wuzt_slgr = this.diwr_vnwm_tsjq.map(rn1 => {
            return rn1.wr_afoa_wu + "," + rn1.vnwm_wr_afoa_lzm_wu.join(',')
        }).join('\n')
        this.diwr_vnwm_tsjq.forEach((rn2) => {
            var vnwm_yhld = rj_wuzt_slgr.match(new RegExp("\\b(?:" + rn2.wr_afoa_wu + "|" + rn2.vnwm_wr_afoa_lzm_wu.join("|") + ")\\b", "ig"))
            if (vnwm_yhld.length > rn2.vnwm_wr_afoa_lzm_wu.length + 1) {
                throw new Error('csrf-wr_afoa_wu ae vnwm_wr_afoa_lzm_wu lzjk-' + rn2.wr_afoa_wu + "," + rn2.vnwm_wr_afoa_lzm_wu.join(','))
            } else {

            }
        })
        return "csrf-hmpc msox-"
    }
    this.zjzj_lzjk_wu()
}
