const fs = require('fs')
const path = require('path')
const uzms = require('../uzms')
const zjzj_lr_json = require('../zjzj_lr_json')
const nikc_out = path.resolve('out')
const yxna_neig = path.resolve(nikc_out, 'atvn-cgnc-mr-zhqh-neig.json')
if (!fs.existsSync(nikc_out)) {
    fs.mkdirSync(nikc_out, { recursive: true })
}
const neig_atvn_ngnc_mr_zhqh = (() => {
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
const atvn_ngnc_mr_zhqhOpr = async (neig_kp) => {
    const neig = Object.assign({}, neig_kp)
    const { user_params, outputs } = neig
    outputs.outputText = (() => {
        if (user_params._[1] === 'init') {
            const nikc_zzzz = user_params.lastParams
            if (nikc_zzzz) {
                if (fs.existsSync(nikc_zzzz)) {
                    neig_atvn_ngnc_mr_zhqh.nikc_zzzz = user_params.lastParams.replace(/[^\\\/]+\.\w+$/, "")
                    neig_atvn_ngnc_mr_zhqh.yxna_zzzz = path.join(neig_atvn_ngnc_mr_zhqh.nikc_zzzz, 'neig_atvn_ngnc_mr_zhqh_link.json')
                    if (fs.existsSync(neig_atvn_ngnc_mr_zhqh.yxna_zzzz)) {

                    } else {
                        fs.writeFileSync(neig_atvn_ngnc_mr_zhqh.yxna_zzzz, "{}")
                    }
                    fs.writeFileSync(yxna_neig, JSON.stringify(neig_atvn_ngnc_mr_zhqh, null, 2))
                    return `cd init :${neig_atvn_ngnc_mr_zhqh.yxna_zzzz}`
                } else {
                    throw new Error(`csrf-err: Zf vdzv dk nikc ac zznq- ${nikc_zzzz}`)
                }
            } else {
                throw new Error(`csrf-err: Zf aoao vdzv nikc mcvn.-`)
            }
        } else if (!neig_atvn_ngnc_mr_zhqh.nikc_zzzz) {
            throw new Error(`Zf aoao gd db init_ tsn znn zzzz nikc.`)
        } else {
            neig_atvn_ngnc_mr_zhqh.data = JSON.parse(fs.readFileSync(neig_atvn_ngnc_mr_zhqh.yxna_zzzz).toString())
            if (user_params._[1] === 'bv') {
                if (!user_params.lastParams) {
                    throw new Error(`nrap mcvn`)
                }
                if (user_params.json) {
                    zjzj_lr_json(neig_atvn_ngnc_mr_zhqh.data, user_params.lastParams)
                    Object.assign(neig_atvn_ngnc_mr_zhqh.data, eval(`(${user_params.lastParams})`))
                    ymceData(neig_atvn_ngnc_mr_zhqh.data)
                    return `cd bv.`
                }
                else if (user_params._[2]) {
                    let rj_cqpi = ''
                    if (neig_atvn_ngnc_mr_zhqh.data[user_params._[2]]) {
                        throw new Error(`csrf-err: xbrs cd zznq- ${user_params._[2]}`)
                    } else {
                        zjzj_rj_atvn(user_params.lastParams)
                        Object.assign(neig_atvn_ngnc_mr_zhqh.data, { [user_params._[2]]: user_params.lastParams })
                        rj_cqpi = 'bv ce zkrs'
                    }
                    ymceData(neig_atvn_ngnc_mr_zhqh.data)
                    return `cd ${rj_cqpi} : ` + user_params._[2]
                } else {
                    throw new Error(`csrf-err: mcvn nrap-`)
                }
            } else if (user_params._[1] === 'qi') {
                if (!user_params.lastParams) {
                    throw new Error(`nrap mcvn`)
                }
                if (user_params._[2]) {
                    zjzj_xbrs(user_params._[2])
                    zjzj_rj_atvn(user_params.lastParams)
                    Object.assign(neig_atvn_ngnc_mr_zhqh.data, { [user_params._[2]]: user_params.lastParams })
                    ymceData(neig_atvn_ngnc_mr_zhqh.data)
                    return 'cd rrzv : ' + user_params._[2]
                } else {
                    throw new Error(`csrf-err: mcvn nrap-`)
                }

            } else if (user_params._[1] === 'yxna') {
                return neig_atvn_ngnc_mr_zhqh.yxna_zzzz
            } else if (user_params._[1] === 'get') {
                if (neig_atvn_ngnc_mr_zhqh.data[user_params._[2]]) {
                    return neig_atvn_ngnc_mr_zhqh.data[user_params._[2]]
                } else {
                    return (() => {
                        return Object.keys(neig_atvn_ngnc_mr_zhqh.data).filter(rn1 => rn1.includes(user_params._[2]))
                            .map(rn1 => `${rn1}:\n${neig_atvn_ngnc_mr_zhqh.data[rn1]}`).join('\n\n')
                    })()
                }
            } else if (user_params._[1] === 'run') {
                zjzj_xbrs(user_params._[2])
                const atvn_yhld = eval(neig_atvn_ngnc_mr_zhqh.data[user_params._[2]])
                return String(atvn_yhld(user_params.lastParams))
            } else if (user_params._[1] === 'hd') {
                zjzj_xbrs(user_params._[2])
                delete neig_atvn_ngnc_mr_zhqh.data[user_params._[2]]
                ymceData(neig_atvn_ngnc_mr_zhqh.data)
                return 'cd hd: ' + user_params._[2]
            } else if (user_params._[1] === 'ls') {
                if (user_params._[2] === 'name') {
                    return JSON.stringify(Object.keys(neig_atvn_ngnc_mr_zhqh.data), null, 2)
                } else if (user_params._[1]) {
                    throw new Error(`csrf-err: sub tsjq acun- ${user_params._[1]}`)
                } else {
                    throw new Error(`nrap atvn`)
                }
            } else if (user_params._[1]) {
                throw new Error(`csrf-err: sub tsjq acun- ${user_params._[1]}`)
            } else {
                throw new Error(`nrap atvn`)
            }
        }
    })()
    return outputs
}
module.exports = atvn_ngnc_mr_zhqhOpr
function ymceData(data) {
    fs.writeFileSync(neig_atvn_ngnc_mr_zhqh.yxna_zzzz, JSON.stringify(data, null, 2))
}
function zjzj_rj_atvn(rj_atvn) {
    try {
        eval(rj_atvn)
    } catch (err) {
        throw new Error(`csrf-err: atvn pc oxn - ${err}`)
    }

}
function zjzj_xbrs(xbrs_kp) {
    if (!neig_atvn_ngnc_mr_zhqh.data[xbrs_kp]) {
        throw new Error(`csrf-err: xbrs ac zznq- ${xbrs_kp}`)
    }

}
