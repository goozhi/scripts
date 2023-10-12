const uni = async (user_params = { lastParams: "", file: "", encoding: "utf8", head: false, tail: false, reverse: false }, outputs = { outputText }) => {
    user_params.encoding = user_params.encoding || "utf8"
    user_params.targetText = await getTargetText(user_params).catch(err => { throw err })
    async function getTargetText(user_params = {}) {
        if (user_params.file) {
            return (await outputs.ask(
                {
                    fileOpr: {
                        opr: 'readFile',
                        path: user_params.file,
                        encoding: user_params.encoding || 'utf8'
                    }
                }
            ).catch(err => { throw { err } })).content
        } else {
            return user_params.lastParams
        }
    }
    const obj_memory = {}
    if (user_params.reg.length > 1) {
        user_params.reg_target = new RegExp(`${user_params.reg[0]}(.*?)${user_params.reg[1]}`, 'i')
        if (user_params.reverse) {
            user_params.targetText.split(/\n/).filter(ele => /\S/.test(ele)).map(ele => {
                const target = ele.trim()
                const obj_mid = target.match(user_params.reg_target)
                if (obj_mid) {
                    if (!obj_memory[obj_mid[1]]) {
                        obj_memory[obj_mid[1]] = target
                    }
                } else {
                    obj_memory[target] = target
                }
            })
            outputs.outputText = Object.values(obj_memory).join('\n')
        } else {
            user_params.targetText.split(/\n/).filter(ele => /\S/.test(ele)).map(ele => {
                const target = ele.trim()
                const obj_mid = target.match(user_params.reg_target)
                if (obj_mid) {
                    obj_memory[obj_mid[1]] = target
                } else {
                    obj_memory[target] = target
                }
            })
            outputs.outputText = Object.values(obj_memory).join('\n')
        }
    } else {
        if (user_params.reverse) {
            outputs.outputText = [...new Set(user_params.targetText.trimLines().split(/\n/).filter(ele => /\S/.test(ele)))].join('\n')
        } else {
            user_params.targetText.split(/\n/).filter(ele => /\S/.test(ele)).map(ele => {
                const target = ele.trim()
                obj_memory[target] = true
            })
            outputs.outputText = Object.keys(obj_memory).join('\n')
        }
    }
}
module.exports = uni