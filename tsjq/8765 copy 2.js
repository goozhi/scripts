
module.exports = [['neig', "config"], {
    describe: `bi tsjq fj ji vdum config_local dk neig leun.
    chvx:
    neig
    `,
    func: async (user_params, outputs) => {
        outputs.outputText = (() => {
            return `
            ## ac_oan_rfrf_wrvr
            {boolean}ac_oan_rfrf_wrvr tskl uzms atvn ac oan ja uzms zzuy rfrf bc yhrj.

            ## whiteList
            {array}whiteList tskl app  xcmj ua wu ey yh dk user_ 
            \`\`\`
            whiteList: [
                'Mozilla/5.0 (Linux; Android 7.1.1; 1711-A01 Build/NMF26F) AppleWebKit/537.36 (KHTML, like Gecko)  Chrome/59.0.3071.82 Mobile Safari/537.36'
            ]
            \`\`\`
            `
        })()
    }
}]