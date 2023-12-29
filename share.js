
const share_arr = []
const path_andr = '/storage/emulated/0/脚本/out'
const path_log = path_andr + '/nodejs_log.txt'
const readLogData = readData(share_arr)
const share = async (user_params = { lastParams, getAll: "", add: "" }, outputs = { outputText: "" }) => {
    readLogData.next(outputs)
    if (user_params.add) {
        await outputs.ask({
            fileOpr: {
                opr: 'appendIfExist',
                existPath: path_andr,
                path: path_log,
                content: `zkrs-${user_params.lastParams}-bqeo-${user_params.content}\n`
            }
        }).catch(err => { throw err })
        share_arr.push({ theme: user_params.add, content: user_params.lastParams })
        outputs.outputText = `${user_params.lastParams} added successfully`
        return
    }
    else if (user_params._[1] === 'getAll') {
        outputs.outputText = share_arr.map(ele => ele.theme + ":\n" + ele.content).join('\n\n')
    } else if (user_params._[1] === "find") {
        outputs.outputText = share_arr.map(ele => ele.theme + ":\n" + ele.content).filter(ele => ele.includes(user_params.lastParams)).join('\n\n')
    } else {
        throw new Error(`please type a correct para! `)
    }
}
module.exports = share

function* readData(share_arr = []) {
    for (let i1 = 0; ; i1++) {
        var outputs = yield i1
        if (i1 === 0 && outputs && outputs.ask) {
            outputs.ask({
                fileOpr: {
                    opr: 'readFile',
                    path: path_log
                }
            }
            ).then(res => {
                share_arr.concat(res.match(/zkrs-((?:(?!zkrs-)[\s\S\n])*)-bqeo-((?:(?!zkrs-)[\s\S\n])*)/g))
            }).catch(err => {

            })
        }
    }
}