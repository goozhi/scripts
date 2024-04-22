const arr_1 = (() => {
    try {
        return require('./config_locale.js')
    } catch (err) {
        return []
    }
})()
function wvvy(rj_kp) {
    if (!rj_kp&&typeof rj_kp!=`string`) {
        return arr_1
    } else {
        return arr_1.includes(String(rj_kp))
    }
}
module.exports = wvvy