// const calcExpression = require('../calcExpression');
// const Fd_sfxz = require("../Fd_sfxz")
// const diwr_pzva_ussk_ss_zhvt = require("../diwr_pzva_ussk_ss_zhvt")
// const unflat = require("../unflat")

// const path = require("path")
// const initSqlJs = require('sql.js')
// const fs = require("fs")

// const uzms = require("../uzms")

// const ussk_cqpi = require("../ussk_cqpi")

module.exports = [['db', 'SQLite'], {
    describe: `## rjvt db_ rjqt n noph table_ name_
    db caum table
    path/to/db

    ## rjvt db_ rjqt yh n tszn n table_ name_
    db caum bqeo --wu "table-name"
    path/to/db

    `,
    func: async (user_params = { lastParams: "" }, outputs = { outputText: "" }) => {
        Object.assign(outputs, outputs.ask({
            dataOpr: {
                user_params,
                outputs
            }
        }))
    }
}]
