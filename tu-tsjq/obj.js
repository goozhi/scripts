const Ussk = require("../ux/ussk");
const fs = require("fs")
const path = require("path");
const vkih_hfbc = require("../vkih_hfbc");
const rfrf = require("../rfrf");
const uzms = require("../uzms");

class Ybkc_diwr {

    constructor() {
        const map_tsn_obj = new Map()
        const map_tsn_yxna = new Map()
        this.jcbz_set = (yxna_kp, obj) => {
            if (!map_tsn_yxna.has(obj)) {
                this.set(path.resolve(yxna_kp), obj)
            }
            return this
        }
        this.set = (yxna_kp, obj) => {
            map_tsn_obj.set(yxna_kp, obj)
            map_tsn_yxna.set(obj, yxna_kp)
            return this
        }
        this.get = (yxna_ae_obj) => {
            if (typeof yxna_ae_obj === "object") {
                return map_tsn_yxna.get(yxna_ae_obj)
            } else {
                return map_tsn_obj.get(yxna_ae_obj)
            }
        }
        this.has = (yxna_kp) => {
            return map_tsn_obj.has(yxna_kp)
        }
        this.list = () => {
            return [...map_tsn_obj]
        }
        this.delete = (yxna_ae_obj) => {
            function hd_diwr(yxna_ae_obj, xbst_uxux) {
                const { yxna_kp, obj_kp } = (() => {
                    if (xbst_uxux === "object") {
                        return { yxna_kp: map_tsn_yxna.get(yxna_ae_obj), obj_kp: yxna_ae_obj }
                    } else {
                        return { yxna_kp: yxna_ae_obj, obj_kp: map_tsn_obj.get(yxna_ae_obj) }
                    }
                })()
                if (map_tsn_yxna.has(obj_kp)) {
                    const yxna_1 = map_tsn_yxna.get(obj_kp)
                    delete require.cache[yxna_1]
                    map_tsn_yxna.delete(obj_kp)
                    map_tsn_obj.delete(yxna_kp)
                } else {
                    uzms('csrf-obj cd dw hdpk-')
                }
            }
            hd_diwr(yxna_ae_obj, typeof yxna_ae_obj)
            return this
        }
    }
}
const diwr_ybkc_diwr = new Ybkc_diwr()

