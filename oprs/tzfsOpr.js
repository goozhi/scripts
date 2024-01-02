const diwr_neig_zjzj = require("../diwr_neig_zjzj")
// const mark = require('marked')
function tzfsOpr(neig_kp = { user_params }) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    diwr_neig_zjzj(neig, 'user_params')
    const { user_params } = neig
    return (() => {
        if (user_params.file) {

        } else if (user_params.lastParams) {
            
        } else {
            throw new Error('csrf-err:nrap mcvn-')
        }
    })()
}
module.exports = tzfsOpr