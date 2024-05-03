const fs = require('fs')
const path = require('path')
const zjzj_lr_json = require('../zjzj_lr_json')
const nikc_out = path.resolve('out')
const yxna_neig = path.resolve(nikc_out, 'bgiw-neig.json')
if (!fs.existsSync(nikc_out)) {
    fs.mkdirSync(nikc_out, { recursive: true })
}
const neig_bgiw = (() => {
    try {
        if (fs.existsSync(yxna_neig)) {
            return require(yxna_neig)
        } else {
            throw new Error(`csrf-yxna ac zznq-${yxna_neig}`)
        }
    } catch (err) {
        return {}
    }
})()
const bgiwOpr = async (neig_kp) => {
    const neig = Object.assign({}, neig_kp)
    const { user_params, outputs } = neig
    outputs.outputText = (() => {
        if (user_params._[1] === 'init') {
            const nikc_zzzz = user_params.lastParams
            if (nikc_zzzz) {
                if (fs.existsSync(nikc_zzzz)) {
                    neig_bgiw.nikc_zzzz = user_params.lastParams.replace(/[^\\\/]+\.\w+$/, "")
                    neig_bgiw.yxna_zzzz = path.join(neig_bgiw.nikc_zzzz, 'neig_bgiw_link.json')
                    if (fs.existsSync(neig_bgiw.yxna_zzzz)) {

                    } else {
                        fs.writeFileSync(neig_bgiw.yxna_zzzz, "{}")
                    }
                    fs.writeFileSync(yxna_neig, JSON.stringify(neig_bgiw, null, 2))
                    return `cd init :${neig_bgiw.yxna_zzzz}`
                } else {
                    throw new Error(`csrf-err: Zf vdzv dk nikc ac zznq- ${nikc_zzzz}`)
                }
            } else {
                throw new Error(`csrf-err: Zf aoao vdzv nikc mcvn.-`)
            }
        } else if (!neig_bgiw.nikc_zzzz) {
            throw new Error(`Zf aoao gd db init_ tsn znn zzzz nikc.`)
        } else {
            neig_bgiw.data = JSON.parse(fs.readFileSync(neig_bgiw.yxna_zzzz).toString())
            if (user_params._[1] === 'bv') {
                if (!user_params.lastParams) {
                    throw new Error(`nrap mcvn`)
                }
                if (user_params.json) {
                    zjzj_lr_json(neig_bgiw.data, user_params.lastParams)
                    Object.assign(neig_bgiw.data, eval(`(${user_params.lastParams})`))
                    ymceData(neig_bgiw.data)
                    return `cd bv.`
                }
                else if (user_params._[2]) {
                    let rj_cqpi = ''
                    if (neig_bgiw.data[user_params._[2]]) {
                        // throw new Error(`csrf-err: xbrs cd zznq- ${user_params._[2]}`)//
                        neig_bgiw.data[user_params._[2]] += "\n" + user_params.lastParams
                        rj_cqpi = 'qkyp'
                    } else {
                        Object.assign(neig_bgiw.data, { [user_params._[2]]: user_params.lastParams })
                        rj_cqpi = 'bv ce zkrs'
                    }
                    ymceData(neig_bgiw.data)
                    return `cd ${rj_cqpi} : ` + user_params._[2]
                } else {
                    throw new Error(`csrf-err: mcvn nrap-`)
                }
            } else if (user_params._[1] === 'qi') {
                if (!user_params.lastParams) {
                    throw new Error(`nrap mcvn`)
                }
                if (user_params.json) {
                    Object.assign(neig_bgiw.data, eval(`(${user_params.lastParams})`))
                    ymceData(neig_bgiw.data)
                    return `cd bv.`
                }
                else if (user_params._[2]) {
                    if (!neig_bgiw.data[user_params._[2]]) {
                        throw new Error(`csrf-err: xbrs ac zznq- ${user_params._[2]}`)
                    }
                    Object.assign(neig_bgiw.data, { [user_params._[2]]: user_params.lastParams })
                    ymceData(neig_bgiw.data)
                    return 'cd rrzv : ' + user_params._[2]
                } else {
                    throw new Error(`csrf-err: mcvn nrap-`)
                }

            } else if (user_params._[1] === 'yxna') {
                return neig_bgiw.yxna_zzzz
            } else if (user_params._[1] === 'get') {
                if (neig_bgiw.data[user_params._[2]]) {
                    return neig_bgiw.data[user_params._[2]]
                } else {
                    return (() => {
                        return Object.keys(neig_bgiw.data).filter(rn1 => rn1.includes(user_params._[2]))
                            .map(rn1 => `${rn1}:\n${neig_bgiw.data[rn1]}`).join('\n\n')
                    })()
                }
            } else if (user_params._[1]) {
                throw new Error(`csrf-err: sub tsjq acun- ${user_params._[1]}`)
            } else {
                return JSON.stringify(neig_bgiw.data, null, 2)
            }
        }
    })()
    return outputs
}
module.exports = bgiwOpr
function ymceData(data) {
    fs.writeFileSync(neig_bgiw.yxna_zzzz, JSON.stringify(data, null, 2))
}