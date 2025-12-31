module.exports = (wm) => {
    return Array.isArray(wm) &&
        wm.every(rn1 => Array.isArray(rn1))
}