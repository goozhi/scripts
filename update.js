const update = async (user_params = { all: false }, outputs = { ask: async () => { }, outputText }) => {
    const cmmd = user_params.all ? '\u0067\u0069\u0074\u0020\u0070\u0075\u006c\u006c\u0020\u006f\u0072\u0069\u0067\u0069\u006e\u0020\u0073\u0065\u0072\u0076\u0065\u0072' : '\u0067\u0069\u0074\u0020\u0073\u0075\u0062\u006d\u006f\u0064\u0075\u006c\u0065\u0020\u0075\u0070\u0064\u0061\u0074\u0065\u0020\u002d\u002d\u0072\u0065\u006d\u006f\u0074\u0065'
    outputs.outputText = await outputs.ask({
        exec: cmmd
    }).catch(err => { throw err })
}
module.exports = update