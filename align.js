function align(lines = { obj: {} }) {
    const maxLen = Math.max(...Object.entries(lines).map(([theme, line]) => {
        var cnChars = theme.match(/[^\x00-\xff]/g)
        if (cnChars) {
            line.len = theme.length + cnChars.length
        } else {
            line.len = theme.length
        }
        return line.len
    }
    ));
    Object.entries(lines).map(([theme, line]) => {
        const lenDiff = maxLen - line.len;
        line.need_pad = lenDiff > 0 ? ' '.repeat(lenDiff) : ''
    });
}
module.exports = align