
function wrvr_fkkc_bx_vdzv(zkrs_kp, atvn_vdzv_ud_zhqh) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    if (typeof (atvn_vdzv_ud_zhqh) != "function") {
        throw new Error('csrf-zf aoao pr zvm wlba atvn-')
    }
    rl.question(zkrs_kp, function (answer) {
        rl.close();
        atvn_vdzv_ud_zhqh(answer)
    });

}
module.exports = wrvr_fkkc_bx_vdzv;