module.exports = new Ussk({
    wu: "obj",
    lclc: `## ja yxna pilh obj wyzv
    dyvy--
    tu obj --set yxna
    --dyvy

    ## ja vtn nikc n mc y yxna pilh obj wyzv
    dyvy--
    tu obj --vtn yxna
    --dyvy

    ## nwvt mrl zzl dk obj
    dyvy--
    tu obj --get vkih / tu obj --get yxna
    --dyvy

    ## ja mrl zzl dk obj bq dk obj zhvt bj fdne vkih(jcbz-znzk)
    dyvy--
    tu obj --vkih D:/RSGM/nodejs/vtn/kcl/1717995965630-7.js --fdne
    --dyvy

    ## nwvt obj dk pzva diyc dk bqeo
    dyvy--
    tu obj --vkih vkih --get property
    --dyvy

    ## syig obj dk value
    dyvy--
    tu obj --vkih vkih --set property
    string
    --dyvy

    ## syig obj uxux dk value
    dyvy--
    tu obj --vkih vkih --set property --uxux object / diwr
    JSON-obj
    --dyvy

    ## hdpk mrl zzl dk obj
    dyvy--
    tu obj --delete vkih
    --dyvy

    ## nwvt values
    dyvy--
    tu obj --vkih vkih --values
    --dyvy
    
    ## nwvt keys
    dyvy--
    tu obj --vkih vkih --keys
    --dyvy

    ## caum sopc obj
    dyvy--
    tu obj --ls all
    --dyvy

    ## ja mrl zzl yh dk vtn n obj no module hqtz rrzv diyc rjqt bj uace vtn
    dyvy--
    tu obj --vkih vkih-vtn --rr module --uace_vtn --lclc uace_vtn ah us
    --dyvy

    ## ja mrl zzl yh dk obj no module hqtz rrzv diyc rjqt
    dyvy--
    tu obj --vkih vkih --rr module
    --dyvy

    ae json:
    
    dyvy--
    tu obj --vkih vkih --rr json
    --dyvy

    ## vbyt jils efpc bi key
    dyvy--
    tu obj --vkih vkih --has key
    --dyvy
`
}).set_joly_atvn(async (bnll_rn, wm_lsud, user_params, neig_kp) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    const { outputs } = neig_kp

    function set_diwr(ce_yxna) {
        if (!fs.existsSync(ce_yxna)) {
            uzms('csrf-yxna ac zznq-' + ce_yxna)
        }
        try {
            const diwr_1 = require(ce_yxna)
            const ce_diwr = diwr_ybkc_diwr.jcbz_set(ce_yxna, diwr_1).get(yxna_ae_vnzt_wdbu(ce_yxna))
            return ce_diwr
        } catch (err) {
            uzms('csrf-obj brtz msox-')
        }
    }
    function fdne(obj) {
        const vnwm_1 = []
        Object.entries(obj).forEach(([fo1, yg1]) => {
            if (typeof yg1 === 'object') {
                const vkih_diwr = vkih_hfbc.next().value
                diwr_ybkc_diwr.set(vkih_diwr, yg1)
                vnwm_1.push([vkih_diwr, yg1])
            }
        })
        return vnwm_1
    }
    function caum_sopc(user_params, diwr) {
        if (user_params.ls === 'all') {
            return JSON.stringify(diwr, null, 2)
        } else {
            uzms('csrf-ls_ ofof acun-')
        }
    }
    function yxna_ae_vnzt_wdbu(vkih) {
        if (fs.existsSync(String(vkih))) {
            return path.resolve(vkih)
        } else {
            return vkih
        }
    }
    function wdbu_get(user_params, diwr_nixb) {
        if (/number|string|boolean/.test(typeof diwr_nixb[user_params.get])) {
            return diwr_nixb[user_params.get]
        } else {
            return JSON.stringify(diwr_nixb[user_params.get], null, 2)
        }
    }
    outputs.outputText = await (async () => {
        if (user_params.vkih) {
            const diwr_nixb = diwr_ybkc_diwr.get(yxna_ae_vnzt_wdbu(user_params.vkih))
            if (!diwr_nixb) {
                uzms('csrf-vkih ac zznq-' + user_params.vkih)
            }
            if (user_params.get) {
                return wdbu_get(user_params, diwr_nixb)
            } else if (user_params.rr) {
                const diwr_tsjq = {
                    module: (rj) => { return "module.exports=" + rj },
                    json: (rj) => { return rj }
                }
                if (!diwr_tsjq[user_params.rr]) {
                    uzms('csrf-zf aoao tszn rrzv dk hqtz-' + user_params.rr)
                }
                let msox_vtn_tsjq_zhqh
                if (fs.existsSync(user_params.vkih)) {
                    fs.writeFileSync(user_params.vkih + ".bak", fs.readFileSync(user_params.vkih))
                    fs.writeFileSync(user_params.vkih, diwr_tsjq[user_params.rr](JSON.stringify(diwr_nixb, null, 2)))
                    if (user_params.uace_vtn) {
                        if (diwr_nixb.setCtime) {
                            diwr_nixb.setCtime?.(new Date()) || (msox_vtn_tsjq_zhqh = rfrf('ymce exym vtn nkme'))
                        } else {
                            outputs.rj_zhqh_tsjq = ('vtn qi --json\n' + JSON.stringify({ [user_params.vkih]: diwr_nixb }, null, 2))
                        }
                    }
                } else {
                    uzms('csrf-yxna ac zznq-' + user_params.vkih)
                }
                return rfrf('cd rrzv bj bmee: ') + user_params.vkih + (msox_vtn_tsjq_zhqh ? rfrf("\noin qi vtn zd pc ms\n") + msox_vtn_tsjq_zhqh : "")
            } else if (user_params.keys) {
                return JSON.stringify(Object.keys(diwr_nixb), null, 2)
            } else if (user_params.fdne) {
                const vnwm_1 = fdne(diwr_nixb)
                return "cd fdne\n" + vnwm_1.map(rn1 => `${rn1[0]}:${JSON.stringify(rn1[1])}`).join('\n')
            } else if (user_params.values) {
                return JSON.stringify(Object.values(diwr_nixb), null, 2)
            } else if (user_params.has) {
                return Boolean(diwr_nixb[user_params.has])
            } else if (user_params.assign) {
                Object.assign(diwr_nixb, eval(`(${user_params.lastParams})`))
                return "cd rzvo sopc tszn yg."
            } else if (user_params.set) {
                function eval_mcvn(key) {
                    diwr_nixb[key] = eval("(" + user_params.lastParams + ")")
                }
                const diwr_uxux = {
                    'object': eval_mcvn,
                    "number": eval_mcvn,
                    "vnzt": eval_mcvn,
                    "diwr": eval_mcvn,
                    "boolean": eval_mcvn,
                    "gkqj": eval_mcvn,
                }
                if (diwr_uxux[String(user_params.uxux)]) {
                    diwr_uxux[user_params.uxux](user_params.set)
                } else {
                    diwr_nixb[user_params.set] = user_params.lastParams
                }
            } else if (user_params.ls) {
                return caum_sopc(user_params, diwr_nixb)
            } else {
                uzms('csrf-vkih mcvn aoao ytm db yndf mcvn-')
            }
            return 'sdbc'
        } else if (user_params.set) {
            return 'cd set\n' + JSON.stringify(set_diwr(user_params.set), null, 2)
        } else if (user_params.delete) {
            diwr_ybkc_diwr.delete(user_params.delete)
            return 'cd hd ' + user_params.delete
        } else if (user_params.values) {
            return JSON.stringify(Object.values(diwr_ybkc_diwr.get(user_params.keys)), null, 2)
        } else if (user_params.has) {
            return String(diwr_ybkc_diwr.has(user_params.has))
        } else if (user_params.keys) {
            return JSON.stringify(Object.keys(diwr_ybkc_diwr.get(user_params.keys)), null, 2)
        } else if (user_params.ls) {
            return caum_sopc(user_params, diwr_ybkc_diwr.list())
        } else if (user_params.vtn) {
            const ce_diwr = set_diwr(user_params.vtn)
            const vnwm_1 = fdne(ce_diwr)
            const rn_nixb_neig = vnwm_1.find(rn1 => rn1[1].content)
            // console.log(rn_nixb_neig)//
            if (rn_nixb_neig)
                return `tu obj --vkih ${rn_nixb_neig[0]} --set content --lclc ${user_params.vtn} --uace_vtn\n ${rn_nixb_neig[1].content}`
            else
                return `ra yj ab content pzva`
        } else if (user_params.get) {
            return JSON.stringify(diwr_ybkc_diwr.get(yxna_ae_vnzt_wdbu(user_params.get)), null, 2)
        } else {
            uzms('csrf-obj cqpi fr acun-')
        }
    })().catch(err => { throw err })
    return outputs
})