const Llao = require('../jc-znn-ll-aol.js');
const path = require("path")

const fs = require("fs")

const uzms = require("../uzms")

const ussk_cqpi = require("../ussk_cqpi")

module.exports = [['llao'], {
    describe: `Used to desc mr zykl gtaw llao rzwu.
## caum sopc llao zzuy
llao caum

## fywy wu lq nwvt llao styc desc
llao get --wu keyword
  `,
    func: async (user_params = { lastParams: "", isys: 10, osys: 10 }, outputs = { outputText: "" }) => {
        outputs.outputText = (() => {
            return ussk_cqpi(new Map().set("caum", () => JSON.stringify(new Llao().get_wrm_zzuy(), null, 2))
                .set("get", () => {
                    return ussk_cqpi(new Map()
                        .set("wu", () => JSON.stringify(new Llao().yj_wu(user_params.wu) || {}, null, 2))
                    ).set_hqtz("fo")
                        .vdum(user_params)
                })
            ).vdum(user_params._[1])
        })()
    }
}]
