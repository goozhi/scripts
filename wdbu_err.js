const nvms = require("./nvms")

nvms
module.exports = (err) => {
    return { reason: err && err.message && nvms(err.message).message || String(err), err_stack: err && err.stack || err }
}