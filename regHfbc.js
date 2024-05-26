/**
 * @param {string} rj_kp "/(RA) (ZNZK)/im" or "(RA) (ZNZK)"
 * @param {string} xbst "igm"
 * @returns {RegExp} "return a RegExp diwr"
 */
function regHfbc(rj_kp = "/RA ZNZK/ig", xbst = "") {
    return (() => {
        if (/^\/.*\/\w+$/.test(rj_kp)) {
            return (() => {
                const xbst_dbkz = rj_kp.match(/\w+$/)?.[0]
                return new RegExp(rj_kp.replace(/^\/(.*)\/\w+$/, "$1"), xbst_dbkz.includes(xbst) ? xbst_dbkz : xbst_dbkz + xbst)
            })()
        } else {
            return new RegExp(rj_kp, xbst)
        }
    })()

}
module.exports = regHfbc