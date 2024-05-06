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
const bgiwOpr = require('./oprs/bgiwOpr.js');
const wrvrOpr = require('./KPLU/wrvr/atvn/wrvrOpr');
const getHtmlOpr = require('./oprs/getHtmlOpr.js');
const hotOpr = require('./ldjp/hotOpr.js')
const yueOpr = require('./oprs/yueOpr.js');
const atvn_ngnc_mr_zhqhOpr = require('./ldjp/atvn-ngnc-mr-zhqhOpr.js');
const rtul_cqpi = require('./rtul_cqpi.js');
function outputs(neig_kp = {}) {
    const neig_zi = Object.assign({ neig_kp }, neig_kp)
    const diwr_tskl = {
        fileOpr: async (neig_tskl) => {
            return await fileOpr(neig_tskl.fileOpr).catch(err => { throw err })
        },
        bgiwOpr: async (neig_tskl) => {
            return await bgiwOpr(neig_tskl.bgiwOpr).catch(err => { throw err })
        },
        tzfsOpr: async (neig_tskl) => {
            return await tzfsOpr(neig_tskl.tzfsOpr).catch(err => { throw err })
        },
        wrvrOpr: async (neig_tskl) => {
            return await wrvrOpr(neig_tskl.wrvrOpr).catch(err => { throw err })
        },
        getHtmlOpr: async (neig_tskl) => {
            return await getHtmlOpr(neig_tskl.getHtmlOpr).catch(err => { throw err })
        },
        yueOpr: async (neig_tskl) => {
            return await yueOpr(neig_tskl.yueOpr).catch(err => { throw err })
        },
        sqlOpr: async (neig_tskl) => {
            return await sqlOpr(neig_tskl.sqlOpr.user_params, neig_tskl.sqlOpr.outputs).catch(err => { throw err })
        },
        exymOpr: async (neig_tskl) => {
            return await exymOpr(neig_tskl.exymOpr).catch(err => { throw err })
        },
        getMyIp: async (neig_tskl) => {
            return await getMyIp().catch(err => { throw err })
        },
        getWifiIp: async (neig_tskl) => {
            return await getOkId({ port: neig_tskl.getWifiIp.port }).catch(err => { throw err })
        },
        autojs_todo: async (neig_tskl) => {
            return await autojs_todo(neig_tskl.autojs_todo).catch(err => { throw err })
        },
        argsParser: async (neig_tskl) => {
            return yargsParser(neig_tskl.argsParser).options(options).parse()
        },
        exec: async (neig_tskl) => {
            return await exec(neig_tskl.exec).catch(err => { throw err })
        },
        useClient: async (neig_tskl) => {
            return neig_tskl
        },
        rjqtOpr: async (neig_tskl) => {
            return await rjqtOpr(neig_tskl.rjqtOpr).catch(err => { throw err })
        },
        atvn_ngnc_mr_zhqhOpr: async (neig_tskl) => {
            return await atvn_ngnc_mr_zhqhOpr(neig_tskl.atvn_ngnc_mr_zhqhOpr).catch(err => { throw err })
        },
        hotOpr: async (neig_tskl) => {
            return await hotOpr(neig_tskl.hotOpr).catch(err => { throw err })
        }
    }
    if (neig_zi.diwr_tskl) {
        Object.assign(diwr_tskl, neig_zi.diwr_tskl)
    }

    return {
        diwr_tskl: diwr_tskl
        ,
        ask: async (neig_vdzv = {}) => {
            return await rtul_cqpi(neig_vdzv, diwr_tskl).catch(err => { throw err })
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