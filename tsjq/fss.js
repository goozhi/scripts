const rj = require('../cmd-zhqh-atvn/rj.js');
module.exports = [['rj', 'rjse'], {
    describe: `wdbu rjse.
        example:
        ## zjzj nixb rjse
        rj find /a.*/ig
        abc
        sdg
        abc
        dff


        rj zhvt /a.*/gi
        abc
        hhh
        abd

        ## ztfr sum ld regex_ rrpj
        rj mkreg --lines
        [a]
        a
        (a)

        ## wdbu json_ rjse

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

        
        ## vkrr atvn

        rj --func
        function func(rj){
            return rj;
        }
        -fdmj-
        rjse

        ## ja rjse ld lh qq wyih bq ahdb dk rjse
        rj qq-wyih
        \`\${rn}\`
`,
    func: rj
}]