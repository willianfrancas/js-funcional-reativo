const path = require('path');
const fs = require('fs');
const { Observable, Subscriber } = require('rxjs');

function readDirectory(filePath) {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(filePath).forEach(file => {
                subscriber.next(path.join(filePath, file))
            });
            subscriber.complete();
        } catch (e) {
            reject(e);
        }
    })
}

function filterEndsWith(endWith) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if (texto.endsWith(endWith)) {
                subscriber.next(texto)
            }
        }
    }));
}

function createPipeableOperator(operatorFn) {
    return function (source) {
        return Observable.create(subscriber => {
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete(e)),
            });
        });
    }
}

function readFile() {
    return createPipeableOperator(subscriber => ({
        next(path) {
            try {
                const content = fs.readFileSync(path, {
                    encoding: 'utf-8'
                });
                subscriber.next(content.toString());
            } catch (error) {
                subscriber.error(error);
            }
        }
    }));
}

function splitWordBy(symbol) {
    return createPipeableOperator(subscriber => ({
        next(text) {
            text.split(symbol).forEach(part => {
                subscriber.next(part);
            });
        }
    }));
}

function removeEmpty() {
    return createPipeableOperator(subscriber => ({
        next(text) {
            if (text.trim()) {
                subscriber.next(text);
            }
        }
    }));
}

function removeIfInclude() {
    return createPipeableOperator(subscriber => ({
        next(text) {
            if (!text.includes(text)) {
                subscriber.next(text);
            }
        }
    }));
}

function removeIfStartWithNumber() {
    return createPipeableOperator(subscriber => ({
        next(text) {
            const isNum = parseInt(text.trim());
            if (isNum !== isNum) {
                subscriber.next(text);
            }
        }
    }));
}

function removeSymbols(symbols) {
    return createPipeableOperator(subscriber => ({
        next(text) {
            const textWithoutSymbols = symbols.reduce(
                (acc, symb) => {
                    return acc.split(symb).join('');
                }, text);
            subscriber.next(textWithoutSymbols);
        }
    }));
}


function agroupWords() {
    return createPipeableOperator(subscriber => ({
        next(words) {
            const agrouped = Object.values(
                words.reduce((acc, word) => {
                    const el = word.toLowerCase();
                    const qtde = acc[el] ? acc[el].qtde + 1 : 1;
                    acc[el] = { element: el, qtde }
                    return acc;
                }, {}));
            subscriber.next(agrouped);
        }
    }));
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
    removeEmpty,
    removeIfInclude,
    removeIfStartWithNumber,
    removeSymbols,
    splitWordBy,
    agroupWords,
    sortWords,
    createFile,
};