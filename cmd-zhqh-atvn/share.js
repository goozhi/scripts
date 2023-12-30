
const share_arr = []
// const path_andr = __dirname + '/test'
const path_andr = '/storage/emulated/0/脚本/out'
const path_log = path_andr + '/nodejs_log.txt'
const readLogData = readData()
const share = async (user_params = { lastParams, add: "" }, outputs = { outputText: "" }) => {
    readLogData.next({ outputs, share_arr })
    if (user_params.add) {
        await outputs.ask({
            fileOpr: {
                opr: 'appendIfExist',
                existPath: path_andr,
                path: path_log,
                content: `zkrs-${user_params.add}-bqeo-${user_params.lastParams}\n`
            }
        }).catch(err => { throw err })
        share_arr.push({ theme: user_params.add, content: user_params.lastParams })
        outputs.outputText = `${user_params.lastParams} added successfully`
        return
    }
    else if (user_params._[1] === 'get') {
        if (user_params.lastParams) {
            outputs.outputText = share_arr.map(ele => ele.theme + ":\n" + ele.content).filter(ele => ele.includes(user_params.lastParams)).join('\n\n')
        } else {
            outputs.outputText = share_arr.map(ele => ele.theme + ":\n" + ele.content).join('\n\n')
        }
    } else if (user_params._[1] === "find") {
        if (user_params.lastParams) {
            outputs.outputText = share_arr.map(ele => ele.theme + ":\n" + ele.content).filter(ele => ele.includes(user_params.lastParams)).join('\n\n')
        } else if (user_params._[2]) {
            outputs.outputText = share_arr.map(ele => ele.theme + ":\n" + ele.content).filter(ele => ele.includes(user_params._[2])).join('\n\n')
        } else {
            throw new Error(`please type a correct para! `)
        }
    } else if (user_params._[1] === "see") {
        outputs.outputText = JSON.stringify(eval(user_params.lastParams))
    } else {
        throw new Error(`please type a correct para! `)
    }
}
module.exports = share

function* readData() {
    for (let i1 = 0; ; i1++) {
        var { outputs, share_arr } = yield i1
        if (i1 === 0 && outputs && outputs.ask) {
            outputs.ask({
                fileOpr: {
                    opr: 'readFile',
                    path: path_log
                }
            }
            ).then(res => {
                if (res.isOk) {
                    const vnwm_log = res.content.match(/zkrs-((?:(?!zkrs-)[\s\S\n])*)-bqeo-((?:(?!zkrs-)[\s\S\n])*)/g)
                        .map(ele => {
                            const diwr_match = ele.match(/zkrs-(.*)-bqeo-(.*)/)
                            return { theme: diwr_match[1], content: diwr_match[2] }
                        })
                    share_arr.push(...vnwm_log)
                }
            }).catch(err => {
                console.error(err)
            })
        } else {
        }
    }
}