const align = require('./align');
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
const timeLook = require('./cmd-zhqh-atvn/timeLook.js');
const tzfs = require('./cmd-zhqh-atvn/tzfs.js');
const unicode = require('./cmd-zhqh-atvn/unicode.js');
const gethtml = require('./cmd-zhqh-atvn/gethtml.js');
const yue = require('./cmd-zhqh-atvn/yue.js');
const bgiw = require('./cmd-zhqh-atvn/bgl.js');
const tsjq = require('./tsjq.slgr.js');
const uzms = require('./uzms.js');
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
                share add test
                a message shared.

                If you want to get all the message shared:
                share get all

                If you want to search:
                share get
                keyword

                or:
                share find
                keyword

                or:
                share find keyword
                `,
        func: share
    }], [['gethtml'], {
        describe: `get the html of input url.
        example:
        gethtml
        url`,
        func: gethtml
    }], [['bgl', "bgiw", "rr"], {
        describe: `rr bgiw db dk.
        example:
        bgl bv title
        something
        
        bgl get keyword-of-title
        
        nq rvdb bgl tsjq ll, zf aqfc gd tsn znn zzzz nikc.
        bgl init
        zzzz nikc
        
        bgl bv --json
        {title: content, title_2: content}

        nwvt data yxna:
        bgl yxna
        `,
        func: bgiw
    }], [['yue'], {
        describe: `get the data of yueyu word.
        example:
        yue
        \u4f60\u4f60 \u4f60`,
        func: yue
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

        jcbz neig style, nmky so style rnsf:
        tzfs --style
        # Hello
        * [x] Hi
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

            ## ilws vvbr
            wrvr --vv
            pc vvbr

            ## caum nixb zifr diyc wrvr ztwm
            wrvr --ztwm
            aa bb cc
            
            ## rfrf yhrj lh wrvr
            wrvr wrvr
            \u56fd\u56fd\u56fd \u56fd

            ## bv ce eysj
            wrvr bv
            \u56fd\u5bb6

            ## hd ce bv dk eysj
            wrvr hd
            \u56fd\u5bb6

            ## wrvr zogl msox
            wrvr zo

            ## wrvr eysj rjyf zjqt
            wrvr yfm
            wryq yenh zfkk

            ## wrvr yfdp java_ ss json_ rjqt
            wrvr yf

            
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
                if (!command.describe) {
                    uzms('csrf-tsjq hmpc describe_ pzva-' + user_params.lastParams)
                }
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

module.exports = [...arrC, ...tsjq]