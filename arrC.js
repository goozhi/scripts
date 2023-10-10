const align = require('./align');
const calcExpression = require('./calcExpression');
const sqlOpr = require('./sqlOpr');
const share = require('./share');
const numGo = require('./numGo');
const sttuInPhone = require('./sttuInPhone');
const execc = require('./execc');
const update = require('./update');
const cmdMatch = require('./cmdMatch');
const axios = require('axios');

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
        func: sqlOpr
    }], [['sttu', 'status'], {
        describe: `output the android system's status
                example:
                sttu
                `,
        func: sttuInPhone
    }], [['exec'], {
        describe: `
                example:
                exec
                node -v`
        ,
        wvvy: '258369',
        func: execc
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
            outputs.outputText = user_params.lastParams.split(/\n/).map(ele => ele + " = " + calcExpression(ele, user_params.isys, user_params.osys)).join('\n')
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
            const arr_2 = user_params.lastParams.trim().split(/\n/).map((ele, key) => {
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
        func: async (user_params = { lastParams: "", file: "", encoding: "utf8", head: false, tail: false, reverse: false }, outputs = { outputText }) => {
            user_params.encoding = user_params.encoding || "utf8"
            user_params.targetText = (user_params.file ? encoding.convert(fs.readFileSync(user_params.file), 'utf8', user_params.encoding).toString() : false) || user_params.lastParams
            const obj_memory = {}
            if (user_params.reg.length > 1) {
                user_params.reg_target = new RegExp(`${user_params.reg[0]}(.*?)${user_params.reg[1]}`, 'i')
                if (user_params.reverse) {
                    user_params.targetText.split(/\n/).filter(ele => /\S/.test(ele)).map(ele => {
                        const target = ele.trim()
                        const obj_mid = target.match(user_params.reg_target)
                        if (obj_mid) {
                            if (!obj_memory[obj_mid[1]]) {
                                obj_memory[obj_mid[1]] = target
                            }
                        } else {
                            obj_memory[target] = target
                        }
                    })
                    outputs.outputText = Object.values(obj_memory).join('\n')
                } else {
                    user_params.targetText.split(/\n/).filter(ele => /\S/.test(ele)).map(ele => {
                        const target = ele.trim()
                        const obj_mid = target.match(user_params.reg_target)
                        if (obj_mid) {
                            obj_memory[obj_mid[1]] = target
                        } else {
                            obj_memory[target] = target
                        }
                    })
                    outputs.outputText = Object.values(obj_memory).join('\n')
                }
            } else {
                if (user_params.reverse) {
                    outputs.outputText = [...new Set(user_params.targetText.trimLines().split(/\n/).filter(ele => /\S/.test(ele)))].join('\n')
                } else {
                    user_params.targetText.split(/\n/).filter(ele => /\S/.test(ele)).map(ele => {
                        const target = ele.trim()
                        obj_memory[target] = true
                    })
                    outputs.outputText = Object.keys(obj_memory).join('\n')
                }
            }
        }
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
                const command = cmdMatch(user_params.lastParams, { mapC })
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