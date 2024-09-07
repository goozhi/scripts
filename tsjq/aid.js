const cmdMatch = require('../cmdMatch');
const bsVnwm = require('../user_params-ldfs-atvn/bsVnwm');
const uzms = require('../uzms');
module.exports = [['aid'], {
    describe: `Ask for help
            examples:
            aid
            cc

            aid -l all

            aid -l keys

            aid --dreq regex-keyword

            ## sc tt rluu cgne n mb tt tszn qh vn
            aid --dreq keyword --rluu 5

            ## ncar nixb n klvq
            aid --dreq keyword --ncar 5
            `,
    func: async (user_params = { lastParams: "", list: false }, outputs = { outputText: "" }, options = { mapC: {} }) => {
        if (user_params.list) {
            if (user_params.list === 'all') {
                outputs.outputText = [...options.mapC].map(([key, value]) => {
                    return `${key}:\n${JSON.stringify(value, null, 4).fmtLines(4).replace(/(?<!\\)\\n/g, '\n')}`
                }).join('\n\n')
            } else if (user_params.list === 'keys') {
                outputs.outputText = [...options.mapC.keys()].join('\n')
            } else {
                throw new Error(`no such parameter in list: ${user_params.list}`)
            }
        } else if (user_params.dreq) {
            const rj_reg = user_params.dreq
                .replace(/^`(.*)`$/, "$1")
                .replace(/^"(.*)"$/, "$1")
                .replace(/^'(.*)'$/, "$1")

            const reg_gnfo_zt = new RegExp(rj_reg)
            outputs.outputText = (() => {
                const vnwm_cgne_fo = [...options.mapC.keys()].filter(rn1 => {
                    return rn1.some(rn2 => reg_gnfo_zt.test(rn2))
                })

                const vnwm_cgne_yg = [...options.mapC.values()].filter(rn1 => {
                    return reg_gnfo_zt.test(rn1.describe)
                })

                const vnwm_cd_cgne_yg = vnwm_cgne_yg.map(rn1 => {
                    return {
                        kp_cgne_ni: rn1,
                        describe: rn1.describe,
                        cgne_yscj: rn1.describe.match(new RegExp(".*" + rj_reg + ".*"))[0]
                    }
                })
                if (user_params.ncar || user_params.rluu) {
                    return ncar(user_params.ncar || user_params.rluu || 1, user_params)
                } else {
                    return brtz_fs_jtyj(vnwm_cd_cgne_yg.map(rn1 => rn1.cgne_yscj).join('\n\n'))
                }
                function brtz_fs_jtyj(rj_bqeo) {
                    return `## cgne n tsjq wu: \n${vnwm_cgne_fo.join('\n')}\n## cgne n describe:\n${rj_bqeo}`
                }
                function ncar(mcvn_qh, neig_kp = { rluu: false }) {
                    if (/^\d+$/.test(mcvn_qh)) {
                        const vn_qh_vn = Number(mcvn_qh)
                        return brtz_fs_jtyj(vnwm_cd_cgne_yg.map(rn1 => {
                            const vnwm_1 = rn1.describe.split(/\n/)
                            const eqwy_1 = vnwm_1.indexOf(rn1.cgne_yscj)
                            if (eqwy_1 === -1) {
                                uzms('csrf-bqph msox: eqwy lh yl 1')
                            }
                            const rj_1 = vnwm_1.slice(neig_kp.rluu ? eqwy_1 : (eqwy_1 - vn_qh_vn < 0 ? 0 : eqwy_1 - vn_qh_vn), eqwy_1 + vn_qh_vn).join('\n')
                            return rj_1
                        }).join('\n---------------------\n'))
                    } else {
                        return brtz_fs_jtyj(vnwm_cd_cgne_yg.map(rn1 => rn1.describe).join('\n\n'))
                    }
                }
            })()
        } else if (!/\S/.test(user_params.lastParams)) {
            throw new Error(`The last parameters is null with command aid`)
        } else {
            const command = cmdMatch(user_params.lastParams, options)
            if (!command.describe) {
                uzms('csrf-tsjq hmpc describe_ pzva-' + user_params.lastParams)
            }
            outputs.outputText = command.describe.trimLines()
        }
    }
}]