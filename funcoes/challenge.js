/**
 * challenge 1:
 * summ values
 * @function sumValues should sum @const number1, @const number1 and @const number3
 *  */
const number1 = 5;
const number2 = 19;
const number3 = 290;


function sumValues(numA) {
    return function (numB) {
        return function (numC) {
            return numA + numB + numC;
        }
    }
}

const sumABC = sumValues(number1)(number2)
console.log(sumABC(17));

/**
 * challenge 1:
 * summ values
 * @function calculateValues should work @const number1, @const number1 and @const number3
 *  */

function calculateValues(numA) {
    return function (numB) {
        return function (numC) {
            return function(fn) {
                return fn(numA, numB, numC);
            }
        }
    }
}

const sub = function (numA, numB, numC) {
    return numC - numB - numA;
}

const sum = function (numA, numB, numC) {
    return numA + numB + numC;
}

const mult = function (numA, numB, numC) {
    return numA * numB * numC;
}

console.log('sub: ', calculateValues(number1)(number2)(number3)(sub));
console.log('sum: ', calculateValues(number1)(number2)(number3)(sum));
console.log('mult:', calculateValues(number1)(number2)(number3)(mult));

const potencia = (base) => {
    return (exp) => {
        return Math.pow(base, exp)
    }
};
const potenciaB = base => exp => Math.pow(base, exp);
console.log(potencia(2)(8));
console.log(potenciaB(8)(2));