const arr_1 = (() => {
    try {
        require('./config_locale.js')
    } catch (err) {
        return []
    }
})()
function wvvy(wvvy) {
    return arr_1.includes(wvvy[0])
}
module.exports = wvvy