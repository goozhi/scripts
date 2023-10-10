const share_arr = []

const share = async (user_params = { lastParams, getAll: "", add: "" }, outputs = { outputText: "" }) => {
    if (user_params.add) {
        const path_andr = '/storage/emulated/0/脚本'
        outputs.ask({
            fileOpr: {
                opr: 'appendIfExist',
                existPath: path_andr,
                path: path_andr + '/nodejs_log.txt',
                content: user_params.lastParams + '\n\n'
            }
        }).catch(err => { throw err })
        share_arr.push({ theme: user_params.add, content: user_params.lastParams })
        outputs.outputText = `${user_params.lastParams} added successfully`
        return
    }
    else if (user_params.getAll) {
        outputs.outputText = share_arr.map(ele => ele.theme + ":\n" + ele.content).join('\n\n')
    } else {
        throw new Error(`please type a correct para! `)
    }
}
module.exports = share