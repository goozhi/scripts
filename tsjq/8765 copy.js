const calcExpression = require('../calcExpression');

module.exports = [['cc', 'calc'], {
    describe: `Used to calculation.
    examples:
    cc
    0x89
    0x90+9

    cc --isys 2 --osys 16
    1110+1

    cc --isys 16
    9
    a
    b

    cc
    Math.pow(5,2)
    `,
    func: async (user_params = { lastParams: "", isys: 10, osys: 10 }, outputs = { outputText: "" }) => {
        outputs.outputText = user_params.lastParams.trimLines().split(/\n/).map(ele => ele + " = " + calcExpression(ele, user_params.isys, user_params.osys)).join('\n')
    }
}]
