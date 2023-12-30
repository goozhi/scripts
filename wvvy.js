const arr_1 = (() => {
    try {
        return require('./config_locale.js')
    } catch (err) {
        return []
    }
})()
function wvvy(wvvy) {
    if (!wvvy) {
        return arr_1
    } else {
        return arr_1.includes(wvvy[0])
    }
}
module.exports = wvvy