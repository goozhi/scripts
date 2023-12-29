const align = require('./align');
const calcExpression = require('./calcExpression');
const share = require('./share');
const numGo = require('./numGo');
const sttuInPhone = require('./sttuInPhone');
const ask_autojs = require('./ask-autojs.js');
const execc = require('./execc');
const update = require('./update');
const cmdMatch = require('./cmdMatch');
const axios = require('axios');
const wrvr=require('./KPLU/wrvr/index.js')
const uni = require('./uni');
const auto_get_ip = require('./auto-get-ip.js');
String.prototype.fmtLines = function (num = 0) {
    return this.split(/\n/).map(ele => ' '.repeat(num) + ele.trim()).join('\n')
}
String.prototype.trimLines = function () {
    return this.trim().split(/\n/).map(ele => ele.trim()).join('\n')
}
const arrC = [
    [['getTime'], {
        describe: `获取时间戳
                example:
                getTime

                `,
        func: async (_, outputs = { outputText }) => {
            outputs.outputText = new Date().getTime()
        }
    }],
    [['share'], {
        describe: `share the message
                example:
                share -a
                a message shared.

                share --getAll
                you will get all the message shared.
                `,
        func: share
    }],
    [['sqlOpr', 'sql'], {
        describe: `sqlOpr
                example:
                sql -a example
                This is an example.

                sql --find 网站

                sql --getAll

                sql -d id

                save all current data from mongodb to phone if the server run in the phone:
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
    }], [['sttu', 'status'], {
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
        func: ask_autojs
    }], [['ip', 'getip'], {
        describe: `ask autojs to get the ip
                example:
                ip
                `,
        func: auto_get_ip
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
        func: wrvr.afoa
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
        func: async (user_params = { lastParams }, outputs = { outputText }) => {
            outputs.outputText = String(eval('function main(){' + user_params.lastParams + '\n};main()'))
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
    }]
]
module.exports = arrC