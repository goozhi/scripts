const getDeep = require("./getDeep")

function getNeigKp(neig_1 = {}) {
    return getDeep(neig_1, "neig_kp")
}
module.exports = getNeigKp