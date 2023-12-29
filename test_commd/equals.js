const fs = require('fs')
String.prototype.trimLines = function () {
    return this.trim().split(/\n/).map(ele => ele.trim()).join('\n')
}

const dirname = __dirname
const equals = [
    [
        `uni
        1
        2
        3
        1`,
        `
        1
        2
        3
        `.trimLines()
    ],
    [
        `uni -f ${dirname}/src/uni/reverse-reg.input -r a b --reverse
        `,
        fs.readFileSync(dirname + '/src/uni/reverse-reg.output').toString().trim().replace(/\r/g, '')
    ],
    [
        `uni -f ${dirname}/src/uni/1.input -e gb2312
        `,
        fs.readFileSync(dirname + '/src/uni/1.output').toString().trim().replace(/\r/g, '')
    ],
    [
        `uni -r a b
        1a2b
        2a2b
        3a3b
        1a4b
        `, `
        2a2b
        3a3b
        1a4b
        `.trimLines()
    ],
    [
        `uni -r a b --reverse
        1a2b
        2a2b
        3a3b
        1a4b
        `, `
        1a2b
        3a3b
        1a4b
        `.trimLines()
    ]
    ,
    [
        `num -c 3
        1
        `,
        `1
        2
        3`.trimLines()
    ],
    [
        `          num -c 8 -s 2 --repeat 2
        1
`,
        `
1
1
3
3
5
5
7
7
9
9
11
11
13
13
15
15`.trimLines()
    ],
    [
        `js
        return 8+9`, `17`
    ],
    [
        `cc
        0xa
        0xfffffffffff*2
0xfffffffffff
        `, `0xa = 10
        0xfffffffffff*2 = 35184372088830
0xfffffffffff = 17592186044415`.trimLines()
    ]
    ,
    [
        `
        cc --isys 2 --osys 16
        1110+1
`,
        `1110+1 = f`
    ]
    ,
    [
        `        cc --isys 16
        9
        a
        b
        ffffffffffff+1
        fffffff<<1 
        fffffffffff*2 
`, `9 = 9
a = 10
b = 11
ffffffffffff+1 = 281474976710656
fffffff<<1 = 536870910
fffffffffff*2 = 35184372088830
`.trimLines()
    ],
    [
        `cc --osys 16
        0xfffffffffff*2
        0xfffffffffff
        35184372088830`,
        `0xfffffffffff*2 = 1ffffffffffe
        0xfffffffffff = fffffffffff
        35184372088830 = 1ffffffffffe`.trimLines()
    ],
    [
        `                    clone -c 4
        hello
`, `hello\nhello\nhello\nhello`
    ],
    [
        `align --left
        ${fs.readFileSync(__dirname + '/src/align/left.input').toString()}
        `,
        `d {()}
        hj{}
        我{}`.trimLines()
    ],
    [
        `align
        ${fs.readFileSync(__dirname + '/src/align/center.input').toString()}
`,
        fs.readFileSync(__dirname + '/src/align/center.output').toString().replace(/\r/g, '')
    ]
    , [
        `exec -p password
       echo hello
       
       ` , `hello`, { regex: true }
    ]
    , [
        `wrvr
        vr`,
        `志`
    ]
    , [
        `wrvr
        yfvr\n同`,
        `同志\\s+同`, { regex: true }
    ]
    , [
        `wrvr
        同志`,
        `yfvr`
    ]
    , [
        `wrvr
        志`,
        `vr`
    ]
    , [
        `wrvr wrvr
        yfvr同志`,
        `yfvr yfk vrk`
    ]
    , [
        `wrvr wrvr
        同志yfvr`,
        `yfk vrk yfvr`
    ]
    , [
        `ip`,
        `\\d+\\.\\d+\\.\\d+`, { regex: true }
    ]
]
module.exports = equals