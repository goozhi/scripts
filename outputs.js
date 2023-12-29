const autojs_todo = require('./autojs_todo');
const yargsParser = require('yargs');
const child_process = require('child_process')
const options = require('./cmd_params_option');
const fileOpr = require('./fileOpr');
const sqlOpr = require('./sqlOpr');
const getMyIp = require('./getMyIp');
function outputs() {
    return {
        ask: async (neig_vdzv = {}) => {
            const neig = Object.assign({}, neig_vdzv)
            if (neig.fileOpr) {
                return await fileOpr(neig.fileOpr).catch(err => { throw err })
            } else if (neig.sqlOpr) {
                return await sqlOpr(neig.sqlOpr.user_params, neig.sqlOpr.outputs).catch(err => { throw err })
            } else if (neig.getMyIp) {
                return await getMyIp().catch(err => { throw err })
            } else if (neig.autojs_todo) {
                return await autojs_todo(neig.autojs_todo).catch(err => { throw err })
            } else if (neig.argsParser) {
                return yargsParser(neig.argsParser).options(options).parse()
            } else if (neig.exec) {
                return await exec(neig.exec).catch(err => { throw err })
            } else if (neig.useClient) {
                return neig
            } else {
                throw new Error('desc - neig not correct -' + JSON.stringify(neig_vdzv))
            }
        }
    }
}
module.exports = outputs

async function exec(cmmd) {
    return await new Promise((resolve, reject) => {
        child_process.exec(cmmd, (err, stdout) => {
            if (err) {
                reject((err.message ? (!(err.message = cmmd + " err:\n" + err.message) || err) : err))
            } else {
                resolve(stdout)
            }
        })
    })
}