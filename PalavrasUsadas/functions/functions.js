const path = require('path');
const fs = require('fs');
function readDirectory(filePath) {
    return new Promise((resolve, reject) => {
        try {
            let files = fs.readdirSync(filePath)
            files = files.map(file => path.join(filePath, file));
            resolve(files);
        } catch (e) {
            reject(e);
        }
    })
}

function filterEndsWith(endWith) {
    return function (array) {
        return array.filter(el => el.endsWith(endWith));
    }
}

function readFile(path) {
    return new Promise((resolve, reject) => {
        try {
            const content = fs.readFileSync(path, { encoding: 'utf-8' });
            resolve(content.toString());
        } catch (error) {
            reject(e);
        }
    });
}

function readFiles(paths) {
    return Promise.all(paths.map(path => readFile(path)));
}

function removeEmpty(array) {
    return array.filter(el => el.trim());
}

function removeIfInclude(text) {
    return function (array) {
        return array.filter(el => !el.includes(text));
    }
}

function removeNumberedLine(array) {
    return array.filter(el => {
        const isNumber = parseInt(el.trim());
        return isNumber !== isNumber;
    });
}

function removeSymbols(symbols) {
    return function (array) {
        return array.map(el => {
            let cleanText = el;
            symbols.forEach(symbol => {
                return cleanText = cleanText.split(symbol).join('');
            });
            return cleanText;
        });
    }
}

function splitWord(phrases) {
    return phrases.map(word => word.split(' '));
}

function agroupWords(words) {
    return Object.values(words.reduce((acc, word) => {
        const w = word.toLowerCase();
        const qtd = acc[w] ? acc[w].qtd + 1 : 1;
        acc[w] = { word: w, qtd };
        return acc;
    }, {}));
}

function sortWords(attr, order = 'asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr];
        const desc = (o1, o2) => o2[attr] - o1[attr];
        return array.sort(order === 'asc' ? asc : desc);
    }
}

function createFile(array) {
    const file = '../dados/mostly_used_words.json';
    fs.writeFileSync(file, JSON.stringify(array));
}

module.exports = {
    readDirectory,
    filterEndsWith,
    readFile,
    readFiles,
    removeEmpty,
    removeIfInclude,
    removeNumberedLine,
    removeSymbols,
    splitWord,
    agroupWords,
    sortWords,
    createFile,
};