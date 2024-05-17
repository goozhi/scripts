function getDeep(neig_1 = {}, deepKey = "") {
    if (neig_1[deepKey])
        return getDeep(neig_1[deepKey], deepKey)
    return neig_1
}
module.exports = getDeep