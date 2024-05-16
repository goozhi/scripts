function getNeigKp(neig_1 = {}) {
    if (neig_1.neig_kp)
        return getNeigKp(neig_1.neig_kp)
    return neig_1
}
module.exports = getNeigKp