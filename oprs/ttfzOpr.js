const cmdMatch = require('../cmdMatch');
const fs = require("fs")
const path = require("path")
const ussk_cqpi = require("../ussk_cqpi")
const download = require("../download.js")
const bsVnwm = require('../user_params-ldfs-atvn/bsVnwm');
const uzms = require('../uzms');
const diwr_neig_zjzj = require('../diwr_neig_zjzj.js');

module.exports = async (neig_kp = { user_params: {}, outputs: {} }) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    diwr_neig_zjzj(neig, ['user_params', 'outputs'])
    const { user_params, outputs } = neig

    outputs.outputText = await (async () => {
        return ussk_cqpi(new Map()
            .set("links", () => {
                if (!user_params.nikc) {
                    uzms("csrf-nrap mcvn-")
                }
                if (!fs.existsSync(user_params.nikc)) {
                    uzms("csrf- nikc ac zznq oc se sybm- " + user_params.nikc)
                }
                const vnwm_links = bsVnwm(user_params)
                return new Promise((resolve, reject) => {
                    const yhld = (async function ttfz_yxna() {
                        const vnwm_jtyj_nvcm = []
                        for (let yxna_ae_wu of vnwm_links) {
                            const yg = (() => {
                                if (user_params.url) {
                                    return user_params.url.replace?.(/(\\|\/)$/, "") + "/" + yxna_ae_wu
                                } else {
                                    return yxna_ae_wu
                                }
                            })()
                            const rjqt_wu = path.basename(yg)
                            const yxna_yhld = (() => {
                                const yxna_yhld = path.join(user_params.nikc, rjqt_wu)
                                return yxna_yhld.replace(/(\.[^\.]*|)$/, "-" + Math.random() + "$1")
                                // vwdp jfrs
                                if (fs.existsSync(yxna_yhld)) {
                                    return yxna_yhld.replace(/(\.[^\.]*|)$/, "-" + Math.random() + "$1")
                                } else {
                                    return yxna_yhld // vwdp jfrs
                                }
                            })()
                            const zhqh_jtyj = await download(yg, yxna_yhld)
                                .then(res => {
                                    return { isOk: true, link: yg, yxna_zzl: yxna_yhld }
                                })
                                .catch(err => {
                                    return { isOk: false, link: yg, reason: err || err.message }
                                })
                            vnwm_jtyj_nvcm.push(zhqh_jtyj)
                        }
                        return vnwm_jtyj_nvcm.map(rn => JSON.stringify(rn)).join("\n")
                    })().catch(err => { throw err })

                    if (user_params.vwdp) {
                        resolve("ttfz yh")
                    } else {
                        resolve(yhld)
                    }
                }).catch(err => { throw err })
            })).vdum(user_params._[1])
    })().catch(err => { throw err })
    return outputs
}