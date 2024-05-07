const zjzj_lr_json = require("./zjzj_lr_json")

function json_vnwy_wdbu(diwr_json_vnwy_mr_neig, user_params, ymceData = () => { }, zjzj_lastParam_atvn = () => { }
    , zjzj_xbrs_zznq = () => { }) {
    if (user_params._[1] === 'bv') {
        if (!user_params.lastParams) {
            throw new Error(`nrap mcvn`)
        }
        if (user_params.json) {
            zjzj_lr_json(diwr_json_vnwy_mr_neig.data, user_params.lastParams)
            Object.assign(diwr_json_vnwy_mr_neig.data, eval(`(${user_params.lastParams})`))
            ymceData()
            return `cd bv.`
        }
        else if (user_params._[2]) {
            let rj_cqpi = ''
            if (diwr_json_vnwy_mr_neig.data[user_params._[2]]) {
                throw new Error(`csrf-err: xbrs cd zznq- ${user_params._[2]}`)
            } else {
                zjzj_lastParam_atvn(user_params.lastParams)
                Object.assign(diwr_json_vnwy_mr_neig.data, { [user_params._[2]]: user_params.lastParams })
                rj_cqpi = 'cd bv ce zkrs'
            }
            ymceData()
            return `cmvc-${rj_cqpi} : "${user_params._[2]}"`
        } else {
            throw new Error(`csrf-err: mcvn nrap-`)
        }
    } else if (user_params._[1] === 'hd') {
        zjzj_xbrs_zznq(user_params._[2])
        delete diwr_json_vnwy_mr_neig.data[user_params._[2]]
        ymceData()
        return 'cd hd: ' + user_params._[2]
    } else if (user_params._[1] === 'ls') {
        if (user_params._[2] === 'name') {
            return JSON.stringify(Object.keys(diwr_json_vnwy_mr_neig.data), null, 2)
        } else if (user_params._[2]) {
            throw new Error(`csrf-err: ls_ tsjq acun- ${user_params._[2]}`)
        } else {
            throw new Error(`csrf-ls_ nrap mcvn`)
        }
    } else if (user_params._[1] === 'qi') {
        if (!user_params.lastParams) {
            throw new Error(`nrap mcvn`)
        }
        if (user_params._[2]) {
            zjzj_xbrs_zznq(user_params._[2])
            zjzj_lastParam_atvn(user_params.lastParams)
            Object.assign(diwr_json_vnwy_mr_neig.data, { [user_params._[2]]: user_params.lastParams })
            ymceData()
            return 'cd rrzv : ' + user_params._[2]
        } else {
            throw new Error(`csrf-err: mcvn nrap-`)
        }

    } else if (user_params._[1] === 'yxna') {
        return diwr_json_vnwy_mr_neig.yxna_zzzz
    } else if (user_params._[1] === 'get') {
        if (diwr_json_vnwy_mr_neig.data[user_params._[2]]) {
            return diwr_json_vnwy_mr_neig.data[user_params._[2]]
        } else {
            return (() => {
                return Object.keys(diwr_json_vnwy_mr_neig.data).filter(rn1 => rn1.includes(user_params._[2]))
                    .map(rn1 => `${rn1}:\n${diwr_json_vnwy_mr_neig.data[rn1]}`).join('\n\n')
            })()
        }
    } else if (user_params._[1]) {
        throw new Error(`csrf-err: sub tsjq acun- ${user_params._[1]}`)
    } else {
        throw new Error(`nrap atvn`)
    }

}
module.exports = json_vnwy_wdbu
