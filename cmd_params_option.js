const option = {
    counts: {
        alias: 'c',
        describe: 'Count the number of times something appears',
        type: 'number',
        default: 0,
    },
    steps: {
        alias: ['s'],
        describe: 'The number of steps between numbers',
        type: 'number',
        default: 1,
    },
    add: {
        alias: 'a',
        describe: 'add things',
        type: 'string',
        default: ''
    },
    left: {
        alias: 'left',
        describe: 'left',
        type: 'boolean',
        default: false
    },
    list: {
        alias: 'l',
        describe: 'list',
        type: 'string',
        default: ""
    },
    find: {
        alias: 'find',
        describe: 'find something',
        type: 'array',
        default: []
    },
    getAll: {
        alias: 'getAll',
        describe: 'get All',
        type: 'boolean',
        default: false
    },
    write: {
        alias: 'w',
        describe: 'Write the targetText to the targetPath. Example: -w path encoding',
        type: 'array',
        default: []
    },
    reg: {
        alias: 'r',
        describe: 'The RegExp array. Example: -r "[a-f0-9]" "[\\x02-\\x2f]"',
        type: 'array',
        default: []
    },
    encoding: {
        alias: '-e',
        describe: 'The encoding of file.',
        type: 'string',
        default: 'utf8'
    },
    file: {
        alias: '-f',
        describe: 'The path of file.',
        type: 'string',
        default: ''
    },
    mode: {
        alias: 'mode',
        describe: 'mode',
        type: 'array',
        default: []
    },
    reverse: {
        alias: 'reverse',
        describe: 'reverse',
        type: 'boolean',
        default: false
    },
    inputSystem: {
        alias: 'isys',
        describe: 'input System of calculation',
        type: 'number',
        default: 10
    },
    outputSystem: {
        alias: 'osys',
        describe: 'output System of calculation',
        type: 'number',
        default: 10
    },

};
module.exports = option