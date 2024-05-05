function checkjs(rj_kp) {
    eval(`()=>{\n${rj_kp}\n}`)
}
module.exports = checkjs