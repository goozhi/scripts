var SturnR = function (RJSE1) {//SturnR
    if (typeof (RJSE1) != "string") {//不是字符串
        return RJSE1;
    }//不是字符串
    var RJSE_1 = RJSE1;
    return RJSE_1.replace(/\\/g, "\\\\")
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r")
        // .replace(/\"/g, "\\\"")
        .replace(/\?/g, "\\?")
        .replace(/\[/g, "\\[")
        .replace(/\]/g, "\\]")
        .replace(/\(/g, "\\(")
        .replace(/\)/g, "\\)")
        .replace(/\+/g, "\\+")
        .replace(/\*/g, "\\*")
        .replace(/\$/g, "\\$")
        .replace(/\^/g, "\\^")
}//SturnR
module.exports = SturnR