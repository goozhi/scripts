const commd = require("./commd")
const fs = require('fs')
const path = require('path')
const outputs = require("./outputs")
const text1 = `hello
111
111
`
const neig = {
    excmds: [[
        [
            'hey'
        ], {
            describe: '',
            func: async (user_params, outputs) => {
                outputs.outputText = 'hey goozhi!'
                return outputs
            }
        }
    ],
    [
        ['hello'],
        {
            func: async (_,outputs)=>{
                outputs.outputText='fuck you china'
            }
        }
    ]    
]
}
commd(text1, outputs(), neig).then(result => console.log(result)).catch(err => console.error(err))