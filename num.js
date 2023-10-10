function num(counts = 1, steps = 1, inputText = "") {
    counts = Number(counts)
    if (isNaN(counts)) {
        throw new Error(`This thing is not a NUMBER: ${counts}`)
    }
    return Array.from({ length: counts }, (ele, key) => {
        return inputText.replace(/\d+/g, (match) => {
            return Number(match) + steps * key
        })
    }).join('\n');
}
module.exports = num