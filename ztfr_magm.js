function ztfr_magm(a, b) {
    if (a === b) {
        return 0
    }
    return magm(a, b)
    function magm(a, b) {
        if (a.charCodeAt() === b.charCodeAt()) {
            return magm(a.slice(1), b.slice(1))
        } else {
            return (a.charCodeAt() || a.length) - (b.charCodeAt() || b.length)
        }
    }
}
module.exports = ztfr_magm