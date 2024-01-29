const align = require('./align');
const calcExpression = require('./calcExpression');
const share = require('./cmd-zhqh-atvn/share.js');
const numGo = require('./cmd-zhqh-atvn/numGo.js');
const sttuInPhone = require('./cmd-zhqh-atvn/sttuInPhone.js');
const ask_autojs = require('./cmd-zhqh-atvn/ask-autojs.js');
const execc = require('./cmd-zhqh-atvn/execc.js');
const update = require('./cmd-zhqh-atvn/update.js');
const cmdMatch = require('./cmdMatch');
const axios = require('axios');
const wrvr = require('./cmd-zhqh-atvn/wrvr.js');
const uni = require('./cmd-zhqh-atvn/uni.js');
const auto_get_ip = require('./cmd-zhqh-atvn/auto-get-ip.js');
const getTheIp = require('./cmd-zhqh-atvn/getTheIp.js');
const getWifiIp = require('./cmd-zhqh-atvn/getWifiIp.js');
const exymNeig = require('./cmd-zhqh-atvn/exym-neig.js');
const rjqt = require('./cmd-zhqh-atvn/rjqt.js');
const timeLook = require('./cmd-zhqh-atvn/timeLook.js');
const tzfs = require('./cmd-zhqh-atvn/tzfs.js');
const unicode = require('./cmd-zhqh-atvn/unicode.js');
String.prototype.fmtLines = function (num = 0) {
    return this.split(/\n/).map(ele => ' '.repeat(num) + ele.trim()).join('\n')
}
String.prototype.trimLines = function () {
    return this.trim().split(/\n/).map(ele => ele.trim()).join('\n')
}
const arrC = [
    [['time', 'getTime'], {
        describe: `get the time
                example:
                // return the current time
                time

                // return the current time that human can read.
                time human

                //return zf tszn dk zdti.
                time 1704004395428
                `,
        func: timeLook
    }],
    [['share'], {
        describe: `share the message
                example:
                share -a test
                a message shared.

                If you want to get all the message shared:
                share get

                If you want to search:
                share get
                keyword

                or:
                share find
                keyword
                `,
        func: share
    }], [['rjqt', "tu", 'file'], {
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
        
        ca um tszn nikc dk sopc nini:
        rjqt rjm /out/

        rjvt rjqt:
        rjqt rjm /out/test.txt
        rjqt rjm /out/test.txt /out/test.2.txt 
        
        rjqt kz /out/test.txt /out/2/test.txt
        rjqt kz /out/2 out/
        rjqt kz /out/2 out/ --files
        rjqt rename /out/test.txt /out/test2.txt

        paaw rename
        rjqt rename /out/ {ll}{2}{ud}
        rjqt rename /out/ {ll}-new{ud} -r a b
        
        rjqt copy /out/test.txt /out/test2.txt
        rjqt copy /out/ /out/2
        rjqt copy /out/ /out/2 --files

        rjqt hd /out
        rjqt hd /out --files
        rjqt hd /out/test.txt
        rjqt hd /out/ -r matcher

        rjqt mkdir /out
        rjqt mkdir /out out2 out3

        rjqt mkfile /test.txt
        rjqt mkfile /test.1.txt test.2.txt

        paaw zyvv rjqt bqeo:
        rjqt zy /out/
        rjqt zy /out/ -r matcher
        rjqt zy /out/test.txt
        rjqt zy /out/test.txt out/test.2.txt

        rjqt filter /out -r a --wfqq

        rjqt filter /out -r a --wfqq --bqeo
        rjqt find /out/test.txt -r a

        `,
        func: rjqt,
        wvvy: true
    }],
    [['exym'], {
        describe: `
        config the exym
        example:
        exym get
        
        exym get --cache

        exym set

        exym init
        `,
        func: exymNeig
    }],
    [['sqlOpr', 'sql'], {
        describe: `sqlOpr
                example:
                sql -a example
                This is an example.

                sql --find 网站

                sql --getAll

                sql -d id

                save all current data from mongodb to phone if the exym run in the phone:
                sql -b
                or sql --save
                
                `,
        wvvy: true,
        func: async (user_params, outputs) => {
            const results = await outputs.ask(
                {
                    sqlOpr: {
                        user_params: user_params,
                        outputs: outputs
                    }
                }
            ).catch(err => { throw err })
            Object.assign(outputs, results)
        }
    }], [['tzfs'], {
        describe: `make the mark to html.
        example:
        tzfs -f toyourfile
        
        tzfs -f toyourDirectory
        
        tzfs
        # Hello
        `,
        func: tzfs
    }],
    [['sttu', 'status'], {
        describe: `output the android system's status
                example:
                sttu
                `,
        func: sttuInPhone
    }], [['auto', 'autojs'], {
        describe: `ask autojs to execute your function
                example:
                auto
                return 99
                `,
        func: ask_autojs,
        aoao_ji_ssvl: true
    }], [['autoip'], {
        describe: `ask autojs to get the ip
                example:
                autoip
                `,
        func: auto_get_ip
    }], [['getip'], {
        describe: `get the ip in your computer.
                example:
                getip
                `,
        func: getTheIp
    }], [['wifi', 'ip', 'wifiip'], {
        describe: `get the wifi ip
                example:
                wifi
                `,
        func: getWifiIp
    }], [['exec'], {
        describe: `
                example:
                exec
                node -v`
        ,
        wvvy: true,
        func: execc
    }], [['wrvr'], {
        describe: `
            wrvr dk stgn cqpi.
            chvx:
            wrvr
            wr
            wrvr
            \u56fd
            wrvr
            tgmh mf hiyq vkrs
            wrvr wrvr
            \u56fd\u56fd\u56fd \u56fd
        `,
        func: wrvr
    }],
    [['update'], {
        describe: `update submodules
                example:
                update

                update -A
                `,
        func: update
    }],
    [['js'], {
        describe: `'js exec.'
                examples:
                js
                var a1 = 9
                return a1
                `,
        func: async (user_params = { lastParams }, outputs = { outputText }, neig) => {
            const vwdp_atvn = eval('(async function main(){' + user_params.lastParams + '\n})')
            outputs.outputText = String(await vwdp_atvn().catch(err => { throw err }))
        }
    }],
    [['cc', 'calc'], {
        describe: `Used to calculation.
        examples:
        cc
        0x89
        0x90+9

        cc --isys 2 --osys 16
        1110+1

        cc --isys 16
        9
        a
        b
        `,
        func: async (user_params = { lastParams: "", isys: 10, osys: 10 }, outputs = { outputText: "" }) => {
            outputs.outputText = user_params.lastParams.trimLines().split(/\n/).map(ele => ele + " = " + calcExpression(ele, user_params.isys, user_params.osys)).join('\n')
        }
    }]
    ,
    [['clone'], {
        describe: `clone the text.
                    examples:
                    clone -c 4
                    hellow
                    `,
        func: async (user_params = { lastParams: "", counts: 0 }, outputs = { outputText: "" }) => {
            outputs.outputText = (user_params.lastParams.trim() + "\n").repeat(user_params.counts).trim()
        }
    }]
    ,
    [['align', '77'], {
        describe: `align the bracket
                examples:
                
                align
                align 
                aaa{}
                aa{}

                align --left
                aaa{}
                aa{}
                `,
        func: async (user_params = { lastParams: "", left: false }, outputs = { outputText: "" }) => {
            const arr_2 = user_params.lastParams.trimLines().split(/\n/).map((ele, key) => {
                const obj_mid = ele.match(/(.*?)\s*(\{.*)/)
                if (obj_mid) {
                    return [obj_mid[1], { target: obj_mid[1], text_org: ele, tail: obj_mid[2] }]
                } else {
                    return [".", { target: false, text_org: ele }]
                }
            })
            const obj_uni = Object.fromEntries(arr_2)
            align(obj_uni)
            outputs.outputText = arr_2.map(ele => {
                if (!ele[1].target) {
                    return ele[1].text_org
                } else {
                    const theme = ele[0]
                    if (user_params.left) {
                        return `${theme}${obj_uni[theme].need_pad}${ele[1].tail}`
                    } else {
                        return `${obj_uni[theme].need_pad}${theme}${ele[1].tail}`
                    }
                }
            }).join('\n')
        }
    }

    ],
    [['uni'], {
        describe: `delete the repeated lines.
                examples:
                uni
                line1
                line2
                line3
                line1

                uni -f path -e gb2312

                uni -r a b
                1 a 1 b
                2 a 2 b
                3 a 3 b
                4 a 1 b

                uni -r a b --reverse
                1 a 1 b
                2 a 2 b
                3 a 3 b
                4 a 1 b

                `,
        func: uni
    }],
    [['test'], {
        describe: `test`,
        func: async (user_params, outputs) => {
            outputs.outputText = JSON.stringify(user_params, null, 4)
        }
    }], [['expl'], {
        describe: `explain english words.
                examples:
                expl
                unexpected`,
        func: async (user_params = { lastParams: "" }, outputs = { outputText: "" }) => {
            if (!user_params.lastParams) {
                throw new Error('Please input a effect word')
            }
            const word = user_params.lastParams.trim(); // 要查询的单词
            await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                .then(response => {
                    const definitions = response.data[0].meanings.map(meaning => meaning.definitions[0].definition);
                    outputs.outputText = JSON.stringify(response.data[0], null, 4)
                })
                .catch(error => {
                    throw error
                });
        }
    }],
    [['aid'], {
        describe: `Ask for help
                examples:
                aid
                cc

                aid -l all

                aid -l keys
                `,
        func: async (user_params = { lastParams: "", list: false }, outputs = { outputText: "" }, options = { mapC: {} }) => {
            if (user_params.list) {
                if (user_params.list === 'all') {
                    outputs.outputText = [...options.mapC].map(([key, value]) => {
                        return `${key}:\n${JSON.stringify(value, null, 4).fmtLines(4).replace(/(?<!\\)\\n/g, '\n')}`
                    }).join('\n\n')
                } else if (user_params.list === 'keys') {
                    outputs.outputText = [...options.mapC.keys()].join('\n')
                } else {
                    throw new Error(`no such parameter in list: ${user_params.list}`)
                }
            } else if (!/\S/.test(user_params.lastParams)) {
                throw new Error(`The last parameters is null with command aid`)
            } else {
                const command = cmdMatch(user_params.lastParams, options)
                outputs.outputText = command.describe.trimLines()
            }
        }
    }],
    [['num', 'number', 'numbers'], {
        describe: `Used to list all numbers.
          examples:
          num -c 8
          1

          num -c 8 -s 2 --repeat 2
          1
    `,
        func: numGo
    }],
    [['qqld'], {
        describe: `qqld rjse dk qh magm.
        example:
        qqld
        1
        2`,
        func: async (user_params = {}, outputs = {}) => {
            if (user_params.lastParams) {
                outputs.outputText = (() => {
                    const vnwm_yhld = user_params.lastParams.split(/\n/)
                    vnwm_yhld.reverse()
                    return vnwm_yhld.join('\n')
                })()
            } else {
                throw new Error('csrf-err: zf aoao vdzv mcvn.')
            }
        }
    }],
    [['unicode'], {
        describe: `unicode ss rjse ldrg.
        example:
        unicode
        hello
        
        unicode unicode
        \\u0068\\u0065\\u006c\\u006c\\u006f`,
        func: unicode
    }], [
        ['magm'], {
            describe: `ja rjse dk qh magm.
            example:
            magm
            b
            a
            d`,
            func: async (user_params, outputs) => {
                outputs.outputText = user_params.lastParams.split(/\n/).sort().join('\n')
            }
        }
    ]
]
module.exports = arrC