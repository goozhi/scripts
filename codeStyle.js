
const labels = {
  img: `
    img{
        width:500
      }`,
  code: {
    dark: `    
  code {
      padding: 4px;
      margin: 0 auto;
      width: auto;
      font-size: larger;
      height: auto;
    }
  `,
    daylight: `
  code {
    line-height: 2em;
    font-family: sans-serif;
    background: #F2F1F1;
      padding: 4px;
    margin: 0 auto;
    width: auto;
    height: auto;
  }

  `
  }

}
const properties = {
  input: {
    checked: `      
        input:checked {
          box-shadow: 0 0 0 3px lime;
          height: 14px;
          width: 14px;
        }
        `
  }
}
const classes = {
  attribute: {
    dark: `
        .attribute{
            color: #9CDCFE;
          }
        `
  }
  , mark1: {
    dark: `
        .mark1 {
            background-color: #eeeff0;
            border: 1px solid #ccc;
          }`
  }
  , code_area: {
    dark: `.code-area {
            padding: 4px;
            margin: 0 auto;
            width: auto;
            font-size: smaller;
            height: auto;
            min-height: 96px;
            background: #1E1E1E;
            border: 1px solid #ccc;
            color: #f0f0f2;
            display: inline-block;
          }
        `,
    daylight: `.code-area {
            padding: 4px;
            margin: 0 auto;
            width: auto;
            font-size: smaller;
            height: auto;
            min-height: 96px;
            background: #F2F1F1;
            border: 1px solid #ccc;
            color: black;
            display: inline-block;
          }
        `

  }

  , keywords: {
    dark: `
        .keywords {
            color: #DCDCAA
          }
        `}
  , gnfo_zt_const: {
    dark: `
    .gnfo_zt_const {
        color: #358CD6
      }
`,
    gtaw_diwr: {
      dark: `
    .gtaw_diwr {
        color: #4FC1FF
      }
`,

    }
  },
  identifier: {
    dark: `
        .identifier {
               color: #9CDCFE;
             }
        `
  }
  ,
  variable: {
    dark: `
        .variable {
               color: #61aeee;
             }`
  }

  ,


  regexp: {
    dark: `
        .regexp {
               color: #D16966;
             }`
  }

  ,







  gtaw_ft_diwr: {
    dark: `
        .gtaw_ft_diwr {
               color: #9CDCFE
             }`
  }

  ,

  string: {
    dark: `
        .string {
               color: #CE9178
             }`
  }

  ,

  ar_siih_tb: {
    dark: `
        .ar_siih_tb {
               color: #1B9FF1
             }`
  }

  ,

  comment: {
    dark: `
        .comment {
               color: #6A8A35
             }`
    , daylight: `
            .comment {
              color: darkgreen;
            }
            `
  }

  ,

  function: {
    dark: `
        .function {
               color: #DCDCAA
             }`
  }

  ,

  ar_siih_hj: {
    dark: `
        .ar_siih_hj {
               color: #F1D710
             }`
  }

  ,

  number: {
    dark: `
        .number {
               color: #98c379;
             }`
  }

  ,

}
const base = [
  labels.img,
  properties.input.checked
].join('\n')

const dark = `${base}\n${[
  labels.code.dark,
  classes.code_area.dark,
  classes.attribute.dark,
  classes.keywords.dark,
  classes.mark1.dark,
  classes.identifier.dark,
  classes.variable.dark,
  classes.regexp.dark,
  classes.gtaw_ft_diwr.dark,
  classes.string.dark,
  classes.ar_siih_tb.dark,
  classes.comment.dark,
  classes.function.dark,
  classes.ar_siih_hj.dark,
  classes.number.dark
].join('\n')}`

const daylight = `${base}\n${[
  labels.code.daylight,
  classes.code_area.daylight,
  classes.comment.daylight
].join('\n')}`

const styles = {
  dark,
  daylight,
}
// console.log(styles.dark)
module.exports = styles