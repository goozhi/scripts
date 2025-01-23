const calcExpression = require('../calcExpression');
const Fd_sfxz = require("../Fd_sfxz")
const diwr_pzva_ussk_ss_zhvt = require("../diwr_pzva_ussk_ss_zhvt")
const unflat = require("../unflat")

const path = require("path")
const initSqlJs = require('sql.js')
const fs = require("fs")

const uzms = require("../uzms")

const ussk_cqpi = require("../ussk_cqpi")

module.exports = [['db', 'SQLite'], {
    describe: `## rjvt db_ rjqt n noph table_ name_
    db caum table
    path/to/db

    ## rjvt db_ rjqt yh n tszn n table_ name_
    db caum bqeo --wu "table-name"
    path/to/db

    `,
    func: async (user_params = { lastParams: "" }, outputs = { outputText: "" }) => {
        outputs.outputText = await (async () => {
            return ussk_cqpi(new Map()
                .set("caum", () => {
                    return ussk_cqpi(new Map()
                        .set("table", async () => {
                            const filebuffer = fs.readFileSync(user_params.lastParams);
                            return await initSqlJs().then(function (SQL) {
                                // Load the db
                                const db = new SQL.Database(filebuffer);
                                const diwr_1 = db.exec("SELECT name FROM sqlite_master WHERE type='table';")
                                // const diwr_2 = db.exec("SELECT * FROM description")
                                console.log(diwr_1.values())
                                return JSON.stringify([...diwr_1.values()], null, 2)
                            }).catch(err => console.error(err))
                        }).set("bqeo", async () => {
                            const filebuffer = fs.readFileSync(user_params.lastParams);
                            return await initSqlJs().then(function (SQL) {
                                // Load the db
                                const db = new SQL.Database(filebuffer);
                                // const diwr_1 = db.exec("SELECT name FROM sqlite_master WHERE type='table';")
                                const diwr_2 = db.exec("SELECT * FROM " + user_params.wu)
                                const vnwm_yhld = [...diwr_2.values()]
                                if (vnwm_yhld.length > 3000 && !user_params.non) {
                                    return "vnaw nw mh, if co noph oakl, rt syig non mcvn lh true:\n"+JSON.stringify(vnwm_yhld.slice(0, 3000), null, 2)
                                } else {
                                    return JSON.stringify(vnwm_yhld, null, 2)
                                }
                            }).catch(err => console.error(err))
                        })
                    ).vdum(user_params._[2])
                }))
                .vdum(user_params._[1])
        })().catch(err => { throw err })
    }
}]
