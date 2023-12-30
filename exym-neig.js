String.prototype.trimLines = function () {
    return this.trim().split(/\n/).map(ele => ele.trim()).join('\n')
}
const wvvy = require('./wvvy')
const exymNeig = async (user_params = { lastParams: "", file: "", encoding: "utf8", head: false, tail: false, reverse: false }, outputs = { outputText }) => {
    outputs.outputText = await (async () => {
        const exymOpr = (() => {
            if (user_params._[1] === 'init') {
                return {
                    initNeig: true
                }
            } else {
                if (!wvvy(user_params.pass)) {
                    throw new Error(`zk hmpc wvk vnk.`)
                }
                if (user_params._[1] === 'set') {
                    return {
                        setNeig: true,
                        content: user_params.lastParams,
                        user_params
                    }
                } else if (user_params._[1] === 'get') {
                    return {
                        getNeig: true,
                        user_params
                    }
                } else {
                    throw new Error(`desc-error: You must give me the necessary params-`)
                }
            }

        })()
        return await outputs.ask(
            {
                exymOpr
            }
        ).then(res => {
            return res
        }

        ).catch(err => {
            throw err
        })
    })()
        .catch(err => { throw err })

}
module.exports = exymNeig