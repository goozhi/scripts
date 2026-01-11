module.exports = class Vkih_hfbc {
    constructor(neig_kp) {
        function* gen() {
            for (var i = 0; ; i++) {
                yield i;
            }
        }
        const gen1 = gen()
        this.get_gen = () => {
            return gen1
        }
    }
}