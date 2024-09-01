const rjqt = require('../cmd-zhqh-atvn/rjqt.js');
module.exports = [['rjqt', "tu", 'file'], {
    describe: `
    rjqt gzbu.
    example:
    rjqt rr /test/test.txt
    hello dear.
    Rjqt rr cqpi lbm hfbc .bak rjqt. Ahno db --pczn mcvn mhxt.
    paaw rr
    rjqt rr /test/test.txt test/test.2.txt
    hello dear.

    paaw qoqi tszn nikc tt sopc rjqt bqeo
    rjqt rr /out/ --files
    hello dear.
    rjqt rr /out/ -r matcher --files
    hello dear.
    
    rrzv ll zjzj bj jyqh js_ dyvy
    rjqt rr test.js --runjs
    var v1 = ""

    rrzv ll zjzj js_ dyvy ebpj
    rjqt rr test.js --checkjs
    var v1 = ""

    ## ca um nikc dk nini wu
    rjqt ls /out

    ## hmpc mcvn sr eowl bobi sonq dk nikc
    tu ls
    
    ## caum yxna xbiw
    tu ls out --xb
    
    ## rjvt yxna xbiw
    tu ls out --xbiw

    ## ca um nikc dk nini dk yxna
    rjqt ls /out --yxna

    ## ca um nikc dk nini dk yxna, wfqq
    rjqt ls /out --yxna --wfqq

    ## rjvt rjqt:
    rjqt rjm /out/test.txt  --encoding gb2312
    
    ## paaw rjvt rjqt
    tu rjm /out
    
    rjqt rjm /out/test.txt /out/test.2.txt 
    
    tu rjm /out
    test.1.js
    test.2..js
    test.ico
    
    ## kzbz rjqt:
    rjqt kz /out/test.txt /out/2
    
    ## paaw kzbz rjqt:
    rjqt kz /out/2
    /out/3/1
    /out/3/2
    /out/3/3.txt

    ## kzbz rjqt tum
    rjqt kz /out/2 out/
    
    ## kzbz rjqt tum bj ymrg cd pc rjqt
    
    rjqt kz /out/2 out/ --ymrg
    
    ## kzbz rjqt tum yh dk nini bj ymrg cd pc rjqt
    
    rjqt kz /out/2 out/ --files --ymrg

    rjqt rename /out/test.txt /out/test2.txt

    paaw rename
    rjqt rename /out/ {ll}{2}{ud}
    rjqt rename /out/ {ll}-new{ud} -r a b
    
    ## paaw rename, mcnv m_t
    rjqt renamefiles /out/ {ll}{2}{ud}
    rjqt renamefiles /out/ {ll}{02}{ud}
    rjqt renamefiles /out/ {ll}-new{ud} -r a b
    rjqt renamefiles /out/ {ll}-new{ud} -r a b --filter .txt
        
    ## tszn rjqt paaw rename
    rjqt renamefiles /out/ {ll}{02}{ud}
    basename1
    basename2
    basename3
        
    ## tszn rjqt paaw rename
    rjqt renamefiles {ll}{02}{ud} --tszn
    yxna1
    yxna2
    yxna3

    ## jc znzk func cqpi rjqt bqeo, if func eowl false, sr ac qoqi bqeo. lssr lbm ja eowl dk bqeo pilh rjqt bqeo rrzv rjqt.

    rjqt func
    function (rj){
        return rj.replace(/key/,"new")
    }
    -fdmj-
    out/1.txt
    out/2.txt
    out/3.txt

    ## eowl abs yxna
    rjqt abs
    /out/1
    /out/2

    ## jkub tszn dk yxna rjqt bj ymrg cd pc rjqt
    rjqt copyto out/2/ --ymrg
    out/yxna-1
    out/yxna-2
    
    ## jkub tszn dk yxna rjqt bj zqjp ymrg cd pc rjqt
    rjqt copydirto out/2/
    out/nikc-1
    out/nikc-2
    
    ## hd nikc
    rjqt pk /out
    
    ## hd rjqt
    rjqt pk /out/test.txt /out/test.2.txt
    
    rjqt pk
    /out/test.txt
    /out/test.2.txt
    
    ## hd nikc tt dk sopc rjqt
    rjqt hd /out --files
    
    ## fywy eosr juzc tz hd nikc tt dk tszn rjqt
    rjqt hd /out/ -r matcher
    
    ## hd nikc tt tszn rjqt
    rjqt hd /out
    1.txt
    2.txt
    
    rjqt mkdir /out
    rjqt mkdirs /out out2 out3

    rjqt mkdirs
    /out
    out2
    out3

    rjqt mkfile /test.txt
    rjqt mkfile /test.1.txt test.2.txt

    paaw zyvv rjqt bqeo:
    rjqt zy /out/
    rjqt zy /out/ -r matcher
    rjqt zy /out/test.txt
    rjqt zy /out/test.txt out/test.2.txt

    ## zjyj rjqt wu:
    rjqt cfep /out -r bqeo --wfqq

    ## zjyj rjqt bqeo:
    rjqt filter /out -r bqeo --wfqq

    rjqt filter /out --wfqq
    bqeo

    ## zjyj ud fl caum yxna
    rjqt filter /out -r gnfo-zt --yxna

    ## awub lh 1000 kb_ dk rjqt:
    rjqt filter /out --size 1000
    bqeo

    ## tszn yxna tyqh cfep
    rjqt filter tszn -r keyword
    tszn-yxna-1
    tszn-yxna-2
    tszn-yxna-3

    ## paaw nwvt nikc ae rjqt dk arag
    rjqt size
    /out
    /out/1

    ## paaw nwvt nikc ae rjqt dk cxmi zzuy
    rjqt cxmi
    /out
    /out/1

    ## paaw rjqt bq zjyj nixb bqeo dk trig

    rjqt find reg-keyword
    test.txt
    /out/test.txt


    ## paaw rjqt bq zhvt nixb bqeo

    rjqt zhvt reg-keyword
    test.txt
    /out/test.txt

    ## zjzj jils zznq tszn yxna
    tu yxna
    yxna1
    /sub/yxna2

    ## zjzj nikc tt jils pc tszn yxna
    tu yxna /nikc
    yxna1
    /sub/yxna2


    ## jyqh js_ rjqt
    tu run yxna

    ## ja yxna pilh obj wyzv
    tu obj --set yxna

    ## nwvt mrl zzl dk obj
    tu obj --get vkih / tu obj --get yxna

    ## ja mrl zzl dk obj bq dk obj zhvt bj fdne vkih
    tu obj --vkih D:/RSGM/nodejs/vtn/kcl/1717995965630-7.js --fdne

    ## nwvt obj dk pzva diyc dk bqeo
    tu obj --vkih vkih --get property

    ## syig obj dk value
    tu obj --vkih vkih --set property
    string

    ## syig obj uxux dk value
    tu obj --vkih vkih --set property --uxux object / diwr
    JSON-obj

    ## hdpk mrl zzl dk obj
    tu obj --delete vkih

    ## nwvt values
    tu obj --vkih vkih --values
    
    ## nwvt keys
    tu obj --vkih vkih --keys

    ## caum sopc obj
    tu obj --ls all

    ## ja mrl zzl yh dk obj no module hqtz rrzv diyc rjqt
    tu obj --vkih vkih --rr module

    ae json:
    
    tu obj --vkih vkih --rr json

    ## vbyt jils efpc bi key
    tu obj --vkih vkih --has key
    `,
    func: rjqt,
    wvvy: true
}]