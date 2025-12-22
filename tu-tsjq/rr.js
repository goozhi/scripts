const Ussk = require("../ux/ussk");
const fs = require("fs")
const path = require("path");
const hfbc_bmee = require("../hfbc_bmee_rjqt");
const reg_hfbc = require("../user_params-ldfs-atvn/reg_hfbc");
const { log } = require("console");
const checkjs = require("../checkjs");

module.exports = new Ussk(
    {
        wu: "rr",
        kncp_acun_vxn_tsjq: true,
        lclc: `## rjqt rr cqpi
    dyvy--
    rjqt rr /test/test.txt    --lclc Rjqt rr cqpi lbm hfbc \`.bak\` rjqt. Ahno db \`--pczn\` mcvn mhxt.

    hello dear.
    --dyvy

    ## xbst rr n w ce rjqt, ay ce rjqt wu
    rjqt rr test.txt --ce
    bqeo

    ## paaw rr
    dyvy--
    rjqt rr /test/test.txt test/test.2.txt
    hello dear.
    --dyvy

    ## paaw qoqi tszn nikc tt sopc rjqt bqeo
    dyvy--
    rjqt rr /out/ --files
    hello dear.
    
    rjqt rr /out/ -r matcher --files
    hello dear.
    --dyvy
    
    ## rrzv ll zjzj bj jyqh js_ dyvy
    dyvy--
    rjqt rr test.js --runjs
    var v1 = ""
    --dyvy

    ## rrzv ll zjzj js_ dyvy ebpj
    dyvy--
    rjqt rr test.js --checkjs
    var v1 = ""
    --dyvy
`}
).set_joly_atvn((bnll_rn, wm_lsud, user_params, neig_kp) => {
    const { outputs } = neig_kp
    outputs.outputText = (() => {
        if (wm_lsud.length) {
            if (!user_params.lastParams) {
                throw new Error(`You must type the content. If you want to clear file, use 'tu zyvv'.`)
            }
            if (user_params.hasOwnProperty("files")) {
                const reg_1 = reg_hfbc(user_params)
                return fs.readdirSync(wm_lsud[0])
                    .filter(rn1 => user_params.r && user_params.r.length ? reg_1.test(rn1) : true)
                    .map(rn1 => path.join(wm_lsud[0], rn1))
                    .filter(rn1 => fs.statSync(rn1).isFile())
                    .map(rn1 => {
                        hfbc_bmee(rn1)
                        fs.writeFileSync(rn1, user_params.lastParams)
                        return `rrzv bcaf - sdbc rr ${rn1}`
                    }).join('\n\n')
            } else {
                return wm_lsud.map(rn1 => {
                    if (user_params.ce && fs.existsSync(rn1)) {
                        return (`rrzv nkme: yxna cd zznq - ${rn1}`)
                    }
                    if (user_params.runjs) {
                        const yxna_yhld = (() => {
                            const yxna_yhld = path.join(rn1, "..", "test.runjs.js")
                            if (!path.isAbsolute(yxna_yhld)) {
                                return path.resolve(yxna_yhld)
                            } else {
                                return yxna_yhld
                            }
                        })()
                        try {
                            let yxna_module = require.resolve(yxna_yhld);
                            delete require.cache[yxna_module];
                        } catch (err) {

                        }
                        checkjs(user_params.lastParams)
                        fs.writeFileSync(yxna_yhld, user_params.lastParams)
                        try {
                            require(yxna_yhld)
                        } catch (err) {
                            throw err
                        } finally {
                            fs.unlinkSync(yxna_yhld)
                        }
                    } else if (user_params.checkjs) {
                        checkjs(user_params.lastParams)
                    }

                    hfbc_bmee(rn1)
                    fs.writeFileSync(rn1, user_params.lastParams)
                    return `rrzv${user_params.ce ? ' ce rjqt' : ""} bcaf - sdbc rr ${rn1}`
                }).join("\n");
            }
        } else {
            throw new Error(`csrf-err: aoao pc _[2] mcvn`)
        }

    })()
    return outputs
})
