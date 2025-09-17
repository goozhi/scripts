
module.exports = [['ttfz'], {
    describe: `## ttfz rjqt
    ttfz links --nikc "ttfz ud zzl fh n nikc"
    http://link_1
    http://link_2
    
    ## ttfz rjqt vwdp ac iqns
    ttfz links --nikc nikc --vwdp
    link
    link2
    
    ## vkfs styf yxna n rr pj
    ttfz links --nikc nikc --url http://styf/url
    link_wu_1
    link_wu_2
    `,
    func: async (user_params = { lastParams: "", list: false }, outputs = { outputText: "" }, options = { mapC: {} }) => {
        Object.assign(outputs, await outputs.ask({
            ttfzOpr: {
                user_params,
                outputs
            }
        }).catch(err => { throw err }))
    }
}]