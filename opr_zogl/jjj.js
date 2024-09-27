// zogl test tsjq
const zogl_tsjq = require('../cmd-zhqh-atvn/zogl-zhqh.js');
const Diwr_err = require('../diwr_err.js')
const outputs = require('../outputs.js');
module.exports = async () => {
    const yo_diwr_err = new Diwr_err('zogl test tsjq mr zogl outputs mcvn')
    const di_outputs = outputs()
    await zogl_tsjq({
        _: ['test'],
        'zhqh': true,
        lastParams: `()=>{
            outputs.rj_zhqh_tsjq= 'test -h jj'
            }`,
    }, di_outputs).catch(err => yo_diwr_err.addErr(err))
    if (di_outputs.rj_zhqh_tsjq != 'test -h jj') {
        yo_diwr_err.addErr('csrf-test tsjq pc ms-')
    }
    return yo_diwr_err
}
