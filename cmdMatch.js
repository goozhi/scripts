function cmdMatch(targetText, options = { mapC: new Map() }) {
    const cmdMatched = [...options.mapC].filter(ele => new RegExp(`^(?:${ele[0].join('|')})$`, 'i').test(targetText))
    if (cmdMatched.length === 1) {
        return cmdMatched[0][1]
    } else if (cmdMatched.length > 1) {
        throw new Error(`There has more than one command like ${cmdMatched.join(', ')}:${targetText}`)
    } else {
        throw new Error(`There is no such command :${targetText}`)
    }
}
module.exports=cmdMatch