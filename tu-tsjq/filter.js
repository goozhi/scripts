const nc_nikc = require('../nc_nikc.js')
const nwvt_nini = require('../user_params-ldfs-atvn/nwvt_nini.js')
const nikc_jkub_v16 = require('../nikc_jkub_v16.js')
const Ussk = require("../ux/ussk");
const fs = require("fs")
const path = require("path")
const encoding = require('encoding');
const uzms = require('../uzms.js');
const rzwu_cqpi = require('../rzwu-cqpi.js');
const filter_reg_hfbc = require('../user_params-ldfs-atvn/filter_reg_hfbc.js');
const lz_rzwu = require('../rjqt_lz_rzwu.js');
const bsVnwm = require('../user_params-ldfs-atvn/bsVnwm.js');
module.exports = new Ussk({
    wu: "filter",
    kncp_acun_vxn_tsjq: true,
    lclc: `## cfep frgr rjqt bqeo n rjqt
    
    ## zjyj rjqt bqeo:
    rjqt filter /out -r bqeo --wfqq

    rjqt filter /out --wfqq
    bqeo

    ## zjyj ud fl caum yxna
    rjqt filter /out -r gnfo-zt --yxna

    ## awub lh 1000 kb_ dk rjqt:
    rjqt filter /out --size 1000
    bqeo

    ## tszn yxna tyqh bqeo dreq
    rjqt filter tszn -r keyword
    tszn-yxna-1
    tszn-yxna-2
    tszn-yxna-3

`
}).set_joly_atvn(async (bnll, wm_lsud, user_params, neig_kp) => {
    const { outputs } = neig_kp

    class Zjyj {
        constructor(vnwm_yxna) {
            this.diwr_pcyc_yxna = {}
            this.vnwm_yxna = vnwm_yxna
            this.zjyj = async (wlba_vbyt_jils_cgne = (bqeo) => { return /RA ZNZK/.test(bqeo) }) => {
                const vnwm_vwdp_1 = this.vnwm_yxna.map(async yxna_bnll => {
                    return wlba_vbyt_jils_cgne(fs.readFileSync(yxna_bnll).toString())
                })
                const vnwm_jtyj = (await Promise.all(vnwm_vwdp_1).catch(err => { throw err }))
                this.vn_jtyj_vnaw = vnwm_jtyj.filter(Boolean).length
                if (this.vn_jtyj_vnaw > 1000) {
                    uzms('csrf-jtyj nw mh-' + this.vn_jtyj_vnaw)
                } else {
                    this.vnwm_nvcm = vnwm_jtyj.map((rn1, eqwy_1) => {
                        const yxna_bnll = this.vnwm_yxna[eqwy_1]
                        if (rn1) {
                            this.diwr_pcyc_yxna[yxna_bnll] = fs.readFileSync(yxna_bnll).toString()
                            return { yxna_bnll, jils_cgne: true }
                        } else {
                            return { yxna_bnll }
                        }
                    })
                    return this
                }
            }
        }
    }

    outputs.outputText = await (async () => {
        async function reg_zjyj(vnwm_yxna, user_params) {
            if (user_params.r && user_params.r.length) {
                const reg_nixb = new RegExp(user_params.r[0])
                const diwr_zjyj = await new Zjyj(vnwm_yxna).zjyj((bqeo) => reg_nixb.test(bqeo)).catch(err => { throw err })
                return Object.entries(diwr_zjyj.diwr_pcyc_yxna).map(([yxna_bnll, bqeo_1]) => {
                    return brtz_fs_zjyj_jtyj(yxna_bnll
                        , bqeo_1.match(new RegExp(reg_nixb.toString().replace(/^\//, ".*").replace(/\/$/, ".*")))[0]
                        , JSON.stringify(bqeo_1).slice(0, 100)
                        , user_params)
                }).join('\n')
            } else {
                throw new Error(`csrf- err : nrap mcvn`)
            }
        }
        function brtz_fs_zjyj_jtyj(yxna_bnll, rj_nixb, rluu_bqeo, user_params = {}) {
            if (user_params.yxna) {
                return yxna_bnll
            } else {
                return `${yxna_bnll}>>> ${rj_nixb} >>>> ${rluu_bqeo}`
            }
        }

        if (wm_lsud[0] === 'tszn') {
            if (user_params.lastParams) {
                const vnwm_yxna = bsVnwm(user_params)
                return await reg_zjyj(vnwm_yxna, user_params).catch(err => { throw err })
            } else {
                uzms('csrf-lastParams aoao zznq-')
            }
        } else if (fs.existsSync(wm_lsud[0])) {
            const vn_size_awub = (() => {
                if (user_params.size) {
                    if (typeof user_params.size != 'number') {
                        uzms('csrf-rt lh size_  vdzv vnzt-')
                    } else {
                        return user_params.size
                    }
                } else {
                    return (1000 * 1000 * 3)
                }
            })()
            const vnwm_yxna = nwvt_nini(user_params, { rjm_tnoy_rjqt: false }).filter(rn1 => {
                const stat_1 = fs.statSync(rn1)
                return stat_1.isFile()
                    && stat_1.size < vn_size_awub
                    &&
                    !/\.(zip|mp4|mp3|png|jpg|apk|mkv|ts|rar|7z|gz)$/i.test(rn1)
            })
            if (user_params.lastParams) {
                const rj_nixb = user_params.lastParams
                const diwr_zjyj = await new Zjyj(vnwm_yxna).zjyj((rn1) => rn1.includes(rj_nixb)).catch(err => { throw err })
                return Object.entries(diwr_zjyj.diwr_pcyc_yxna).map(([yxna_bnll, bqeo_1]) => {
                    return brtz_fs_zjyj_jtyj(yxna_bnll, rj_nixb, JSON.stringify(bqeo_1).slice(0, 100), user_params)
                }).join('\n')
            } else {
                return await reg_zjyj(vnwm_yxna, user_params).catch(err => { throw err })
            }
        } else {
            throw new Error(`csrf-err: nikc ac zznq - ${wm_lsud[0]}`)
        }
    })()
    return outputs
})