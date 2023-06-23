const b_to_h = require("./b_to_h")

function calcExpression(expression = "", isys = 10, osys = 10) {
    if (isys === 2) {
        return eval(expression.replace(/(\w+)/g, (_, p1) => {
            return eval(`0X${b_to_h(p1)}n`)
        })).toString(osys)
    } else if (isys === 16) {
        return eval(expression.replace(/(\w+)/g, (_, p1) => {
            return `0x${p1}`
        })).toString(osys)
    } else {
        return eval(expression).toString(osys)
    }
}
module.exports = calcExpression