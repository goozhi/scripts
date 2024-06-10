const hfbc_exym_cln_scripts = require("./hfbc_exym_cln_scripts");
const yxna_jcbz_hfbc = require("./yxna-jcbz-hfbc");
const yxna_bx_hfbc = require("./yxna_bx_hfbc");

yxna_jcbz_hfbc(__dirname)

// hfbc exym cln sol aq scripts (html sol aq)
hfbc_exym_cln_scripts().then(wlyc => {
    if (wlyc.isOk()) {
        console.log(wlyc)
    } else {
        console.log(wlyc.getErr())
    }
}).catch(err => { console.error(err) })

// hfbc yxna bx
yxna_bx_hfbc()