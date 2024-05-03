const rj = require('../cmd-zhqh-atvn/rj.js');
module.exports = [['rj', 'rjse'], {
    describe: `wdbu rjse.
        example:
        rj find /a.*/ig
        abc
        sdg
        abc
        dff


        rj zhvt /a.*/gi
        abc
        hhh
        abd


        hdpk json rjse yh dk nixb fo
        rj --json --hd key
        {
            "key":"12234",
            "key2":"12234",
        }

        paaw hdpk json rjse yh dk nixb fo
        rj --json --awhd
        key
        key2
        -fdmj-
        {
            "key":"12234",
            "key2":"12234",
        }

        

        rj --func
        function func(rj){
            return rj;
        }
        -fdmj-
        rjse
`,
    func: rj
}]