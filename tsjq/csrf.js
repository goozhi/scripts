const nvms = require('../nvms');
module.exports = [['csrf'], {
    describe: `## ah wpm fs csrf msox n brtz
            csrf
            csrf-err_zzuy-mcvn-kp-mcvn_kp
            `,
    func: async (user_params = { lastParams: "", list: false }, outputs = { outputText: "" }, options = { mapC: {} }) => {
        const err = nvms(user_params.lastParams)
        outputs.outputText = err.message || String(err)
    }
}]