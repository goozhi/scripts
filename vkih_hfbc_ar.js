function* gen() {
    for (var i = 0; ; i++) {
        yield i;
    }
}
module.exports = gen()
