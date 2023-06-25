const yargsParser = require('yargs');
const align = require('./align');
const fs = require('fs')
const child_process = require('child_process')
const encoding = require('encoding')
const options = require('./cmd_params_option');
const calcExpression = require('./calcExpression');
const sqlOpr = require('./sqlOpr');
String.prototype.trimLines = function () {
    return this.split(/\n/).map(ele => ele.trim()).join('\n')
}

String.prototype.fmtLines = function (num = 0) {
    return this.split(/\n/).map(ele => ' '.repeat(num) + ele.trim()).join('\n')
}
async function commd(inputText) {
    inputText = inputText.replace(/\r/g, '')
    const matchP = inputText.match(/(.+)([\s\S]*)/)
    const outputs = {}
    if (!matchP) {
        throw new Error('there is no command in inputText!')
    } else {
        const firstLine = matchP[1].trim()
        const otherLines = matchP[2].trim()
        const user_params = Object.assign({}, yargsParser(firstLine).options(options).parse(), { lastParams: otherLines })
        const arrC = [
            [['sqlOpr', 'sql'], {
                describe: `sqlOpr
                example:
                sqlOpr -a
                This is an example.
                `,
                func: sqlOpr
            }],
            [['update'], {
                describe: `update submodules
                example:
                update
                `,
                func: async (outputs = { outputText }) => {
                    outputs.outputText = await new Promise((resolve, reject) => {
                        child_process.exec('git submodule update --remote', (err, stdout) => {
                            if (err) {
                                reject((err.message ? (!(err.message = "update err:\n" + err.message) || err) : err))
                            } else {
                                resolve(stdout)
                            }
                        })
                    })
                }
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

            ], [['open'], {
                describe: `open the project.
                examples:
                open
                `,
                func: async (_, outputs = { outputText: '' }) => {
                    outputs.outputText = await new Promise((resolve, reject) => {
                        child_process.exec(`start ${__dirname.replace(/(ouss\w*|vuejs).*/i, "$1")}`, (err) => {
                            if (err) {
                                reject(err)
                            } else {
                                resolve('done')
                            }
                        })
                    })
                }
            }],
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
                func: async (user_params = { counts: 0, steps: 1, lastParams: "", repeat: 1 }, outputs = { outputText: "" }) => {
                    if (user_params.counts) {
                        outputs.outputText = num(user_params.counts, user_params.steps, (user_params.lastParams.trim() + '\n').repeat(user_params.repeat ? user_params.repeat : 1).trim())
                    } else {
                        throw new Error(`There must have a parameter named 'c' which means 'counts'`)
                    }
                }
            }]
        ]
        const mapC = new Map(arrC)
        const targetCmd = cmdMatch(user_params._[0], { mapC })
        await targetCmd.func(user_params, outputs, { mapC }).catch(err => { throw err })
        if (user_params.write.length > 0) {
            fs.writeFileSync(user_params.write[0], encoding.convert(outputs.outputText, user_params.write[1] || user_params.encoding, 'utf8'))
        }
        return outputs
    }
}
module.exports = commd

function num(counts = 1, steps = 1, inputText = "") {
    counts = Number(counts)
    if (isNaN(counts)) {
        throw new Error(`This thing is not a NUMBER: ${counts}`)
    }
    return Array.from({ length: counts }, (ele, key) => {
        return inputText.replace(/\d+/g, (match) => {
            return Number(match) + steps * key
        })
    }).join('\n');
}

function cmdMatch(targetText, options = { mapC: new Map() }) {
    const cmdMatched = [...options.mapC].filter(ele => new RegExp(`^(?:${ele[0].join('|')})$`, 'i').test(targetText))
    if (cmdMatched.length === 1) {
        return cmdMatched[0][1]
    } else if (cmdMatched.length > 1) {
        throw new Error(`There has more than one command like ${cmdMatched.join(', ')}:${targetText}`)
    } else {
        throw new Error(`There is no such command :${targetText}`)
    }
}