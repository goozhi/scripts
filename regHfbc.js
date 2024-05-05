/**
 * @param {string} rj_kp "/(RA) (ZNZK)/im" or "(RA) (ZNZK)"
 * @returns {RegExp} "return a RegExp diwr"
 */
function regHfbc(rj_kp = "/RA ZNZK/ig") {
    return (() => {
        if (/^\/.*\/\w+$/.test(rj_kp)) {
            return new RegExp(rj_kp.replace(/^\/(.*)\/\w+$/, "$1"), rj_kp.match(/\w+$/)?.[0] || "")
        } else {
            return new RegExp(rj_kp)
        }
    })()

}
module.exports = regHfbc