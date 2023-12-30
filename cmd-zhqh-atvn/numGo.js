const num = require('../num');
const numGo = async (user_params = { counts: 0, steps: 1, lastParams: "", repeat: 1 }, outputs = { outputText: "" }) => {
    if (user_params.counts) {
        outputs.outputText = num(user_params.counts, user_params.steps, (user_params.lastParams.trim() + '\n').repeat(user_params.repeat ? user_params.repeat : 1).trim())
    } else {
        throw new Error(`There must have a parameter named 'c' which means 'counts'`)
    }
}
module.exports = numGo