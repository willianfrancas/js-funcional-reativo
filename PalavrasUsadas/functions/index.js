const path = require('path');
const fn = require('./functions');

const filePath = path.join(__dirname, '..', 'dados', 'legendas');
const symbols = [
    '.', ',', '?',
    '-', '"', '_',
    '<i>', '</i>',
    '\r', '[', ']',
    '(', ')', '♪',
     , '!'
];

fn.readDirectory(filePath)
    .then(fn.filterEndsWith('.srt'))
    .then(fn.readFiles)
    .then(contents => contents.join(' '))
    .then(allContent => allContent.split('\n'))
    .then(fn.removeEmpty)
    .then(fn.removeIfInclude('-->'))
    .then(fn.removeNumberedLine)
    .then(fn.removeSymbols(symbols))
    .then(contents => contents.join(' '))
    .then(content => content.split(' '))
    .then(fn.removeEmpty)
    .then(fn.removeNumberedLine)
    .then(fn.agroupWords)
    .then(fn.sortWords('qtd','desc'))
    .then(fn.createFile)
    .then(console.log);