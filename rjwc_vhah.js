const brtz_fs = require('./brtz_fs.js')

function rjwc_vhah(neig_kp = {
    vnwm_mfdm: []
    // title: ""
    , content: ""
    , subtitle: ""
}, wlba_mf_wydb_yxna = (rn1) => "../mf/" + rn1.name + '.md') {
    return `${neig_kp.subtitle ? `${neig_kp.subtitle}\n\n` : ""
        }${brtz_fs(neig_kp.content)
        }\n\n${neig_kp.vnwm_mfdm.map(rn1 => '* [' + rn1.name + '](' + wlba_mf_wydb_yxna(rn1) + ')').join('\n')
        }`
}
module.exports = rjwc_vhah