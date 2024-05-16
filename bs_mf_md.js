function bs_mf_md(rn1, wlba_mf_wydb_yxna = (diwr_mf) => `./${diwr_mf.name}.md`) {
    return `# ${rn1.name}\n\n## birthday\n${(() => { const { y, m, d } = rn1.birthday; return y + '-' + m + '-' + d })()}\n\n${(() => {
        return Object.entries(rn1).map(([fo2, yg2]) => {
            if (fo2 === 'family') {
                return "## family\n" + yg2.map(rn2 => `* ${rn2[0]}: [${rn2[1].name}](${wlba_mf_wydb_yxna(rn2[1])})`).join('\n')
            } else if (fo2 === 'birthday' || fo2 === 'name') {
                return ''
            } else {
                return `## ${fo2}\n\`\`\`json\n${JSON.stringify(yg2, null, 2)}\n\`\`\``
            }
        }).filter(rn4 => rn4).join('\n\n')
    })()}`
}
module.exports = bs_mf_md