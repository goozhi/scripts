const atvn_ngnc_mr_zhqh = require("../cmd-zhqh-atvn/atvn-ngnc-mr-zhqh");

module.exports = [['func', "atvn", 'f'], {
    describe: `
    cgnc mr zhqh atvn.

    example:
    cgnc ce dk atvn
    f bv atvn1
    (lastParams)=>{
        return lastParams
    }

    wyzv ce dk json data
    f bv --json
    {}

    zhqh cd pc atvn
    f run atvn1
    this is a parameter.

    qoqi cd pc atvn
    f qi atvn1
    (lastParams)=>{
        // new code
    }

    dreq cd pc atvn
    f get atvn1

    list cd pc atvn wu
    f ls name

    hdpk cd pc atvn
    f hd name

    eowl atvn ilzz yxna
    f yxna

    nq rvdb func tsjq ll, zf aqfc gd tsn znn zzzz nikc.
    f init
    zzzz nikc

    `,
    func: atvn_ngnc_mr_zhqh,
    wvvy: true
}]