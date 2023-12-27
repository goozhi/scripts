const commd = require("../commd")
const fs = require('fs')
const path = require('path')
const outputs = require("../outputs")
const equals = require('./equals')
const { assert } = require("console")
const vwdp_vnwm = equals.map(async ([inputText, outputText, neig]) => {
    const outputResult = (await commd(inputText, outputs()).catch(err => console.error(err))).outputText
    assert(isEqual(outputText, outputResult, neig||{}), 'commd %s is failed\nThe result should be:\n%s\nnot be\n%s\n-----', inputText.replace(/\n[\s\S]*/, ''), outputText, outputResult)
})
Promise.all(vwdp_vnwm).then(res => {
    console.log('Done. Checked %d commands', equals.length)
}).catch(err => console.error(err))
function isEqual(outputText,outputResult,neig={regex:false}){
if(neig.regex){
return new RegExp(outputText).test(outputResult)
}else{
return outputText === outputResult
}
}