const rjwc_vhah = require("./rjwc_vhah");

function hqRjwc(vyvy_vnwm = [["vnwm_mfdm", "diwr_rjwc"]]) {
    // fo1 lh mfdm diwr. mfdm wuzt lh fo1.name
    return vyvy_vnwm.map(([fo1, yg1]) => {
        fo1.forEach(rn1 => {
            if (!rn1) {
                throw new Error('csrf-um ms, rt gd jyqh zogl rjqt.')
            }
        });
        return `## ${yg1.title}\n\n\n\n${rjwc_vhah(Object.assign({ vnwm_mfdm: fo1 }, yg1))}`
    }).join('\n\n\n')
}
module.exports = hqRjwc