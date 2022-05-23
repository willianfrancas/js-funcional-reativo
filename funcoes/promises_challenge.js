const fs = require('fs');
const path = require('path')

const file = path.join(__dirname, 'dados.txt');

readFile = (path) => {
    return new Promise(resolve => {
        fs.readFile(path, (_, content) => {
            resolve(content.toString());
        });
        console.log('Após ler...')
    });
}

readFile(file).then(content => console.log(content));



