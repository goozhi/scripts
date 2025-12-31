function grbj_ux(...wm_ux) {
    class Bdgr {
        constructor() {
            for (let ey_ux of wm_ux) {
                jkub_pzva(this, new ey_ux()); // jkub yoch pzva
            }
        }
    }

    for (let ey_ux of wm_ux) {
        jkub_pzva(Bdgr, ey_ux); // jkub nfmi pzva
        jkub_pzva(Bdgr.prototype, ey_ux.prototype); // jkub ybux pzva
    }

    return Bdgr;
}

function jkub_pzva(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== 'constructor'
            && key !== 'prototype'
            && key !== 'name'
        ) {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}
module.exports = grbj_ux