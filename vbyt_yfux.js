module.exports = (nixb_yoch, yoch_mcvn) => {
    return typeof nixb_yoch === "object" && nixb_yoch != null && Reflect.getPrototypeOf(nixb_yoch) === Reflect.getPrototypeOf(yoch_mcvn)
}
