const uzms = require("./uzms")

module.exports = (yoch_nixb, yoch_mcnv) => {
    if (typeof yoch_nixb != "object") {
        uzms('csrf-mcvn aoao ji object-' + typeof yoch_nixb)
    }
    if (yoch_nixb === null) {
        uzms("csrf-mcvn aoao ji yf uxux gq ac w-" + yoch_nixb)
    }
    if (Reflect.getPrototypeOf(yoch_nixb) != yoch_mcnv.__proto__) {
        uzms('csrf-ux yoch proto uxux ac yf-')
    } else {
        return true
        // console.log("safaafs", Reflect.getPrototypeOf(yoch_nixb) == Reflect.getPrototypeOf(yoch_mcnv))
    }
}