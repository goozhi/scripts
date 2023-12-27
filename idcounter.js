let vn_random = Math.random()
/**
 * @explain use generator to count id, like: id1=idcounter();console.log(id1.next().value)
 */
function* idcounter() {
    while (1) {
        yield String(++vn_random)
    }
}

module.exports = idcounter