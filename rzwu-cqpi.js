function rzwu_cqpi(wu_zl, wu_ce, neig_kp = {}) {
    if (!wu_zl || !wu_ce) {
        throw new Error('jphs ab dk wuzt mcvn lh undefined')
    }
    const neig = Object.assign({ vkih: 0, reg: [], neig_kp }, neig_kp)

    let wu_yhld = wu_ce

    if (neig.reg.length != 0) {
        const reg_1 = (() => {
            if (/^\/.*\/\w$/.test(neig.reg[0])) {
                return new RegExp(neig.reg[0], neig.reg[0].match(/\w$/)?.[0])
            } else {
                return new RegExp(neig.reg[0])
            }

        })()

        wu_yhld = wu_zl.replace(reg_1, neig.reg[1])
    }
    if (/\{/.test(wu_ce)) {
        const rj_ll = wu_yhld.replace(/\..*/, "")
        const rj_ud = wu_yhld.match(/\.(.*)/)?.[0] || ""
        wu_yhld = wu_ce
            .replace(/\{ll\}/, rj_ll)
            .replace(/\{ud\}/, rj_ud)
            .replace(/\{(\d+)\}/, (_, m1) => {
                const vn_1 = (() => {
                    if (/^0/.test(m1)) {
                        return m1.length
                    } else {
                        return 0
                    }
                })()
                return (Number(m1.replace(/^0+/, "")) + Number(neig.vkih)).toString().padStart(vn_1, "0")
            })
    }

    return wu_yhld

}
module.exports = rzwu_cqpi