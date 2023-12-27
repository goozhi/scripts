function nameToReg(name = '') {
    return new RegExp(name
        //
        .replace(/([\.\[\]\(\)\?])/g, '\\$1')
        // specify
        .replace(/\*/g, '.*')
        , 'i')
}
module.exports = nameToReg