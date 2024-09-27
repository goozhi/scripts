const hfbc_exym_cln_scripts = require("./hfbc_exym_cln_scripts");
const yxna_jcbz_hfbc = require("./yxna-jcbz-hfbc");
const yxna_bx_hfbc = require("./yxna_bx_hfbc");

try {
    // hfbc slgr.js
    yxna_jcbz_hfbc(__dirname)
    console.log('Done - hfbc slgr')
    // hfbc yxna bx
    yxna_bx_hfbc()
    console.log('Done - hfbc yxna bx')

} catch (err) {
    console.error(err)
}

// hfbc exym cln sol aq scripts (html sol aq)
hfbc_exym_cln_scripts().then(wlyc => {
    if (wlyc.isOk()) {
        console.log('Done - ' + wlyc.zkrs)
    } else {
        console.log(wlyc.getStack())
    }
}).catch(err => { console.error(err) })

