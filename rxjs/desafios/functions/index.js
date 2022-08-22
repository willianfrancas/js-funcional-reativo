const path = require('path');
const fn = require('./functions');
const { map, toArray, mergeMap, reduce, groupBy } = require('rxjs/operators');
const _ = require('lodash');
// const { groupBy } = require('lodash');

const filePath = path.join(__dirname, '..', 'dados', 'legendas');
const symbols = [
    '.', ',', '?', '-', '"', '_',
    '<i>', '</i>', '\r', '[', ']',
    '(', ')', '♪', '!'
];

fn.readDirectory(filePath)
    .pipe(
        fn.filterEndsWith('.srt'),
        fn.readFile(),
        fn.splitWordBy('\n'),
        fn.removeEmpty(),
        fn.removeIfStartWithNumber(),
        fn.removeSymbols(symbols),
        fn.splitWordBy(' '),
        fn.removeEmpty(),
        fn.removeIfStartWithNumber(),
        groupBy(el => el),
        mergeMap(grp => grp.pipe(toArray())),
        map(words => ({ element: words[0], qtde: words.length })),
        toArray(),
        map(arr => _.sortBy(arr, el => -el.qtde)),

    )
    .subscribe(console.log);