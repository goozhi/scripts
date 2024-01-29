const autojs_todo = require('./oprs/autojs_todo.js');
const yargsParser = require('yargs');
const child_process = require('child_process')
const options = require('./cmd_params_option');
const fileOpr = require('./oprs/fileOpr.js');
const sqlOpr = require('./oprs/sqlOpr.js');
const exymOpr = require('./oprs/exymOpr.js');
const getMyIp = require('./getMyIp');
const getOkId = require('./getOkId');
const tzfsOpr = require('./oprs/tzfsOpr.js')
const rjqtOpr = require('./oprs/rjqtOpr.js');
const wrvrOpr = require('./KPLU/wrvr/atvn/wrvrOpr');
const getHtmlOpr = require('./oprs/getHtmlOpr.js');
function outputs() {
    return {
        ask: async (neig_vdzv = {}) => {
            const neig = Object.assign({}, neig_vdzv)
            if (neig.fileOpr) {
                return await fileOpr(neig.fileOpr).catch(err => { throw err })
            } else if (neig.tzfsOpr) {
                return await tzfsOpr(neig.tzfsOpr).catch(err => { throw err })

            } else if (neig.wrvrOpr) {
            return await wrvrOpr(neig.wrvrOpr).catch(err => { throw err })

            } else if (neig.getHtmlOpr) {
                return await getHtmlOpr(neig.getHtmlOpr).catch(err => { throw err })

            } else if (neig.sqlOpr) {
                return await sqlOpr(neig.sqlOpr.user_params, neig.sqlOpr.outputs).catch(err => { throw err })
            } else if (neig.exymOpr) {
                return await exymOpr(neig.exymOpr).catch(err => { throw err })
            } else if (neig.getMyIp) {
                return await getMyIp().catch(err => { throw err })
            } else if (neig.getWifiIp) {
                return await getOkId({ port: neig.getWifiIp.port }).catch(err => { throw err })
            } else if (neig.autojs_todo) {
                return await autojs_todo(neig.autojs_todo).catch(err => { throw err })
            } else if (neig.argsParser) {
                return yargsParser(neig.argsParser).options(options).parse()
            } else if (neig.exec) {
                return await exec(neig.exec).catch(err => { throw err })
            } else if (neig.useClient) {
                return neig
            } else if (neig.rjqtOpr) {
                return await rjqtOpr(neig.rjqtOpr).catch(err => { throw err })
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