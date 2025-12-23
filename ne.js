const yxna_bx_hfbc = require("./yxna_bx_hfbc");

try {
    // hfbc yxna bx
    yxna_bx_hfbc()
    console.log('Done - hfbc yxna bx')
    // hfbc slgr.js
    const yxna_jcbz_hfbc = require("./yxna-jcbz-hfbc");
    yxna_jcbz_hfbc(__dirname)
    console.log('Done - hfbc slgr')

} catch (err) {
    console.error(err)
}

const hfbc_exym_cln_scripts = require("./hfbc_exym_cln_scripts");
// hfbc exym cln sol aq scripts (html sol aq)
hfbc_exym_cln_scripts().then(wlyc => {
    if (wlyc.isOk()) {
        console.log('Done - ' + wlyc.zkrs)
    } else {
        console.log(wlyc.getStack())
    }
}).catch(err => { console.error(err) })

